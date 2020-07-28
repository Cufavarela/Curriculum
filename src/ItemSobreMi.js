import React from 'react';

export function ItemSobreMi({
    company="",
    job=null,
    description="",
    period=null,
    references=null,
    ...props
}) {
  return (
    <div className="sobreMi">
      <h3>{company}</h3>
      {
        job
        ? <h4>{job}<span>{period}</span></h4>
        : null
      }
      {
        description
        ? <p>{description}</p>
        : null
      }
      {
        references
        ? <p>{references}</p>
        : null
      }
    </div>
  );
}
