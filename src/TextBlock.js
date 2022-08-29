import React from "react";

export function TextBlock({
  company = "",
  job = null,
  description = "",
  period = null,
  references = null,
  stack = null,
  ...props
}) {
  return (
    <div className="textBlockContainer">
      <h3>{company}</h3>
      {job && (
        <h4>
          {job}
          <span>{period}</span>
        </h4>
      )}
      {description && <p>{description}</p>}
      {stack && <p className="stack">{stack}</p>}
      {references && <p>{references}</p>}
    </div>
  );
}
