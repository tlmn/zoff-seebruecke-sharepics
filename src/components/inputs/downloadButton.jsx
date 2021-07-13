import { getProperty, html2image } from "../../lib/lib";

import React from "react";
import useDataContext from "../../lib/useDataContext";

export default ({ fileNamePath, buttonText = "Download" }) => {
  const { state, setState } = useDataContext();
  return (
    <button
      className="btn btn-download"
      onClick={() =>
        html2image(
          {
            state,
            setState,
          },
          getProperty({ state }, fileNamePath)
        )
      }
    >
      {buttonText}
    </button>
  );
};
