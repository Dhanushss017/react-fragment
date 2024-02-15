import React from "react";
import BurnInfoBox from "./BurnInfoBox";
import BurnStats from "./BurnStats";
import BurnTransactions from "./BurnTransactions";
import ChainSelector from "./ChainSelector";
import AppToast from "./AppToast";

const BurnPage = () => {
  return (
    <>
      <BurnInfoBox />
      <BurnStats />
      <BurnTransactions />
      <ChainSelector  />
      <AppToast />
    </>
  );
};

export default BurnPage;
