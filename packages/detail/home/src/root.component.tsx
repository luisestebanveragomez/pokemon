import React from "react";
import { RouterProvider } from "react-router-dom";

import "./locales/i18n";
import { useListenTranslate } from "./hooks/useListenTranslate";
import { router } from "./root.router";

export default function Root(props) {
  useListenTranslate();

  return <RouterProvider router={router} />;
}
