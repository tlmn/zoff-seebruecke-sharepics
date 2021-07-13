import { formatText, getColor } from "../../lib/lib";

import LogoText from "../../assets/svg/logo-text";
import React from "react";
import useDataContext from "../../lib/useDataContext";

export default () => {
  const { state } = useDataContext();

  const { templateScale } = state;
  const {
    dimensions,
    ref,
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
          className="w-full h-full absolute top-0 left-0 flex flex-col z-20 p-3"
          style={{
            backgroundColor: getColor(body.options.colorTheme, 0),
          }}
        >
          <div className="flex-1 flex">
            <div className={`flex w-full items-center`}>
              <div className="flex flex-col w-full items-center p-3">
                {body.lines.map(
                  (line) =>
                    line.content !== "" && (
                      <span
                        className={`font-sans ${
                          line.isBold ? `font-bold` : ``
                        } leading-tight text-center`}
                        style={{
                          fontSize: `${line.scale.value}px`,
                          backgroundColor: getColor(body.options.colorTheme, 0),
                          color: getColor(body.options.colorTheme, 1),
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
          <div className="mt-3 flex justify-center">
            <LogoText fillColor={getColor(body.options.colorTheme, 1)} />
          </div>
        </div>
      </div>
    </div>
  );
};
