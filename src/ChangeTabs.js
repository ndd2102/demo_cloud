import React, { useState } from 'react';
import "./ChangeTabs.css"
function ChangeTabs(props) {
  const [activeTab, setActiveTab] = useState(props.defaultActiveTab);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="vertical-tabs">
      <div className="vertical-tabs-menu">
        {props.tabs.map((tab, index) => (
          <div
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="vertical-tabs-content">
        {props.tabs.map((tab, index) => (
          <div key={index} className={index === activeTab ? 'active' : 'hidden'}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChangeTabs;