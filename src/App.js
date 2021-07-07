import { useState } from 'react';
import axios from '../node_modules/axios/index';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=2a5b3a30309f45d9a7196776774b8fec',);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
}

export default App;
