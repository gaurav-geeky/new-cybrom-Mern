import { useState } from 'react';

function App() {

  let [color, setColor] = useState('white'); 


  return (
    < >
    {  /* <h1> this is our color {color} </h1> 
    <button onClick={() => setColor()}> ch color</button>
    <h1> this is app jsx</h1> */  } 

  <div style={{ height: '100vh', width: "100%",  backgroundColor: color, border: "1px solid pink"}}> 
    
        <h1> {color} </h1>

        <div style={{ margin: "10px", border: "1px solid brown"}}> 
          <button onClick= {() => setColor('red')}> red </button>
          <button onClick= {() => setColor('green')}> green </button>
          <button onClick= {() => setColor('yellow')}> yellow </button>
          <button onClick= {() => setColor('blue')}> blue </button>
        </div>

  </div>
    </>
  );
}

export default App;

