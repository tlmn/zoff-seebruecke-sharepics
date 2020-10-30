import React, { useRef, useState } from "react";

import Controls from "../../../templates/politische-bildung/controls";
import { Link } from "gatsby";
import Template from "../../../templates/politische-bildung/template";
import Template0 from "../../../templates/politische-bildung/slide-0/template";
import Template1 from "../../../templates/politische-bildung/slide-1/template";
import Template2 from "../../../templates/politische-bildung/slide-2/template";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          category: { content: "Mal im Ernst" },
          body: {
            content: "Was ist {kritische}\n {Männlichkeit?}",
            scale: 100,
            scaleRange: [60, 150],
          },
        },
        ref: useRef(null),
      },
      {
        data: {
          body: {
            content:
              "Diese Männlichkeitsbilder und -anforderungen sind nicht leicht zu beschreiben, da sie sich je nach kultureller Zugehörig-keit, sozialem Umfeld, Zeit und Ort ver-ändern. Diese Anforderungen, also all die Aussagen zusammengenommen „wie Männer nun mal so sind“ bzw. „sein müssen“, haben tatsächliche Auswir-kungen auf das Verhalten von Männern. Männlichkeitsbilder sind im Umbruch und umfassen ein Durcheinander wie z.B. den minnesingenden Ritter oder den erfolgreichen (IT-)Unternehmer.",
            scale: 100,
            scaleRange: [60, 150],
          },
        },
        ref: useRef(null),
      },
      {
        data: {
          body: {
            content:
              "Die Ereignisse rund um den 04. November gehen als Kieler Matrosenaufstand in die Geschichte ein und bilden den Auftakt zur November Revolution.",
            scale: 100,
            scaleRange: [60, 150],
          },
        },
        ref: useRef(null),
      },
    ],
    colorTheme: "turquoise_darkGray",
    templateScale: true,
  });

  return (
    <div className="container grid-12">
      <div className="col-span-12 py-1 flex justify-center">
        <Link to="/" className="hover:underline">
          zurück zur Übersicht
        </Link>
      </div>
      <div className="col-span-12 flex justify-center py-2">
        {state.slides.map((slide, i) => {
          switch (i) {
            case 0:
              return (
                <button
                  onClick={() => setState({ ...state, currentSlide: i })}
                  className="is-thumbnail hover:opacity-75"
                >
                  <Template0
                    state={state}
                    setState={setState}
                    thumbnail={true}
                  />
                </button>
              );
            case 1:
              return (
                <button
                  onClick={() => setState({ ...state, currentSlide: i })}
                  className="is-thumbnail hover:opacity-75"
                >
                  <Template1
                    state={state}
                    setState={setState}
                    thumbnail={true}
                  />
                </button>
              );
            case 2:
              return (
                <button
                  onClick={() => setState({ ...state, currentSlide: i })}
                  className="is-thumbnail hover:opacity-75"
                >
                  <Template2
                    state={state}
                    setState={setState}
                    thumbnail={true}
                  />
                </button>
              );
            default:
              return null;
          }
        })}
      </div>

      <div className="col-span-6">
        <Template state={state} setState={setState} />
      </div>
      <div className="col-span-6">
        <Controls state={state} setState={setState} />
      </div>
    </div>
  );
};
