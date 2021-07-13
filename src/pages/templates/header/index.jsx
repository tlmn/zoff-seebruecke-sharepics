import React, { useRef, useState } from "react";

import Controls from "../../../templates/header/controls";
import { Provider as DataContextProvider } from "../../../lib/useDataContext";
import Template from "../../../templates/header/template";
import TemplateLayout from "../../../components/templateLayout";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        dimensions: { width: 1500, height: 500 },
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
                inputType: "input",
                content: "Neue Textzeile",
                scale: { value: 70, range: [50, 140] },
                isBold: false,
              },
            },
            lines: [
              {
                inputType: "input",
                content: "Humanitäre Katastrophe in Bosnien!",
                scale: {
                  value: 70,
                  range: [50, 100],
                },
                isBold: true,
              },
              {
                inputType: "input",
                content: "#wirhabenplatz",
                scale: {
                  value: 50,
                  range: [50, 70],
                },
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
