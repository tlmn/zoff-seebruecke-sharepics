import Layout from "../components/layout";
import { Link } from "gatsby";
import React from "react";

export default ({ children }) => (
  <Layout>
    <div className="container grid-12">
      <div className="col-span-12 py-1">
        <Link
          to="/"
          className="hover:underline uppercase text-white font-headline italic"
        >
          ◂ zurück zur Übersicht
        </Link>
      </div>
      {children}
    </div>
  </Layout>
);