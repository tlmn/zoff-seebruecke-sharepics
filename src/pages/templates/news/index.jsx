import React, { useRef, useState } from "react";

import Controls from "../../../templates/news/controls";
import { Provider as DataContextProvider } from "../../../lib/useDataContext";
import Template from "../../../templates/news/template";
import TemplateLayout from "../../../components/templateLayout";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        dimensions: { width: 1080, height: 1080 },
        data: {
          images: {
            upper: {
              url: null,
              position: { x: 0, y: 0 },
              scale: 0,
            },
            lower: { url: null, position: { x: 0, y: 0 }, scale: 0 },
            onlyOneImage: false,
          },
          body: {
            options: {
              colorTheme: "orange_white",
              position: "items-center",
              positions: [
                { value: "items-start", label: "oben" },
                { value: "items-center", label: "mittig" },
                { value: "items-end", label: "unten" },
              ],
              min: 1,
              max: 3,
              lineTemplate: {
                inputType: "input",
                content: "Neue Textzeile",
                scale: { value: 50, range: [60, 140] },
              },
            },
            lines: [
              {
                inputType: "input",
                content: "Open Arms",
                scale: { value: 100, range: [60, 200] },
              },
              {
                inputType: "input",
                content: "rettet 120 Menschen",
                scale: { value: 70, range: [60, 140] },
              },
            ],
          },
          subline: {
            inputType: "input",
            content: "zuvor 43 ertrunken",
            colorTheme: "white_black",
            scale: { value: 50, range: [40, 90] },
          },
          logo: {
            options: {
              position: "top-right",
              positions: [
                { value: "top-right", label: "oben rechts" },
                { value: "bottom-center", label: "unten mitte" },
              ],
            },
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
        <div className="col-span-6 mb-4">
          <Controls />
        </div>
      </TemplateLayout>
    </DataContextProvider>
  );
};
