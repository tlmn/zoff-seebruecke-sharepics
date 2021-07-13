import React from "react";

const FieldSet = ({ legend = "", children }) => (
  <fieldset className="border-white border-2 p-1 my-2">
    {legend && (
      <legend className="text-white px-1 font-sans font-bold uppercase">
        {legend}
      </legend>
    )}
    {children}
  </fieldset>
);
export default FieldSet;
