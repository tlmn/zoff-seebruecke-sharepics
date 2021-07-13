import { getProperty, updateProperty } from "../../lib/lib";

import React from "react";
import useDataContext from "../../lib/useDataContext";

export default ({ propertyPath, label, ...props }) => {
  const { state, setState } = useDataContext();
  return (
    <>
      <label htmlFor={propertyPath}>{label}</label>
      <input
        type="text"
        value={getProperty({ state }, propertyPath)}
        onChange={(e) =>
          updateProperty({ setState }, propertyPath, e.target.value)
        }
        id={propertyPath}
        className="font-normal"
        style={{ boxShadow: "inset 2px 2px 6px -1px rgba(0,0,0,0.4)" }}
        {...props}
      />
    </>
  );
};
