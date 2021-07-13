import React, { useRef, useState } from "react";

import Controls from "../../../templates/action/controls";
import { Provider as DataContextProvider } from "../../../lib/useDataContext";
import Template from "../../../templates/action/template";
import TemplateLayout from "../../../components/templateLayout";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        dimensions: { width: 1080, height: 1080 },
        data: {
          body: {
            options: {
              colorTheme: "turquoise_black",
              min: 1,
              max: 6,
              lineTemplate: {
                content: "Neue Textzeile",
                scale: { value: 70, range: [50, 140] },
                inputType: "input",
                isBold: false,
              },
            },
            lines: [
              {
                content: "Stadt",
                scale: {
                  value: 150,
                  range: [120, 220],
                },
                inputType: "input",
                isBold: true,
              },
              {
                content: "30. Januar 2021",
                scale: {
                  value: 90,
                  range: [70, 100],
                },
                inputType: "input",
                isBold: true,
              },
              {
                content: "Demo",
                scale: {
                  value: 90,
                  range: [50, 140],
                },
                inputType: "input",
                isBold: true,
              },
              {
                content: "#wirhabenplatz",
                scale: {
                  value: 50,
                  range: [40, 65],
                },
                inputType: "input",
                isBold: false,
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
    <DataContextProvider value={{ state, setState }}>
      <TemplateLayout>
        <div className="col-span-6">
          <Template />
        </div>
        <div className="col-span-6">
          <Controls />
        </div>
      </TemplateLayout>
    </DataContextProvider>
  );
};
