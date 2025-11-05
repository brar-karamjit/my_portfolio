import React from "react";
import TimelineItem from "./TimelineItem";
import "./Timeline.css";

import yorkMilestoneImg from "../../Assets/yu_logo.png";
import cgiMilestoneImg from "../../Assets/cgi_logo.png";
import questradeMilestoneImg from "../../Assets/Questrade_logo.png";

const Timeline = () => {
  const events = [
    {
      year: "2019",
      title: "York University",
      description: "Enrolled in the Computer Science program and built a foundation in software engineering and systems design.",
      icon: "🎓",
      iconSrc: yorkMilestoneImg,
      iconAlt: "York University milestone",
    },
    {
      year: "2022",
      title: "CGI Inc.",
      description: "DevOps Engineer Intern focused on CI/CD automation, configuration management, and infrastructure provisioning using modern DevOps tooling.",
      icon: "💼",
      iconSrc: cgiMilestoneImg,
      iconAlt: "CGI internship milestone",
    },
    {
      year: "2023",
      title: "Questrade",
      description: "Infrastructure Engineer Intern building resilient cloud platforms, implementing observability solutions, and optimizing hybrid infrastructure deployments.",
      icon: "🚀",
      iconSrc: questradeMilestoneImg,
      iconAlt: "Questrade internship milestone",
    },
    {
      year: "2023",
      title: "Questrade",
      description: "Systems Engineer driving platform engineering initiatives, cloud governance, and hybrid infrastructure automation to support enterprise-scale operations.",
      icon: "☁️",
      iconSrc: questradeMilestoneImg,
      iconAlt: "Questrade systems engineer milestone",
    },
  ];

  return (
    <div className="timeline-track">
      {events.map((item, index) => (
        <TimelineItem key={`${item.year}-${index}`} {...item} />
      ))}
    </div>
  );
};

export default Timeline;
