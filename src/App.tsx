import React, {useState} from 'react';
import './App.css';
import useFetch from './customhooks/UseFetch';
import UseCounter from './customhooks/UseCounter';

function App() {
  const [user,setUsers] = useState<string>("");
  const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
  const values = useFetch(url);
  const [count, increment, decrement, clearCount, incrementByValue] = UseCounter(0);
 

  return (
    <>
      {values ? values.map((user) => {
  return <p key={user.id}>{user.name}</p>;
}) : ''}

     <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={clearCount}>Clear Counter</button>
      <button onClick={() => incrementByValue(10)}>increment By 10</button>





    </>
  );
}

export default App;