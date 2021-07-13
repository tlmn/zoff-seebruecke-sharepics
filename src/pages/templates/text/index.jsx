import React, { useRef, useState } from "react";

import Controls from "../../../templates/text/controls";
import { Provider as DataContextProvider } from "../../../lib/useDataContext";
import Template from "../../../templates/text/template";
import TemplateLayout from "../../../components/templateLayout";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        dimensions: { width: 1080, height: 1080 },
        data: {
          logo: {
            show: true,
            branch: "",
          },
          body: {
            options: {
              colorTheme: "orange_white",
              textAlign: "textCenter",
              min: 1,
              max: 3,
              lineTemplate: {
                content: "Neue Textzeile",
                scale: { value: 70, range: [50, 140] },
                isBold: false,
                inputType: "input",
              },
            },
            lines: [
              {
                content: "Humanitäre Katastrophe in Bosnien!",
                scale: {
                  value: 110,
                  range: [80, 300],
                },
                isBold: true,
                inputType: "input",
              },
              {
                content: "#wirhabenplatz",
                scale: {
                  value: 70,
                  range: [50, 100],
                },
                isBold: false,
                inputType: "input",
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
