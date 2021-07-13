import { getProperty, updateProperty } from "../../lib/lib";

import React from "react";
import { colorThemes } from "../../config/vars";
import useDataContext from "../../lib/useDataContext";

const ColorThemeSelector = ({ colorThemeOptions, propertyPath }) => {
  const { state, setState } = useDataContext();

  return (
    <div className="flex justify-center mb-2">
      {colorThemeOptions.map(
        (colorThemeOption) =>
          colorThemeOption !== "" && (
            <div>
              <input
                type="radio"
                value={
                  colorThemes.filter(
                    (theme) => theme.label === colorThemeOption
                  )[0]?.label
                }
                name="colorTheme"
                id={`${propertyPath}-${
                  colorThemes.filter(
                    (theme) => theme.label === colorThemeOption
                  )[0]?.name
                }`}
                onChange={(e) =>
                  updateProperty({ setState }, propertyPath, e.target.value)
                }
              />
              <label
                htmlFor={`${propertyPath}-${
                  colorThemes.filter(
                    (theme) => theme.label === colorThemeOption
                  )[0]?.name
                }`}
                className="label__radio"
              >
                <div className="px-2">
                  <img
                    style={{ maxHeight: "4rem" }}
                    alt={`Farbschema Vorschau für ${
                      colorThemes.filter(
                        (theme) => theme.label === colorThemeOption
                      )[0]?.name
                    }`}
                    src={`/assets/images/colorThemes/${
                      colorThemes.filter(
                        (theme) => theme.label === colorThemeOption
                      )[0]?.label
                    }.png`}
                    className={`colorThumbnail ${
                      getProperty({ state }, propertyPath) ===
                        colorThemes.filter(
                          (theme) => theme.label === colorThemeOption
                        )[0]?.label && `border-turquoise`
                    }`}
                  />
                </div>
              </label>
            </div>
          )
      )}
    </div>
  );
};

export default ColorThemeSelector;
