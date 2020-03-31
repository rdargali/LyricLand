import React from "react";

import loadingSpinner from "../assets/spinner.gif";

export default () => {
  const spinnerStyle = {
    width: "200px",
    margin: "40px auto",
    display: "block"
  };
  return (
    <div>
      <img src={loadingSpinner} alt="loading..." style={spinnerStyle} />
    </div>
  );
};
