import { getProperty, updateProperty } from "../../lib/lib";

import React from "react";
import useDataContext from "../../lib/useDataContext";

export default ({ propertyPath, label, ...props }) => {
  const { state, setState } = useDataContext();
  return (
    <>
      <label htmlFor={propertyPath}>{label}</label>
      <textarea
        onChange={(e) =>
          updateProperty({ setState }, propertyPath, e.target.value)
        }
        id={propertyPath}
        {...props}
      >
        {getProperty({ state }, propertyPath)}
      </textarea>
    </>
  );
};
