import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}
