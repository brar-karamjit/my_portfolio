import httpsImg from "../../Assets/Projects/portfolio.png";
import icmpImg from "../../Assets/Projects/inventory.png";
import aiImg from "../../Assets/Projects/AI-assistant.png";

export const interactivePosts = [
  {
    id: "https-key-exchange",
    title: "HTTPS Key Exchange",
    summary:
      "See the TLS handshake unfold step-by-step to demystify how secure sessions begin.",
    tags: ["Security", "Networking"],
    topic: "Zero Trust Foundations",
    readingTime: "6 min watch",
    path: "/blog/https-key-exchange",
    imgPath: httpsImg
  },
  {
    id: "icmp-ping",
    title: "ICMP Ping",
    summary:
      "Follow an animated packet trace to learn how everyday connectivity checks succeed or fail.",
    tags: ["Diagnostics", "Networking"],
    topic: "Day-2 Operations",
    readingTime: "5 min watch",
    path: "/blog/icmp-ping",
    imgPath: icmpImg
  },
  {
    id: "ddos-attack",
    title: "DDoS Attack Simulation",
    summary:
      "Visualize how distributed denial-of-service attacks overwhelm servers and learn defense strategies.",
    tags: ["Security", "Networking", "Cybersecurity"],
    topic: "Threat Analysis",
    readingTime: "7 min watch",
    path: "/blog/ddos-attack",
    imgPath: aiImg
  }
];

export default interactivePosts;
