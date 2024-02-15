import React from "react";

const BurnInfoBox = () => {
  return (
    <BurnInfoBoxStyled className="info_box filled">
      <h1 className="title">App TOKEN BURN</h1>
      <p className="description medium">
        Welcome to the App Token Burn page. Here, you can burn your App tokens
        to reduce the token supply.
      </p>
    </BurnInfoBoxStyled>
  );
};

export default BurnInfoBox;
