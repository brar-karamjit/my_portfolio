---
title: "GitOps Sanity Checks"
date: "2025-09-12"
description: "Lightweight guardrails I rely on before merging a cluster change into production."
topic: "Platform Playbooks"
tags:
  - GitOps
  - Kubernetes
  - DevOps
cover: "/images/blog/gitops-sanity.png"
---

Staging clusters catch most errors, but a few inexpensive checks keep the blast radius tiny.

## 1. Dry-run quickly, but for the right context

`kubectl diff` with the live namespace surfaces opinionated config drift. I keep a make target that runs it against the same service account Argo CD uses. It catches issues like missing secrets **before** git declares victory.

## 2. Validate manifests as a bundle

Conftest with Rego policies is my go-to. Rego rules read cleanly and the binary works without a runtime. A simple `make policy` keeps regressions out of the repo.

## 3. Exercise admission controls locally

OPA Gatekeeper and Kyverno both support local testing. I keep failing fixtures checked in so the team remembers why a rule exists.

## 4. Lean on preview environments judiciously

Preview or ephemeral namespaces are great, but they are still clusters to babysit. I limit them to PRs touching more than three workloads or Helm charts with templating changes.

## Checklist

- `make diff` succeeds
- Policy tests pass
- Admission test fixtures updated
- Preview namespace torn down

Shipping with this list keeps Argo CD green and the pager quiet.
