---
title: "Kubernetes Troubleshooting Guide"
date: "2025-11-22"
description: "A systematic approach to debugging common Kubernetes issues."
topic: "Kubernetes"
tags:
  - Kubernetes
  - Troubleshooting
  - DevOps
---

Debugging Kubernetes can be daunting. When a pod fails, having a systematic approach helps isolate the issue quickly.

## 1. Check Pod Status

Start by checking the status of your pods.

```bash
kubectl get pods
```

If a pod is in `CrashLoopBackOff` or `Pending` state, describe it to get more details.

```bash
kubectl describe pod <pod-name>
```

Look at the `Events` section at the bottom of the output. It often contains the reason for the failure, such as scheduling issues or image pull errors.

## 2. Inspect Logs

If the pod is running but not behaving as expected, check the application logs.

```bash
kubectl logs <pod-name>
```

For pods with multiple containers, specify the container name:

```bash
kubectl logs <pod-name> -c <container-name>
```

## 3. Verify Connectivity

If the application is running but unreachable, check the service and ingress configurations.

- Ensure the Service selector matches the Pod labels.
- Verify that the target port in the Service matches the container port.

## 4. Resource Constraints

OOMKilled (Out of Memory) errors are common. Check if your pod limits are too low.

```yaml
resources:
  limits:
    memory: "512Mi"
    cpu: "500m"
```

Monitoring tools like Prometheus and Grafana are essential for spotting resource bottlenecks before they cause outages.
