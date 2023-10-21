import React from 'react';

const Toolbar = ({ text, icon, onClick }) => {
  return (
    <div className="toolbar">
      {text}
      <i className={icon} onClick={onClick} />
    </div>
  );
};

export default Toolbar;
