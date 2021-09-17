import React from "react";

import "./custom-button.styles.scss";

export const CustomButton = ({ children, isGoogle, ...otherProps }) => (
  <button className={`${isGoogle ? 'isGoogleClass' : ''} custom-button` }{...otherProps}>
    {children}
  </button>
);
