import { FC } from "react";

import "./breadCrumbs.css";

interface BreadCrumbsProps {
  name: string;
  handle: () => void;
}
export const BreadCrumbs: FC<BreadCrumbsProps> = ({ name, handle }) => {
  return (
    <button onClick={handle} className="breadCrumbs__button">
      <i className="icon-arrow-left"></i>
      {name}
    </button>
  );
};
