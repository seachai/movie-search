import React from "react";
import { Link } from "react-router-dom";

const NavigationListItem = ({ path, label, isSelected, dispatch }) => {
  const className = isSelected
    ? "navigation-bar__link--selected"
    : "navigation-bar__link";

  return (
    <li className={className} onClick={() => dispatch}>
      <Link to={path}>{label}</Link>
    </li>
  );
};

export default NavigationListItem;
