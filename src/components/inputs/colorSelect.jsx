import React from "react";
import useDataContext from "../../lib/useDataContext";


export default ({colorOptions=["orange", "black"]}) => {
  const {state, setState} = useDataContext()

  return (
    <>
        {colorOptions.map((primaryColor) => (
          <div className="col-span-1">
            <input
              type="radio"
              value={primaryColor.label}
              name="primaryColor"
              id={primaryColor.name}
              onChange={(e) =>
                setState({ ...state, primaryColor: e.target.value })
              }
            />
            <label htmlFor={primaryColor.name} className="label__radio">
              <div className="px-2">
                <img
                  alt={`Farbschema Vorschau für ${primaryColor.name}`}
                  src={`/assets/images/colorThemes/${primaryColor.label}.png`}
                  className={`colorThumbnail ${
                    state.primaryColor === primaryColor.label &&
                    `border-lightGray`
                  }`}
                />
              </div>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};
