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
    data: { body, logo },
  } = state.slides[state.currentSlide];
  return (
    <>
      <div className="col-span-6 relative">
        <div
          className={`flex flex-col absolute // border-1 // ${
            templateScale ? `template-scale--header` : `relative`
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
            {logo.show && (
              <div className="flex flex-col justify-center items-center bg-orange px-3 pt-3">
                <LogoText fillColor="#fff" />
                {logo.branch !== "" && (
                  <span
                    style={{
                      backgroundColor: getColor(body.options.colorTheme, 1),
                      color: getColor(body.options.colorTheme, 0),
                    }}
                    className="px-2 text-md"
                  >
                    {logo.branch}
                  </span>
                )}
              </div>
            )}
            <div className="flex-1 flex px-3 text-white">
              <div className={`flex w-full items-center`}>
                <div className="flex flex-col w-full items-center">
                  {body.lines.map(
                    (line) =>
                      line.content !== "" && (
                        <span
                          className={`font-sans ${
                            line.isBold ? `font-bold` : ``
                          } text-center leading-tight`}
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
          </div>
        </div>
      </div>
    </>
  );
};
