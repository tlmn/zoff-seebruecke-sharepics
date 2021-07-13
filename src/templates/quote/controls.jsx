import React, { useEffect } from "react";

import BgImage from "../../components/inputs/bgImage";
import Checkbox from "../../components/inputs/checkbox";
import ColorThemeSelector from "../../components/inputs/colorThemesSelect";
import ControlsWrapper from "../../components/controlsWrapper";
import CustomSelect from "../../components/inputs/customSelect";
import DownloadButton from "../../components/inputs/downloadButton";
import FieldSet from "../../components/inputs/fieldSet";
import InputRepeater from "../../components/inputs/inputRepeater";
import { updateProperty } from "../../lib/lib";
import useDataContext from "../../lib/useDataContext";

export default () => {
  const currentSlide = 0;
  const { state, setState } = useDataContext();
  const {
    data: { background, body, logo },
  } = state.slides[currentSlide];

  useEffect(() => {
    if (body.options.colorTheme === "orange_white") {
      updateProperty(
        { setState },
        `slides[${currentSlide}].data.body.options.colorTheme`,
        "white_orange"
      );
    }
  }, [background.isImage]);

  return (
    <ControlsWrapper>
      <FieldSet legend="Format">
        <CustomSelect
          options={[
            { value: { width: 1080, height: 1920 }, label: "Instagram Story" },
            { value: { width: 1080, height: 1080 }, label: "1:1" },
          ]}
          propertyPath={`slides[${currentSlide}].dimensions`}
        />
      </FieldSet>
      <FieldSet legend="Hintergrund">
        <Checkbox
          propertyPath={`slides[${currentSlide}].data.background.isImage`}
          value={background.isImage}
          label="hat Hintergrundbild"
        />
        {background.isImage && (
          <BgImage propertyPath={`slides[${currentSlide}].data.image`} />
        )}
      </FieldSet>

      <FieldSet legend="Logo">
        <CustomSelect
          options={logo.options.positions}
          propertyPath={`slides[${currentSlide}].data.logo.options.position`}
          label="Position Logo"
        />
      </FieldSet>

      <FieldSet legend="Text">
        <ColorThemeSelector
          propertyPath={`slides[${currentSlide}].data.body.options.colorTheme`}
          colorThemeOptions={[
            background.isImage ? "orange_white" : "",
            "white_orange",
            "white_black",
          ]}
        />

        <CustomSelect
          options={body.options.bodyPositions}
          propertyPath={`slides[${currentSlide}].data.body.bodyPosition`}
          label="Position Textblock"
        />

        <InputRepeater
          propertyPath={`slides[${currentSlide}].data.body`}
          selectPosition
          positionOptions={body.options.linePositions}
        />
      </FieldSet>

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </ControlsWrapper>
  );
};
