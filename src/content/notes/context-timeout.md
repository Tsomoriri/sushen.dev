---
layout: layouts/note.njk
title: The caller owns the timeout
date: 2026-03-28
tags: [go, reliability]
kind: note
summary: The handler cannot know how patient its caller is.
---

Put the deadline at the call site and pass the context through every boundary.

```go
ctx, cancel := context.WithTimeout(parent, 750*time.Millisecond)
defer cancel()

result, err := store.Lookup(ctx, key)
```

That keeps the latency budget visible where the work is requested.

