import React from "react";
import { RouterProvider } from "react-router-dom";

import "./locales/i18n";
import { router } from "./root.router";
import { useListenTranslate } from "./hooks/useListenTranslate";

export default function Root(props) {
  useListenTranslate();
  return <RouterProvider router={router} />;
}
