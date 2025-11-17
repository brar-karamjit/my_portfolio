---
title: "Automated AWS WorkSpaces Optimization Workflow"
date: "2025-11-17"
description: "How we used Cloud Custodian, WorkSpaces Cost Optimizer, and SES to cut idle spend without interrupting active users."
topic: "Cloud Operations"
tags:
  - AWS
  - Cloud Custodian
  - Cost Optimization
  - Automation
---

## 1. Idle WorkSpace Detection

- Used Cloud Custodian policies to scan every WorkSpace in the estate.
- Checked `LastKnownUserConnectionTimestamp` and flagged anything idle past the agreed threshold (30 days).
- Layered filters so active users never saw a surprise shutdown.

## 2. Owner Notification via AWS SES

- Configured SES with a dedicated sending identity (for example, `alerts@custom.co`) so Mimecast and other corporate filters trusted the mail.
- Automatic messages gave owners the inactivity summary plus the scheduled cleanup date—enough time to opt out.
- Locked in DKIM, SPF, and DMARC to ensure inbox delivery.

## 3. Tagging & Lifecycle Management

- Marked inactive WorkSpaces with a `PendingDeletion` tag that also stored the planned deletion date.
- Workflow ran in two stages:
  1. Tag + notify.
  2. Post-grace-period deletion handled entirely by Cloud Custodian—no manual follow-up.

## 4. Cost Optimization

- Brought in the Amazon WorkSpaces Cost Optimizer to switch idle Always-On WorkSpaces into Auto-Stop mode when usage dropped.
- Preserved user data while trimming compute bills.
- Monitored usage to stay ahead of pattern changes.

## 5. Full Automation & Scheduling

- Scheduled the full policy set to execute on a daily cadence via Cloud Custodian.
- Deployed as a Lambda-backed solution so no servers needed babysitting.
- Delivered an auditable, extensible workflow that keeps spend in check without weekly cleanup chores.
