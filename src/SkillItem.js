import React from "react";

export function SkillItem({ title = "", progress = 0, ...props }) {
  return (
    <div className="skill">
      <p>{title}</p>
      <div className="bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
