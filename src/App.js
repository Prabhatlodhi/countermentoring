import { useState } from "react";

let array = [0];

function App() {
  const [count, setCount] = useState(1);


  const handleClick = () => {
    setCount(count + 1);

    array.push(" ")
    array.push(count)
  }

  const handleDecrement = ()=>{
    setCount(count - 1);
    array.pop()
    array.pop()
  }
  
  return (
    <div className="app">
       
      <h1>{array}</h1>
      <div className="button__wrapper">
        <button onClick={handleClick}>Increment</button>
        <button onClick={handleDecrement} disabled={count===1} >Decrement</button>
      </div>
    </div>
  );
}

export default App;
