import { getProperty, pushProperty, removeProperty } from "../../lib/lib";

import CheckBoxImage from "./checkBoxImage";
import CustomSelect from "./customSelect";
import Input from "../inputs/input";
import OptionsSelector from "./options";
import React from "react";
import TextArea from "./textarea";
import TextScale from "./textScale";
import useDataContext from "../../lib/useDataContext";

const InputRepeater = ({
  propertyPath,
  label = "",
  selectPosition = false,
  selectBold = false,
  selectInputType = false,
  positionOptions,
}) => {
  const { state, setState } = useDataContext();
  const lines = getProperty({ state }, `${propertyPath}.lines`);
  const lineTemplate = getProperty(
    { state },
    `${propertyPath}.options.lineTemplate`
  );
  return (
    <>
      {label !== "" && <label htmlFor={propertyPath}>{label}</label>}
      <div id={propertyPath}>
        {lines.map((line, index) => (
          <div className="flex">
            {getProperty(
              { state },
              `${propertyPath}.lines[${index}].inputType`
            ) === "input" && (
              <Input
                propertyPath={`${propertyPath}.lines[${index}].content`}
                className="mr-2"
              />
            )}
            {getProperty(
              { state },
              `${propertyPath}.lines[${index}].inputType`
            ) === "textArea" && (
              <TextArea
                propertyPath={`${propertyPath}.lines[${index}].content`}
                className="mr-2"
              />
            )}

            <TextScale
              propertyPath={`${propertyPath}.lines[${index}].scale`}
              label=""
              className="mr-2"
            />
            {selectPosition && (
              <CustomSelect
                options={positionOptions}
                propertyPath={`${propertyPath}.lines[${index}].position`}
              />
            )}
            <div className="flex items-center gap-1">
              {selectBold && (
                <CheckBoxImage
                  propertyPath={`${propertyPath}.lines[${index}].isBold`}
                />
              )}
              {selectInputType && (
                <OptionsSelector
                  options={["textArea", "input"]}
                  propertyPath={`${propertyPath}.lines[${index}].inputType`}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 my-2">
        <button
          onClick={() => {
            getProperty({ state }, `${propertyPath}.options.max`) >
              lines.length &&
              pushProperty({ setState }, `${propertyPath}.lines`, lineTemplate);
          }}
          disabled={
            getProperty({ state }, `${propertyPath}.options.max`) < lines.length
          }
          className="btn not-italic font-bold"
        >
          +
        </button>
        <button
          onClick={() => {
            getProperty({ state }, `${propertyPath}.options.min`) <
              lines.length &&
              removeProperty({ setState }, `${propertyPath}.lines`);
          }}
          disabled={
            getProperty({ state }, `${propertyPath}.options.min`) > lines.length
          }
          className="btn not-italic font-bold"
        >
          -
        </button>
      </div>
    </>
  );
};

export default InputRepeater;
