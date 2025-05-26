import Draggable from 'react-draggable';
import React from "react";

export default function HistoryCard({id, heading, content, x, y, onDragHandler}){

  const nodeRef = React.useRef(null);

  return (
    <Draggable nodeRef={nodeRef} onDrag = {(e, data) => onDragHandler(id, data.x, data.y)}
      defaultPosition = {{x : x, y : y}}>
      <div ref={nodeRef} className="history--card">
        <div className="heading">{heading}</div>
        {content}
      </div>
    </Draggable>
  )
}