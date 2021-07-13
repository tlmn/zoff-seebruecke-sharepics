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
            <div className="flex-1 flex px-3 text-white">
              <div className={`flex w-full items-center`}>
                <div
                  className={`flex flex-col w-full items-${
                    body.options.textAlign === "textCenter" ? `center` : `start`
                  }`}
                >
                  {body.lines.map(
                    (line) =>
                      line.content !== "" && (
                        <span
                          className={`font-sans ${
                            line.isBold ? `font-bold` : ``
                          } ${
                            body.options.textAlign === "textCenter"
                              ? `text-center`
                              : `text-left`
                          } leading-tight`}
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
            {logo.show && (
              <div className="flex flex-col justify-center items-center p-3 mb-2">
                <LogoText fillColor="#fff" hasShadow />
                {logo.branch !== "" && (
                  <span
                    style={{
                      backgroundColor: getColor(body.options.colorTheme, 1),
                      color: getColor(body.options.colorTheme, 0),
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
                    }}
                    className="px-2 text-md tracking-wider"
                  >
                    {logo.branch}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
