import { formatEmojis, getColor } from "../../lib/lib";

import React from "react";

export default ({ state }) => {
  return (
    <div className="col-span-6 relative">
      <div
        className={`p-4 // flex flex-col absolute // border-1 // template ${
          state.templateScale ? `template-scale` : `relative`
        }`}
        style={{ backgroundColor: getColor(state, 0) }}
        ref={state.templateRef}
      >
        <div className="flex">
          <span
            className="block // w-full // self-center // text-left italic font-bold font-headline leading-none"
            style={{
              fontSize: `${(state.bodyTextScale / 100) * 80}px`,
              color: getColor(state, 1),
            }}
            dangerouslySetInnerHTML={{
              __html: formatEmojis(state.bodyText.replace(/\n/gi, `<br/>`)),
            }}
          />
        </div>
        <div
          className="mt-3 flex-1 text-left // font-headline text-lg italic font-bold uppercase"
          dangerouslySetInnerHTML={{
            __html: state.authorText === "" ? "\u00a0" : state.authorText,
          }}
          style={{
            color: getColor(state, 1),
          }}
        />
      </div>
    </div>
  );
};
