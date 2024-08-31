import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [data, setData] = useState('');


  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        setData(data);
      })
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data}
      </ul>
    </div>
  );
};

export default App;