import DownloadButton from "../../components/inputs/downloadButton";
import FieldSet from "../../components/inputs/fieldSet";
import InputRepeater from "../../components/inputs/inputRepeater";
import React from "react";

export default () => {
  const currentSlide = 0;

  return (
    <>
      <FieldSet legend="Farbe">
        
      </FieldSet>


      <FieldSet legend="Text">
        <InputRepeater
          propertyPath={`slides[${currentSlide}].data.body`}
        />
      </FieldSet>

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};
