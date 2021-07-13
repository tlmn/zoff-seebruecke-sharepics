import Checkbox from "../../components/inputs/checkbox";
import ColorThemeSelector from "../../components/inputs/colorThemesSelect";
import DownloadButton from "../../components/inputs/downloadButton";
import FieldSet from "../../components/inputs/fieldSet";
import Input from "../../components/inputs/input";
import InputRepeater from "../../components/inputs/inputRepeater";
import OptionsSelector from "../../components/inputs/options";
import React from "react";
import useDataContext from "../../lib/useDataContext";

export default () => {
  const currentSlide = 0;
  const { state } = useDataContext();

  const {
    data: { logo },
  } = state.slides[0];

  return (
    <>
      <FieldSet legend="Logo">
        <Checkbox
          propertyPath={`slides[${currentSlide}].data.logo.show`}
          label="Logo anzeigen"
        />
        {logo.show && (
          <Input
            propertyPath={`slides[${currentSlide}].data.logo.branch`}
            label="Ortsgruppe"
          />
        )}
      </FieldSet>

      <FieldSet legend="Text">
        <OptionsSelector
          propertyPath={`slides[${currentSlide}].data.body.options.textAlign`}
          options={["textLeft", "textCenter"]}
        />
        <ColorThemeSelector
          propertyPath={`slides[${currentSlide}].data.body.options.colorTheme`}
          colorThemeOptions={["orange_white", "black_white"]}
        />
        <InputRepeater
          propertyPath={`slides[${currentSlide}].data.body`}
          selectBold
          selectInputType
        />
      </FieldSet>

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};
