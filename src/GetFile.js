import axios from 'axios';
import { useEffect, useState } from 'react';

function GetFlie() {
    const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://upbeat-repeater-383813.as.r.appspot.com//images')
      .then(response => {
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  }, []);
  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}><a href={item.url}>{item.url}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default GetFlie;
