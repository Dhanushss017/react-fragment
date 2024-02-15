import React from 'react';


const BurnTransactions = () => {
  return (
    <BurnTransactions className="transaction_table">
      <h2>Burn Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Transaction ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2022-02-15</td>
            <td>100</td>
            <td>0x123456789</td>
          </tr>
          <tr>
            <td>2022-02-14</td>
            <td>200</td>
            <td>0x987654321</td>
          </tr>
        </tbody>
      </table>
    </BurnTransactions>
  );
};

export default BurnTransactions;
