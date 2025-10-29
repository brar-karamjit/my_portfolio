import React from "react";
import TimelineItem from "./TimelineItem";
import "./Timeline.css";

const Timeline = () => {
  const events = [
  {
    year: "2019",
    title: "York University",
    description: "Enrolled in the Computer Science",
    icon: "🎓",
  },
  {
    year: "2022",
    title: "CGI Inc.",
    description: "DevOps Engineer Intern",
    icon: "",
  },
  {
    year: "2023",
    title: "Questrade",
    description: "Infrastructure Engineer Intern",
    icon: "🚀",
  },
  {
    year: "2023",
    title: "Questrade",
    description: "Systems Engineer",
    icon: "☁️",
  },
  
];

  return (
    <div className="main-timeline">
      {events.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Timeline;
