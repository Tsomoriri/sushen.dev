---
layout: layouts/note.njk
title: WAL mode changes the failure mode
date: 2026-04-02
tags: [sqlite, reliability]
kind: note
summary: Readers stop blocking, which makes checkpoint timing the next thing worth understanding.
---

WAL mode is not just a tuning knob. It changes which operations contend and when durable work is consolidated.

```sql
PRAGMA journal_mode = WAL;
PRAGMA wal_autocheckpoint = 1000;
```

The defaults are often reasonable. Measure checkpoint duration and WAL growth before changing them.

