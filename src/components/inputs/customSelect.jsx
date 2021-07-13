/* eslint-disable jsx-a11y/no-onchange */
import { getProperty, updateProperty } from "../../lib/lib";

import React from "react";
import useDataContext from "../../lib/useDataContext";

export default ({
  options,
  propertyPath,
  label,
  disabled = false,
  ...props
}) => {
  const { state, setState } = useDataContext();
  return (
    <div className="flex items-center">
      {label && (
        <label htmlFor={propertyPath} style={{ minWidth: "12rem" }}>
          {label}
        </label>
      )}

      <select
        type="text"
        value={JSON.stringify(getProperty({ state }, propertyPath))}
        onChange={(e) =>
          updateProperty({ setState }, propertyPath, JSON.parse(e.target.value))
        }
        id={propertyPath}
        disabled={disabled}
        style={{ minWidth: "10rem", marginBottom: "0 !important" }}
        {...props}
        className="bg-lightGray"
      >
        {options.map((item) => (
          <option value={JSON.stringify(item.value)}>{item.label}</option>
        ))}
      </select>
    </div>
  );
};
