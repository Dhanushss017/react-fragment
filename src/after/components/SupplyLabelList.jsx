import React from 'react';


const SupplyLabelList = ({ labels }) => {
  return (
    <SupplyLabelList>
      {labels.map((label, index) => (
        <div key={index}>
          <p className="supply_label">
            <span className="hyphen">{label.hyphen}</span>
            <span className="text">{label.text}</span>
            <span className="percent">{label.percent}</span>
          </p>
          
        </div>
      ))}
    </SupplyLabelList>
  );
};

export default SupplyLabelList;
