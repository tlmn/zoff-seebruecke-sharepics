import React, { useContext } from "react";

import DraggableBg from "../../../components/inputs/draggableBg";
import TemplateContext from "../../../components/templateContext";
import { getColor } from "../../../lib/lib";

export default ({ thumbnail = false }) => {
  const [state] = useContext(TemplateContext);
  return (
    <div className={`${!thumbnail ? `col-span-6` : ``} relative`}>
      <div
        className={`template ${
          state.templateScale && !thumbnail ? `template-scale` : `relative`
        }`}
        style={{ backgroundColor: getColor(state, 0) }}
        ref={!thumbnail ? state.slides[1].ref : null}
      >
        <DraggableBg propertyPath="slides[1].data.image.position" />

        <div
          className="absolute // top-0 left-0 right-0 // z-10 // w-full h-full"
          style={{
            backgroundImage: `url(${
              state.slides[1].data.image.url !== null
                ? state.slides[1].data.image.url
                : "/assets/images/defaultImages/selbstrepraesentation-1.jpg"
            })`,
            height: "100%",
            filter: "grayscale(100%)",
            backgroundPositionX: `${state.slides[1].data.image.position.x}px`,
            backgroundPositionY: `${state.slides[1].data.image.position.y}px`,
            backgroundSize: `${state.slides[1].data.image.scale * 10 + 100}%`,
          }}
        />
      </div>
    </div>
  );
};
