import React from 'react';

export function ItemHabilidad({
    title="",
    progress=0,
    ...props
}) {

  return (
    <div className="habilidad">
      <p>{title}</p>
      <div className="barrita">
          <div className="progreso" style={{width: `${progress}%`}}>
          </div>
      </div>
    </div>
  );
}