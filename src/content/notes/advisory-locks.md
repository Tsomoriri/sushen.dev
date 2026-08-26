---
layout: layouts/note.njk
title: Advisory locks beat table locks
date: 2026-04-08
tags: [postgres, concurrency]
readingTime: 6 min
summary: A small coordination primitive is often enough when the database is already the shared source of truth.
---

This is a sample published note. Replace this text with the full article when it is ready.

## The useful constraint

Advisory locks make ownership explicit without forcing unrelated rows through the same locking path.

