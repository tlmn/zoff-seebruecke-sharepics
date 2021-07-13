import { cloneDeepWith, get, initial, set } from "lodash";

import { colorThemes } from "../config/vars";
import emojiRegex from "emoji-regex";
import htmlToImage from "html-to-image";
import { saveAs } from "file-saver";
import slugify from "react-slugify";
import { theme } from "../../tailwind.config";

const { colors } = theme;

export const html2image = async ({ state, setState }, fileName = "") => {
  setState((prev) => ({ ...prev, templateScale: false }));

  const { dimensions, ref } = state.slides[state.currentSlide];
  htmlToImage
    .toJpeg(ref.current, {
      quality: 1,
      width: dimensions.width,
      height: dimensions.height,
    })
    .then((blob) => {
      saveAs(blob, `sharepic-seebruecke-${slugify(fileName.substring)}`);
      setState((prev) => ({ ...prev, templateScale: true }));
    });
};
export const formatText = (text = "") => {
  return text
    .replace(
      emojiRegex(),
      (m) => `<span class="not-italic" role="img">${m}</span>`
    )
    .replace(/\n/gi, `<br/>`);
};

export const getColor = (currentColorTheme, order) => {
  return get(
    colors,
    colorThemes.filter(
      (colorTheme) => colorTheme.label === currentColorTheme
    )[0]?.colors[order]
  );
};

export const getPrimaryColor = (currentState) => {
  return colors.filter((color) => color.name === currentState.primaryColor)[0]
    .value;
};

export const updateProperty = ({ setState }, path, newValue) => {
  setState((prev) => {
    let prevCloned = cloneDeepWith(prev);
    set(prevCloned, path, newValue);
    return prevCloned;
  });
};

export const pushProperty = ({ setState }, path, newValue) => {
  setState((prev) => {
    let prevCloned = cloneDeepWith(prev);
    get(prevCloned, path).push(newValue);
    return prevCloned;
  });
};

export const removeProperty = ({ setState }, path) => {
  setState((prev) => {
    let prevCloned = cloneDeepWith(prev);
    set(prevCloned, path, initial(get(prevCloned, path)));
    return prevCloned;
  });
};

export const getProperty = ({ state }, path) => {
  return get(state, path);
};

export const calcTemplateScale = ({ state }) => {
  return {
    transform:
      state.templateScale &&
      state.slides[state.currentSlide].ref.current !== null
        ? `scale(${
            state.slides[state.currentSlide].ref.current.clientWidth /
            state.slides[state.currentSlide].dimensions.width
          }) translate(-50%, -50%)`
        : ``,
  };
};
