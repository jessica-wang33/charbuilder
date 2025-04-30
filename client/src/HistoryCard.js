import Draggable from 'react-draggable';
import React from "react";

export default function HistoryCard({heading, content}){

  const nodeRef = React.useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef} className="history--card">
        <div className="heading">{heading}</div>
        {content}
      </div>
    </Draggable>
  )
}