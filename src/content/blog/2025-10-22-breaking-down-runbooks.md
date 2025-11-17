---
title: "Breaking Down Runbooks"
date: "2025-10-22"
description: "How I structure incident runbooks so new responders can contribute within five minutes."
topic: "Incident Response"
tags:
  - SRE
  - Incident Response
  - Tooling
---

Operations teams tend to hoard context. The runbooks that stick with people read like storyboards, not manuals.

## Opening move: orient fast

Start with a 30-second diagnostic tree. When a responder can answer "Is DNS broken?" or "Is the queue backlogged?" quickly, anxiety drops and progress starts.

## Keep actions atomic

Each step should yield a clear success signal. The command list below is typical:

```bash
kubectl get pods --field-selector=status.phase!=Running
kubectl describe deploy web-frontend
kubectl rollout undo deploy web-frontend
```

Pair every command with the expected output so responders know what "good" looks like.

## State assumptions loudly

If a step expects access to production secrets or a specific feature flag, state it inline. That clues the on-call to phone a friend or escalate early.

## Close with verification

Resist the urge to end once the app loads. Verification closes the loop and teaches responders what "resolved" means operationally.

> When people feel guided, they contribute. Good runbooks create that runway.
