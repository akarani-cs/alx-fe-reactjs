 import { useState } from 'react';


 function Counter() {

   const [count, setCount] = useState(0);


   return (
       <div style = {{  paddingLeft: '20px'}}>

        <div style={{  backgroundColor: 'blue', border: '1px solid black', padding: '20px', color: 'white'}}>

        <p>Currentcount: {count}</p>

        </div>

        
        <button   onClick={() => setCount(count + 1)}>Increment</button>
        <button   onClick={() => setCount(count - 1)}>Decrement</button>
        <button   onClick={() => setCount(0)}>Reset</button>




       </div>
   )

 }

 export default Counter;