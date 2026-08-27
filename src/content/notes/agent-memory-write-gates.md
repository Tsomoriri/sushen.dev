---
layout: layouts/note.njk
title: Write gates, and why agent memory should scale with facts rather than sessions
date: 2026-08-27
tags: [agents, context-engineering, memory, llm]
readingTime: 9 min
summary: Tiered stores, slug-addressed cards updated in place, and forked subagents are three consequences of a single constraint — attention is a finite budget, and an append-only memory spends it.
sourceUrl: https://lnkd.in/p/dAMGiy9C
draft: false
---

![Three controls that bound an agent's memory: a write gate, a slug-addressed card updated in place, and a forked child that returns only its summary.](/assets/agent-memory-write-gates.png)

Recent developments in long-horizon agents have heightened the need for a principled account of what an agent should keep, where it should keep it, and what it should be permitted to write down. This note argues that most of the current design vocabulary — tiered memory, write gates, structured cards, subagent forks — falls out of one constraint, and that stating the constraint precisely is more useful than cataloguing the patterns.

The constraint is this: **the cost of an agent's memory should be a function of the number of things that are true, not of the number of times the agent has run.** Everything below is an attempt to satisfy that.

## The finite-budget premise

Attention over a sequence of `n` tokens is a computation over pairwise relations, and the model's capacity to weight any one of them is bounded. It follows that a token added to the context does not merely occupy space; it dilutes the attention mass available to every token already present. The context window is therefore better understood as a *budget* than as a *container*, and the distinction is not merely terminological: a container is full or not full, whereas a budget is spent well or badly long before it is exhausted.

It is now well established from a variety of evaluations that this dilution has a measurable behavioural signature. Recall degrades non-uniformly as input length grows — on tasks that are trivial at short lengths — and the presence of plausible-but-irrelevant distractor content amplifies the effect. The phenomenon is commonly termed *context rot*. Its practical implication is that an agent can fail well below its nominal limit, and that it will fail in a way that looks like reasoning failure rather than capacity failure.

## Why a larger window does not resolve it

An obvious response is to enlarge the window. However, this approach suffers from a number of shortcomings. Degradation is non-uniform rather than cliff-edged, so additional capacity postpones the symptom without removing it; prefill latency scales with sequence length; and cost scales with it too. More decisively, enlarging the window does nothing about the *composition* of what occupies it. An agent that has read eight documents to answer a question about four of them has not been helped by being able to hold sixteen.

## Persistence relocates the problem rather than solving it

The second obvious response is to give the agent a durable store, so that what it learns survives the reset of any one session. This is correct, and insufficient. If the store is append-only — a running log of decisions, observations and notes — then the pathology reappears one level down. Practitioner reports of a `decisions-archive.md` growing into the hundreds of thousands of tokens after a few weeks of use describe the failure exactly; the memorable phrase for the endpoint is a *memory landfill*, or, less charitably, a token landfill with tools attached.

The reason is structural rather than a matter of discipline. A log is **append-addressed**: the only write operation it supports is *add*. A fact that changes therefore cannot be corrected, only superseded, and the store comes to hold every superseded version of every fact alongside the current one. Reconciliation is deferred to read time, where it is most expensive and least reliable, and where the superseded copies function as exactly the distractors that context rot punishes.

What is required, then, is a memory that is **bounded in size but unbounded in time**. That requirement forces two controls, and they are orthogonal.

## The spatial control: tiering

The first control is a hierarchy, and the operating-system analogy that motivates it is by now the standard one. MemGPT — and Letta, the runtime built on it — treat the context window as main memory in a virtual memory system: a small *core* block that is always resident and directly editable, a *recall* tier holding searchable interaction history outside the context, and an *archival* tier queried through explicit tool calls. Registers, RAM, disk.

The feature of this arrangement that actually does the work is not the number of tiers but the hard budget on the hot one. Because core memory is small and always resident, promotion into it is necessarily zero-sum: to write, the agent must evict or rewrite. Scarcity in the hot tier is what converts "remembering" from a free action into a decision with a cost, and decisions with costs are the only kind an agent can be trained or instructed to make well.

```text
       in context, always paid for   ┌──────────────┐
                  hard byte budget → │  CORE        │  edited in place
                                     ├──────────────┤
       out of context, searchable    │  RECALL      │  retrieved on demand
                                     ├──────────────┤
       out of context, cold          │  ARCHIVE     │  queried by tool call
                                     └──────────────┘
```

## The temporal control: the write gate

The second control governs *when* the store is permitted to grow at all. In a gated design, a candidate does not become a durable memory because the agent found it interesting; it becomes one because it passed a predicate. Reported production gates require each durable write to carry a scope classification, provenance, a retention policy, and a verification status — four fields that are cheap to attach at write time and impossible to reconstruct later.

The parallel read gate matters as much and is discussed less: retrieval is restricted to records relevant to the task in hand, so that a large store does not translate into a large context. A store may be permitted to grow if reads from it stay narrow; a store whose reads are broad must stay small.

Anthropic's managed memory stores are instructive here because the gate is partly enforced by the platform rather than left to the model's judgement. Each memory is capped at 100 kB, roughly 25k tokens; a store holds at most 2,000 memories; a session may attach at most eight stores; and the guidance is explicit that memory should be structured as many small focused files rather than a few large ones. When a store reaches its limit, writes fail. A hard ceiling of this kind is not a limitation that curation works around — it *is* the curation mechanism, because it makes pruning compulsory rather than aspirational.

## The unit of memory: a slug-addressed card

Given a gate and a hierarchy, the remaining question is what shape a single memory should take. The answer that follows from the size law is a **card**: a small, self-describing document addressed by a stable slug.

In this respect a card differs from a log entry in one decisive way. A card is **key-addressed**, so its write operation is *upsert at slug* rather than *add*. When a fact changes, the correction overwrites the card rather than accumulating beside it. Store size therefore becomes a function of the number of distinct facts the agent knows, and is decoupled from the number of sessions it has run — which is precisely the property the size law demands, and precisely the property a log cannot have.

The addressing convention is worth being concrete about, because it is what makes a card findable without a retrieval step. Anthropic's stores mount under a filesystem-safe slug derived from the display name — a store called `Demo Memory` mounts at `/mnt/memory/demo-memory/` — and each memory within it is addressed by path. The API distinguishes the two operations sharply: `memories.create` will not overwrite, while `memories.update` changes content, path, or both. Renaming a card to `/archive/2026_q1_formatting.md` is an eviction expressed as an address change.

A card carries structure so that the gate can be evaluated mechanically rather than by re-reading prose:

```yaml
# /conventions/error-handling.md
slug:        conventions/error-handling
scope:       project            # project | user | org
provenance:  pr-4182#review     # where the claim came from
verified:    2026-08-19         # last time it was checked against reality
confidence:  high
expires:     2026-11-19         # after which the card is a candidate, not a fact
supersedes:  conventions/error-handling@v3
---
Errors cross module boundaries as typed values, never as exceptions.
Panics are reserved for invariant violations.
```

Every field above exists so that some later decision can be made without judgement: `expires` schedules its own review, `verified` distinguishes a stale card from a wrong one, `provenance` makes a bad write traceable to its source, and `scope` decides which store the card belongs in.

## What updating in place actually costs

A note of caution is due here, since the advantages of in-place updating are frequently reported without their corresponding liability. An append-only log has one genuine virtue: it cannot suffer a lost update. Two concurrent writers appending to a log both succeed. Two concurrent writers upserting the same slug do not — the second silently destroys the first, and the destroyed write is the one that was verified most recently as often as not.

The remedy is ordinary and should be treated as part of the card design rather than as an implementation detail: compare-and-swap on write. The Anthropic API exposes this as a `content_sha256` precondition, so an update applies only if the stored content hash still matches the one the writer read; on mismatch, the writer re-reads and retries against fresh state. This matters more, not less, in multi-agent settings, where several children may hold the same card open at once. Pair it with immutable version history — every mutation producing a retained, auditable version — and in-place updating recovers the one property that made the log attractive, without inheriting the growth that made it fail.

## The second axis: context as a fork, not a sum

Everything above concerns what an agent writes down. The orthogonal question is how a *system* of agents spends the orchestrator's budget, and here the governing mechanism is narrower than it is usually described.

A subagent runs in its own context window, sized by its own model rather than the parent's. A non-fork child begins nearly empty — its own system prompt, the delegation message, project instructions — and sees none of the parent's conversation. A *fork* child, by contrast, inherits the parent's full message history, system prompt, tools and model, and reuses the parent's prompt cache on its first request, which makes it cheap for work that genuinely needs the background.

The property that matters for the budget, however, is identical in both cases: **the child's tool calls never enter the parent's transcript; only its final result does.** The orchestrator's consumption for a delegated task therefore falls from `O(tokens the task must read)` to `O(tokens of the returned summary)`.

This is where the frequently quoted claim that a fork "preserves more than 66 % of the orchestrator's context window" should be examined rather than repeated. I was unable to locate a published measurement behind that figure, and it is best read as a design target rather than an empirical constant. It is, however, straightforward to derive a floor for it. Let `W` be the tokens a delegated task consumes and `S` the tokens it returns. The fraction of the parent's budget preserved is:

```text
P  =  1 − S/W

P > 0.66   ⟺   S/W < 1/3
```

That is a permissive threshold. Anthropic's own compaction example distils a 41,000-token document into roughly 2,783 tokens — a ratio of `S/W ≈ 0.068`, giving `P ≈ 93 %`. The 66 % target is therefore met by roughly an order of magnitude whenever the child's work is genuinely voluminous.

The most striking consequence to emerge from this arithmetic is an inversion of what the threshold is for. A delegation that fails to preserve two thirds of the parent's window is one whose summary approaches a third the size of the work it summarises — which is to say, a task whose output could not be compressed, and which therefore should not have been delegated. **The 66 % figure is not a benchmark of forking; it is a test of whether the delegation was worth making.**

## The evidence, such as it is

Published end-to-end numbers for these mechanisms remain scarce, but one first-party research-agent case study reports the following peaks over an identical task:

```text
scenario                       turns   peak ctx    final ctx   file reads
─────────────────────────────────────────────────────────────────────────
baseline, no management          5     335,279     335,279         8
compaction only                  7     169,164       5,829         8
tool-result clearing only        7     173,137     173,137         8
memory: session 2 without S1     9     333,977     333,977         8
memory: session 2 with S1        6     172,623     172,623         4
```

The evidence presented thus far supports the idea that the mechanisms are complementary rather than competing. Compaction bounds the peak and collapses the tail. Clearing bounds the window without inference cost, by replacing re-fetchable tool results with placeholders while retaining the record that the call occurred. Persistent notes reduce *work*, not merely tokens: the session that read its predecessor's notes needed four source documents instead of eight, which is the only one of these numbers that reflects a saving in the world rather than in the transcript.

Taken together, these findings suggest that roughly half the peak context of a naive long-horizon run is recoverable by mechanical means, before any change to the agent's reasoning.

## Two failure modes worth stating plainly

Compaction is lossy in a specific and predictable direction. In the example above, three of three high-level facts survived the summary and none of three obscure specifics did. It follows that compaction cannot be the only tier: anything whose value lies in its exact form — an identifier, a version pin, a numeric threshold — needs a verbatim home that summarisation does not touch.

The more serious failure mode is that a write gate is a **security** control and not merely a hygiene one. A memory store attached with write access to an agent that processes untrusted input — user prompts, fetched web content, third-party tool output — is a persistence mechanism for prompt injection: a successful injection writes into the store, and every later session reads that content as trusted memory. The vendor guidance is explicit that reference material and any store the agent need not modify should be attached read-only. The provenance and verification fields on a card are what make such a write reviewable after the fact; the read-only mount is what prevents it.

## Where this leaves the design

One question that needs to be asked, however, is whether the gate should be a model decision at all. Every mechanism described here that reliably bounds growth is enforced outside the model — a hard store cap, a read-only mount, a filesystem-level access mode, a hash precondition, an expiry date on a card. Every mechanism that depends on the agent's own judgement about what is worth remembering degrades over long horizons, for the same reason that context rot degrades recall: judgement is drawn from the same finite budget the mechanism is meant to protect.

Further work is required to establish how much of the gate can be moved into the harness without making the agent brittle, and what a benchmark for memory *curation* — as distinct from memory *retrieval* — would need to measure. In the meantime the size law is a usable design test. Ask of any proposed memory system: after a thousand sessions, does it hold a thousand sessions' worth of records, or does it hold what is true? If the answer is the former, no amount of retrieval sophistication will save it.
