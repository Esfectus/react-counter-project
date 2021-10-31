import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    function incrementCount(){
        setCount(count+1)
    }
    function resetCount(){
        setCount(0)
    }


    return ( 
        <div className="container">
            <div className="window">
            <h1>{count}</h1>
            </div>
            <div className="buttons">
                <button className="button button1" onClick={incrementCount}>Click Me</button>
                <button className="button button2" onClick={resetCount}>Reset Count</button>
            </div>
        </div>
     );
}
 
export default Counter;