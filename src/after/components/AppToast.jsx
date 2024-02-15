import React from 'react';

const AppToast = ({ position }) => {
  return (
    <AppToast className="app_toast" style={{ position: 'absolute', ...position }}>
      <p>Toast Message: Burn Successful!</p>
    </AppToast>
  );
};

export default AppToast;
