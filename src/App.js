import React from 'react';
import ChangeTabs from './ChangeTabs';
import FileUpload from './FileUpload';
import GetFlie from './GetFile';
import FormInput from './FormInput';
function App() {
  const tabs = [
    {
      label: 'Nav1',
      content: <FileUpload></FileUpload>,
    },
    {
      label: 'Nav2',
      content: <GetFlie></GetFlie>,
    },
    {
      label: 'Nav3',
      content: <FormInput></FormInput>,
    },
    
  ];

  return (
    <div>
      <ChangeTabs tabs={tabs} defaultActiveTab={0} />
    </div>
  );
}

export default App;
