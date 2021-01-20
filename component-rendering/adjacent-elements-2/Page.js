import React, { Fragment } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Page() {
  return (
    <Fragment key="fragment-key">
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default Page;
