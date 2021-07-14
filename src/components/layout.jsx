import { graphql, useStaticQuery } from "gatsby";

import { Helmet } from "react-helmet";
import React from "react";

export default ({ children }) => {
  const {
    site: {
      siteMetadata: { title, name, description },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          name
        }
      }
    }
  `);

  const longTitle = `${name} – ${title}`;

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: "bg-darkGray",
        }}
      >
        <meta charSet="utf-8" />
        <title>{longTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={longTitle} />
      </Helmet>
      <div class="hidden lg:block pb-2">{children}</div>
      <div class="flex flex-col lg:hidden h-screen w-screen items-center justify-center">
        <h1 className="text-lg text-white leading-tight font-bold text-center">
          Seebrücke Sharepic Generator
        </h1>
        <h2 className="text-center mt-2 text-orange">
          Der Generator läuft derzeit nur auf Desktop-Geräten (Fensterbreite ab
          992 Pixeln).
        </h2>
      </div>
    </>
  );
};
