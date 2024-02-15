import React from "react";
import BurnInfoBox from "./BurnInfoBox";
import BurnStats from "./BurnStats";
import BurnTransactions from "./BurnTransactions";
import ChainSelector from "./ChainSelector";
import AppToast from "./AppToast";
import BurnButton from "./BurnButton";
import SupplyBar from "./SupplyBar";
import SupplyLabelList from "./SupplyLabelList";

const BurnPage = () => {
  return (
    <>
      <BurnInfoBox />
      <BurnStats />
      <BurnTransactions />
      <ChainSelector  />
      <BurnButton/>
      <SupplyBar/>
      <SupplyLabelList/>
      <AppToast />
      
    </>
  );
};

export default BurnPage;
