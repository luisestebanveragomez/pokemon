import { FC } from "react";
import { Link } from "react-router-dom";

import "./breadCrumbs.css";

interface BreadCrumbsProps {
  name: string;
  url: string;
}
export const BreadCrumbs: FC<BreadCrumbsProps> = ({ name, url }) => {
  return (
    <Link to={url} className="breadCrumbs__button">
      <i className="icon-arrow-left"></i>
      {name}
    </Link>
  );
};
