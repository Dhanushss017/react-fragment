import React from 'react';


const SupplyBar = ({ percent }) => {
  return (
    <SupplyBar>
      <BarFill percent={percent} color="#007bff" />
      <BarFill percent={100 - percent} color="#f0f0f0" />
    </SupplyBar>
  );
};

export default SupplyBar;
