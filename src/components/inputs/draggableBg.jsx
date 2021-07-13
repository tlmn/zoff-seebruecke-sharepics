import React, { useRef } from "react";

import Draggable from "react-draggable";
import { updateProperty } from "../../lib/lib";
import useDataContext from "../../lib/useDataContext";

const DraggableBG = ({ propertyPath, className }) => {
  const { setState } = useDataContext();
  const refDraggable = useRef(null);
  return (
    <>
      <Draggable
        onStart={(e, data) => {
          updateProperty({ setState }, propertyPath, {
            x: data.x,
            y: data.y,
          });
        }}
        onDrag={(e, data) => {
          updateProperty({ setState }, propertyPath, {
            x: data.x,
            y: data.y,
          });
        }}
        onStop={() => {
          refDraggable.current.style.transform = "translate(0px, 0px)";
        }}
      >
        <div
          className={`relative top-0 left-0 right-0 w-full h-full z-50 cursor-move ${className}`}
          ref={refDraggable}
        />
      </Draggable>
    </>
  );
};

export default DraggableBG;
