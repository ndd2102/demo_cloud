import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [check, setCheck] = useState(false)
  const [url, setUrl] = useState(null)

  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    axios.post('https://upbeat-repeater-383813.as.r.appspot.com/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        setUrl(response.data.data.Location)
        setCheck(true)
      })
      .catch(error => console.error(error))
  };

  const setDefault = () => {
    setCheck(false)
    setFile(null)
    setUrl(null)
  }
  return (
    <div className="">
      {!check ? (
        <form onSubmit={handleFormSubmit}>
          <div>
            Choose a file to upload:
            <input type="file" onChange={handleFileInputChange} />
          </div>
          <button type="submit">Upload</button>
        </form>) : (
        <div>
          <a href={url}>{url}</a>
          <button onClick={setDefault}>Back</button>
        </div>
      )
      }
    </div>
  );
}

export default FileUpload;
