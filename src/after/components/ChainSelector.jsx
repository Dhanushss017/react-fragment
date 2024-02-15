import React from 'react';


const ChainSelector = ({ title }) => {
  return (
    <ChainSelector className="chain_selector">
      <h2>{title}</h2>
      <select>
        <option value="mainnet">Mainnet</option>
        <option value="testnet">Testnet</option>
      </select>
    </ChainSelector>
  );
};

export default ChainSelector;
