import React from "react";
import { html2image } from "../../../lib/lib";

export default ({ state, setState }) => (
  <>
    <label>Text</label>
    <textarea
      onChange={(e) =>
        setState({
          ...state,
          ...state.slides.splice(1, 1, {
            ...state.slides[1],
            data: {
              ...state.slides[1].data,
              body: {
                ...state.slides[1].data.body,
                content: e.target.value,
              },
            },
          }),
        })
      }
      value={state.slides[1].data.body.content}
      className="border-1"
      rows={10}
      cols={60}
    />
    <button
      className="btn btn-download"
      onClick={() =>
        html2image(
          {
            state,
            setState,
          },
          `politische-bildung-1-${state.slides[1].data.body.content}`
        )
      }
    >
      Download
    </button>
  </>
);