import Checkbox from "../../components/inputs/checkbox";
import ControlsWrapper from "../../components/controlsWrapper";
import DownloadButton from "../../components/inputs/downloadButton";
import FieldSet from "../../components/inputs/fieldSet";
import Input from "../../components/inputs/input";
import InputRepeater from "../../components/inputs/inputRepeater";
import React from "react";
import useDataContext from "../../lib/useDataContext";

export default () => {
  const currentSlide = 0;
  const { state } = useDataContext();

  const {
    data: { logo },
  } = state.slides[0];

  return (
    <ControlsWrapper>
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
        <InputRepeater
          propertyPath={`slides[${currentSlide}].data.body`}
          selectBold
        />
      </FieldSet>

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </ControlsWrapper>
  );
};
