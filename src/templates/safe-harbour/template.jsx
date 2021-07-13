import { formatText, getColor } from "../../lib/lib";

import LogoText from "../../assets/svg/logo-text";
import React from "react";
import useDataContext from "../../lib/useDataContext";

export default () => {
  const { state } = useDataContext();

  const { templateScale } = state;

  const {
    ref,
    dimensions,
    data: { body },
  } = state.slides[state.currentSlide];
  return (
    <div className="col-span-6 sticky" style={{ top: "2rem" }}>
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
        <div
          className="w-full h-full absolute top-0 left-0 flex flex-col z-20"
          style={{
            backgroundColor: getColor(body.options.colorTheme, 0),
          }}
        >
          <div className="flex-1 flex pt-3 px-3 bg-lightOrange text-black">
            <div className={`flex w-full items-center`}>
              <div className="flex flex-col w-full items-center">
                {body.lines.map(
                  (line) =>
                    line.content !== "" && (
                      <span
                        className="font-sans font-bold text-center leading-tight"
                        style={{
                          fontSize: `${line.scale.value}px`,
                        }}
                        dangerouslySetInnerHTML={{
                          __html: formatText(line.content),
                        }}
                      />
                    )
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center bg-orange p-3">
            <LogoText fillColor="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
};
