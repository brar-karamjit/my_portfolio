import httpsImg from "../../Assets/Projects/keyex.png";
import icmpImg from "../../Assets/Projects/inventory.png";

export const interactivePosts = [
  {
    id: "https-key-exchange",
    title: "HTTPS Key Exchange",
    summary:
      "See the TLS handshake unfold step-by-step to demystify how secure sessions begin.",
    tags: ["Security", "Networking"],
    topic: "Zero Trust Foundations",
    readingTime: "6 min watch",
    path: "/animations/https-key-exchange",
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
    path: "/animations/icmp-ping",
    imgPath: icmpImg
  }
];

export default interactivePosts;
