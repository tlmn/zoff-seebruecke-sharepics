import React, { useRef, useState } from "react";

import Controls from "../../../templates/text/controls";
import Template from "../../../templates/text/template";
import TemplateContext from "../../../components/templateContext";
import TemplateLayout from "../../../components/templateLayout";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          logo: {
            show: true,
            branch: "",
          },
          body: {
            options: {
              colorTheme: "orange_white",
              min: 1,
              max: 3,
              lineTemplate: {
                content: "Neue Textzeile",
                scale: { value: 70, range: [50, 140] },
                isBold: false,
              },
            },
            lines: [
              {
                content: "Sicherer Hafen",
                scale: {
                  value: 110,
                  range: [50, 140],
                },
                isBold: true,
              },
              {
                content: "Leipzig",
                scale: {
                  value: 110,
                  range: [50, 140],
                },
                isBold: true,
              },
            ],
          },
        },
        ref: useRef(null),
      },
    ],
    templateScale: true,
  });

  return (
    <TemplateContext.Provider value={[state, setState]}>
      <TemplateLayout>
        <div className="col-span-6">
          <Template />
        </div>
        <div className="col-span-6">
          <Controls />
        </div>
      </TemplateLayout>
    </TemplateContext.Provider>
  );
};
