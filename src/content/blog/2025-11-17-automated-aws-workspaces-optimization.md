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
cover: "/images/blog/workspaces-optimization.png"
---

![AWS WorkSpaces Optimization Workflow](https://via.placeholder.com/800x400/4fd4e0/ffffff?text=AWS+WorkSpaces+Optimization+Workflow)

Managing cloud costs can feel like a never-ending battle, especially when dealing with virtual desktops that accumulate unnoticed. In our organization, we faced rising AWS WorkSpaces expenses from idle instances that were running 24/7, even when users hadn't logged in for weeks. To tackle this without disrupting active users, we built an automated workflow using **Cloud Custodian**, the **WorkSpaces Cost Optimizer**, and **Amazon SES**. This approach not only slashed our idle spend but also made the process hands-off and scalable.

## Idle WorkSpace Detection

The foundation of our solution was accurate detection of idle WorkSpaces. We leveraged Cloud Custodian's powerful policies to scan our entire WorkSpaces estate regularly. By examining the `LastKnownUserConnectionTimestamp` for each instance, we could identify those that hadn't been used beyond our agreed threshold of 30 days.

```yaml
policies:
  - name: idle-workspaces-detection
    resource: aws.workspaces
    filters:
      - type: value
        key: LastKnownUserConnectionTimestamp
        value_type: age
        value: 30
        op: greater-than
      - type: value
        key: State
        value: AVAILABLE
    actions:
      - type: tag
        key: IdleDetection
        value: "true"
```

To ensure fairness, we layered in additional filters that prevented any active users from experiencing unexpected shutdowns. This careful approach gave us confidence that only truly dormant resources would be flagged for action.

## Owner Notification via AWS SES

Once we identified idle WorkSpaces, communication became crucial. We didn't want to surprise users or create friction, so we set up automated notifications using AWS SES. By configuring SES with a dedicated sending identity—like `alerts@custom.co`—we ensured that our emails passed through corporate filters such as Mimecast without issues.

Each notification included a clear summary of the inactivity period and the scheduled cleanup date, giving owners ample time to opt out if needed. We also implemented DKIM, SPF, and DMARC to guarantee inbox delivery, turning what could have been a source of frustration into a transparent process.

> **Pro Tip**: Always include an opt-out mechanism in automated notifications. It builds trust and reduces support tickets.

## Tagging & Lifecycle Management

With notifications in place, we moved to lifecycle management. Inactive WorkSpaces were tagged with a `PendingDeletion` label that included the planned deletion date. Our workflow operated in two distinct stages: first, tagging and notifying, and second, automated deletion after the grace period.

| Stage | Action | Timing |
|-------|--------|--------|
| 1 | Tag + Notify | Immediate |
| 2 | Delete | After grace period |

This was all handled by Cloud Custodian, eliminating the need for manual follow-up and reducing the risk of human error. It was a clean, auditable system that kept our operations efficient.

## Cost Optimization

To optimize costs even further, we integrated the **Amazon WorkSpaces Cost Optimizer**. This tool allowed us to switch idle Always-On WorkSpaces to Auto-Stop mode when usage patterns indicated lower activity. By doing this, we preserved all user data while significantly reducing compute costs.

```
Cost Savings Example:
- Always-On WorkSpace: ~$25/month
- Auto-Stop WorkSpace: ~$5/month
- Potential savings: 80% for idle instances
```

Continuous monitoring of usage patterns helped us stay proactive, adapting to any changes in user behavior before they impacted our budget.

## Full Automation & Scheduling

Finally, we automated the entire process for full hands-off operation. The complete policy set runs on a daily cadence through Cloud Custodian, deployed as a Lambda-backed solution that requires no server maintenance.

```bash
# Example deployment command
custodian run --output-dir ./output ./policies/workspaces.yml
```

This setup delivered an auditable, extensible workflow that keeps our cloud spend in check without the burden of weekly manual chores. The result? A smarter, more cost-effective WorkSpaces environment that supports our team without unnecessary overhead.

---

*If you're dealing with similar cloud cost challenges, consider starting with Cloud Custodian's documentation. It's a game-changer for automated resource management.*
