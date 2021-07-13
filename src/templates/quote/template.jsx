import { formatText, getColor } from "../../lib/lib";

import DraggableBG from "../../components/inputs/draggableBg";
import LogoText from "../../assets/svg/logo-text";
import React from "react";
import useDataContext from "../../lib/useDataContext";

export default () => {
  const { state } = useDataContext();

  const { templateScale, currentSlide } = state;
  const {
    dimensions,
    ref,
    data: { image, logo, body, background },
  } = state.slides[state.currentSlide];

  return (
    <div className="col-span-6 sticky" style={{ top: "1rem" }}>
      <div
        className={`flex flex-col // border-1 // absolute ${
          templateScale && dimensions.height === 1080 ? `template-scale` : ``
        } 
        ${
          templateScale && dimensions.height !== 1080
            ? `template-scale--insta`
            : ``
        }
        text-lg`}
        ref={ref}
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          top: "2rem",
        }}
      >
        {background.isImage ? (
          <>
            <DraggableBG
              propertyPath={`slides[${currentSlide}].data.image.position`}
            />
            <div
              className="absolute // top-0 left-0 right-0 // z-10 // w-full h-full"
              style={{
                backgroundImage: `url(${
                  image.url !== null
                    ? image.url
                    : "/assets/images/defaultImages/quote.png"
                })`,
                height: "100%",
                backgroundPositionX: `${image.position.x}px`,
                backgroundPositionY: `${image.position.y}px`,
                backgroundSize: `${image.scale * 10 + 100}%`,
              }}
            />
          </>
        ) : (
          <div
            style={{
              backgroundColor: getColor(body.options.colorTheme, 1),
            }}
            className="w-full h-full"
          />
        )}

        <div className="w-full h-full absolute top-0 left-0 flex flex-col z-20 p-3">
          {background.isImage && dimensions.height === 1080 && (
            <div className={`${logo.options.position} mb-3`}>
              <LogoText hasShadow />
            </div>
          )}

          <div className="flex-1 flex">
            <div className={`flex flex-col w-full ${body.bodyPosition}`}>
              {body.lines.map((line) => (
                <span
                  className={`inline-flex py-1 px-3 -my-1 font-sans font-bold ${line.position}`}
                  style={{
                    fontSize: `${line.scale.value}px`,
                    backgroundColor: getColor(body.options.colorTheme, 0),
                    color: getColor(body.options.colorTheme, 1),
                  }}
                  dangerouslySetInnerHTML={{ __html: formatText(line.content) }}
                />
              ))}
            </div>
          </div>

          {dimensions.height !== 1080 && (
            <div
              className={`${logo.options.position}`}
              style={{
                marginTop: dimensions.height !== 1080 ? `350px` : `50px`,
              }}
            >
              <LogoText hasShadow />
            </div>
          )}

          {dimensions.height === 1080 && !background.isImage && (
            <div
              className={`${logo.options.position}`}
              style={{
                marginTop: dimensions.height !== 1080 ? `350px` : `50px`,
              }}
            >
              <LogoText hasShadow />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
