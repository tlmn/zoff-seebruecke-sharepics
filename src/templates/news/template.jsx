import React, { useContext } from "react";
import { formatEmojis, getColor } from "../../lib/lib";

import DraggableBG from "../../components/inputs/draggableBg";
import LogoText from "../../assets/svg/logo-text";
import TemplateContext from "../../components/templateContext";

export default () => {
  const [state] = useContext(TemplateContext);
  return (
    <>
      <div className="col-span-6 relative">
        <div
          className={`flex flex-col absolute // border-1 // template ${
            state.templateScale ? `template-scale` : `relative`
          } text-lg`}
          ref={state.slides[state.currentSlide].ref}
        >
          <div className="flex flex-col w-full h-full bg-white absolute top-0 left-0">
            <div className="flex-1">
              <DraggableBG
                propertyPath={`slides[${state.currentSlide}].data.images.upper.position`}
              />
            </div>
            {!state.slides[state.currentSlide].data.images.isOnlyOne && (
              <div className="flex-1">
                <DraggableBG
                  propertyPath={`slides[${state.currentSlide}].data.images.lower.position`}
                />
              </div>
            )}
          </div>
          <div className="w-full h-full relative">
            <div className="flex flex-col w-full h-full bg-white absolute top-0 left-0">
              <div className="flex-1">
                <div
                  className="relative // top-0 left-0 right-0 // z-10 // w-full h-full"
                  style={{
                    backgroundImage: `url(${
                      state.slides[0].data.images.upper.url !== null
                        ? state.slides[0].data.images.upper.url
                        : "/assets/images/defaultImages/diskursintervention-mit-bild-1.jpg"
                    })`,
                    height: "100%",
                    backgroundPositionX: `${state.slides[0].data.images.upper.position.x}px`,
                    backgroundPositionY: `${state.slides[0].data.images.upper.position.y}px`,
                    backgroundSize: `${
                      state.slides[0].data.images.upper.scale * 10 + 100
                    }%`,
                  }}
                />
              </div>
              {!state.slides[state.currentSlide].data.images.isOnlyOne && (
                <div className="flex-1">
                  <div
                    className="relative // top-0 left-0 right-0 // z-10 // w-full h-full"
                    style={{
                      backgroundImage: `url(${
                        state.slides[0].data.images.lower.url !== null
                          ? state.slides[0].data.images.lower.url
                          : "/assets/images/defaultImages/diskursintervention-mit-bild-1.jpg"
                      })`,
                      height: "100%",
                      backgroundPositionX: `${state.slides[0].data.images.lower.position.x}px`,
                      backgroundPositionY: `${state.slides[0].data.images.lower.position.y}px`,
                      backgroundSize: `${
                        state.slides[0].data.images.lower.scale * 10 + 100
                      }%`,
                    }}
                  />
                </div>
              )}
            </div>
            <div className="relative z-10  w-full h-full flex items-center justify-center">
              <div className="w-full bg-red py-3">
                {state.slides[0].data.body.lines.map((line) => (
                  <span
                    className="block text-center font-sans font-bold"
                    style={{
                      fontSize: `${line.scale.value}px`,
                    }}
                  >
                    {line.content}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
