import { formatText, getColor } from "../../lib/lib";

import DraggableBG from "../../components/inputs/draggableBg";
import LogoText from "../../assets/svg/logo-text";
import React from "react";
import useDataContext from "../../lib/useDataContext";

export default () => {
  const { state } = useDataContext();

  const { templateScale, currentSlide } = state;
  const {
    data: { subline, images, body, logo },
    dimensions,
    ref,
  } = state.slides[state.currentSlide];

  return (
    <div className="col-span-6 sticky" style={{ top: "1rem" }}>
      <div
        className={`flex flex-col absolute // border-1 // ${
          templateScale ? `template-scale` : `relative`
        } text-lg`}
        ref={ref}
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
        }}
      >
        <div className="flex flex-col w-full h-full bg-white absolute top-0 left-0">
          <div className="flex-1">
            <DraggableBG
              propertyPath={`slides[${currentSlide}].data.images.upper.position`}
            />
          </div>
          {!images.onlyOneImage && (
            <div className="flex-1">
              <DraggableBG
                propertyPath={`slides[${currentSlide}].data.images.lower.position`}
              />
            </div>
          )}
        </div>
        <div className="w-full h-full relative">
          <div
            className={`flex flex-col w-full h-full absolute top-0 left-0 z-20`}
          >
            <div
              className={`flex-1 flex ${
                logo.options.position === "top-right" &&
                `justify-end items-start mr-3 mt-3`
              } ${
                logo.options.position === "bottom-center" &&
                `justify-center items-end mb-3`
              }`}
            >
              <LogoText fillColor="#fff" hasShadow />
            </div>
          </div>
          <div className="flex flex-col w-full h-full absolute top-0 left-0">
            <div className="flex-1">
              <div
                className="relative // top-0 left-0 right-0 // z-10 // w-full h-full"
                style={{
                  backgroundImage: `url(${
                    images.upper.url !== null
                      ? images.upper.url
                      : "/assets/images/defaultImages/news-1.png"
                  })`,
                  height: "100%",
                  backgroundPositionX: `${images.upper.position.x}px`,
                  backgroundPositionY: `${images.upper.position.y}px`,
                  backgroundSize: `${images.upper.scale * 10 + 100}%`,
                }}
              />
            </div>
            {!images.onlyOneImage && (
              <div className="flex-1">
                <div
                  className="relative // top-0 left-0 right-0 // z-10 // w-full h-full"
                  style={{
                    backgroundImage: `url(${
                      images.lower.url !== null
                        ? images.lower.url
                        : "/assets/images/defaultImages/news-2.png"
                    })`,
                    height: "100%",
                    backgroundPositionX: `${images.lower.position.x}px`,
                    backgroundPositionY: `${images.lower.position.y}px`,
                    backgroundSize: `${images.lower.scale * 10 + 100}%`,
                  }}
                />
              </div>
            )}
          </div>
          <div
            className={`relative z-10  w-full h-full flex justify-center ${body.options.position}`}
          >
            <div className="w-full">
              <div
                className={`w-full ${
                  body.options.position !== "items-start" &&
                  body.options.position !== "items-end"
                    ? `py-2`
                    : `py-3`
                }`}
                style={{
                  backgroundColor: getColor(body.options.colorTheme, 0),
                  color: getColor(body.options.colorTheme, 1),
                }}
              >
                {body.lines.map((line) => (
                  <span
                    className="block text-center font-sans font-bold px-2 leading-tight"
                    style={{
                      fontSize: `${line.scale.value}px`,
                    }}
                    dangerouslySetInnerHTML={{
                      __html: formatText(line.content),
                    }}
                  />
                ))}
              </div>
              {subline.content !== "" &&
                body.options.position !== "items-start" &&
                body.options.position !== "items-end" && (
                  <div
                    className="py-2"
                    style={{
                      backgroundColor: getColor(subline.colorTheme, 0),
                      color: getColor(subline.colorTheme, 1),
                    }}
                  >
                    <span
                      className="block text-center font-sans font-bold leading-tight"
                      style={{
                        fontSize: `${subline.scale.value}px`,
                      }}
                      dangerouslySetInnerHTML={{
                        __html: formatText(subline.content),
                      }}
                    />
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
