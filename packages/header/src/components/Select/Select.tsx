import { FC } from "react";

import "./select.css";

interface SelectProps {
  languages: string[];
  active: string;
  handle: (item: string) => void;
}

export const Select: FC<SelectProps> = ({ languages, active, handle }) => {
  return (
    <ul className="select__ul">
      {languages.map((item) => (
        <li key={item} className="select__ul-list">
          <button className="select__ul-button" onClick={() => handle(item)}>
            <span>{active === item && <i className="icon-checkmark"></i>}</span>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};
