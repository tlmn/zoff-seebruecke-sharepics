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
          <div
            className="w-full h-full absolute top-0 left-0 flex flex-col z-20 p-3"
            style={{
              backgroundColor: getColor(
                state.slides[0].data.body.options.colorTheme,
                0
              ),
            }}
          >
            <div className="flex-1 flex">
              <div className={`flex w-full items-center`}>
                <div className="flex flex-col w-full items-center">
                  {state.slides[state.currentSlide].data.body.lines.map(
                    (line) =>
                      line.content !== "" && (
                        <span
                          className={`font-sans ${
                            line.isBold ? `font-bold` : ``
                          }`}
                          style={{
                            fontSize: `${line.scale.value}px`,
                            backgroundColor: getColor(
                              state.slides[0].data.body.options.colorTheme,
                              0
                            ),
                            color: getColor(
                              state.slides[0].data.body.options.colorTheme,
                              1
                            ),
                          }}
                        >
                          {line.content}
                        </span>
                      )
                  )}
                </div>
              </div>
            </div>
            <div className="mt-3 flex justify-center ">
              <LogoText
                fillColor={getColor(
                  state.slides[0].data.body.options.colorTheme,
                  1
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
