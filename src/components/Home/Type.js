import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Platform Engineer",
          "DevOps Engineer",
          "Cloud & Hybrid Infrastructure Specialist",
          "Site Reliability Engineer",
          "Astronomy nerd",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
