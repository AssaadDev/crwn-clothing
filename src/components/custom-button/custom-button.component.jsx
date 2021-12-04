import React from "react";

import "./custom-button.styles.scss";

export const CustomButton = ({ children, isGoogle, inverted, ...otherProps }) => (
  <button className={`${inverted ? 'inverted' : ''} ${isGoogle ? 'isGoogleClass' : ''} custom-button` }{...otherProps}>
    {children}
  </button>
);
