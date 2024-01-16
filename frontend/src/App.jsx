import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => setJokes(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []); // Provide an empty dependency array to run the effect only once when the component mounts

  return (
    <>
      <h1>Hello</h1>
      <h1>{jokes.length}</h1>
      {jokes.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
