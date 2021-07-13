import { getProperty, updateProperty } from "../../lib/lib";

import FontBoldIcon from "../../assets/svg/fontBold";
import InputIcon from "../../assets/svg/input";
import React from "react";
import TextAreaIcon from "../../assets/svg/textArea";
import TextCenterIcon from "../../assets/svg/textCenter";
import TextLeftIcon from "../../assets/svg/textLeft";
import { theme } from "../../../tailwind.config";
import useDataContext from "../../lib/useDataContext";

const OptionsSelector = ({ propertyPath, options = [], disabled = false }) => {
  const { colors } = theme;
  const { state, setState } = useDataContext();
  const icons = {
    fontBold: (fillColor) => <FontBoldIcon fillColor={fillColor} />,
    textLeft: (fillColor) => <TextLeftIcon fillColor={fillColor} />,
    textCenter: (fillColor) => <TextCenterIcon fillColor={fillColor} />,
    textArea: (fillColor) => <TextAreaIcon fillColor={fillColor} />,
    input: (fillColor) => <InputIcon fillColor={fillColor} />,
  };
  return (
    <div
      onChange={(event) =>
        updateProperty({ setState }, propertyPath, event.target.value)
      }
      className="flex gap-1"
    >
      {options.map((option) => (
        <>
          <input type="radio" name={propertyPath} value={option} />
          <label
            htmlFor={propertyPath}
            onClick={() => updateProperty({ setState }, propertyPath, option)}
            className="cursor-pointer"
          >
            {icons[option](
              getProperty({ state }, propertyPath) === option
                ? colors.orange
                : colors.white
            )}
          </label>
        </>
      ))}
    </div>
  );
};

export default OptionsSelector;
