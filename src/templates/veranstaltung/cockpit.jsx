import ColorThemesSelect from "../../components/colorThemesSelect";
import React from "react";
import htmlToImage from "html-to-image";
import slugify from "react-slugify";

export default ({ state, setState }) => {
  const html2image = async () => {
    setState({ ...state, templateScale: false });
    htmlToImage
      .toJpeg(state.slides[state.currentSlide].templateRef.current, {
        quality: 1,
        width: 1080,
        height: 1080,
      })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = `sharepic-${slugify(
          state.slides[state.currentSlide].data.event.content
        )}.jpg`;
        link.href = dataUrl;
        link.click();
        setState({ ...state, templateScale: true });
      });
  };
  return (
    <div className="p-1 bg-turquoise">
      <ColorThemesSelect state={state} setState={setState} />
      <input
        onChange={(e) => setState({
          ...state,
          ...state.slides.splice(state.currentSlide, 1, {
            ...state.slides[state.currentSlide],
            data: {
              ...state.slides[state.currentSlide].data,
              type: {
                content: e.target.value,
              },
            },
          }),
        })}
        value={state.slides[state.currentSlide].data.type.content}
      />
      <textarea
        onChange={(e) =>
          setState({
            ...state,
            ...state.slides.splice(state.currentSlide, 1, {
              ...state.slides[state.currentSlide],
              data: {
                ...state.slides[state.currentSlide].data,
                event: {
                  ...state.slides[state.currentSlide].data.event,
                  content: e.target.value,
                },
              },
            }),
          })
        }
        value={state.slides[state.currentSlide].data.event.content}
        className="border-1"
        rows={6}
        cols={30}
      />
      <input
        type="range"
        id="eventTextScale"
        name="eventTextScale"
        min={state.slides[state.currentSlide].data.event.scaleRange[0]}
        max={state.slides[state.currentSlide].data.event.scaleRange[1]}
        value={state.slides[state.currentSlide].data.event.scale}
        onChange={(e) =>
          setState({
            ...state,
            ...state.slides.splice(state.currentSlide, 1, {
              ...state.slides[state.currentSlide],
              data: {
                ...state.slides[state.currentSlide].data,
                event: {
                  ...state.slides[state.currentSlide].data.event,
                  scale: e.target.value,
                },
              },
            }),
          })
        }
      />
      <input
        onChange={(e) =>
          setState({
            ...state,
            ...state.slides.splice(state.currentSlide, 1, {
              ...state.slides[state.currentSlide],
              data: {
                ...state.slides[state.currentSlide].data,
                speaker: {
                  content: e.target.value,
                },
              },
            }),
          })
        }
        value={state.slides[state.currentSlide].data.speaker.content}
      />
      <input
        onChange={(e) =>
          setState({
            ...state,
            ...state.slides.splice(state.currentSlide, 1, {
              ...state.slides[state.currentSlide],
              data: {
                ...state.slides[state.currentSlide].data,
                location: {
                  content: e.target.value,
                },
              },
            }),
          })
        }
        value={state.slides[state.currentSlide].data.location.content}
      />
      <input
        onChange={(e) =>
          setState({
            ...state,
            ...state.slides.splice(state.currentSlide, 1, {
              ...state.slides[state.currentSlide],
              data: {
                ...state.slides[state.currentSlide].data,
                date: {
                  content: e.target.value,
                },
              },
            }),
          })
        }
        value={state.slides[state.currentSlide].data.date.content}
      />
      <button className="btn-download" onClick={() => html2image()}>
        Download
      </button>
    </div>
  );
};
