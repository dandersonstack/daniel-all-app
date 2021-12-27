
import React, {useState} from "react";


function ClicksCounter(){
    
    const [counter, setCounter] = useState(0)

    function increment(){
        setCounter (counter +1)
    }
    function decrement(){
        setCounter (counter - 1)
    }
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button class = "button" onClick={increment}>Add</button>
            <button class = "button" onClick ={decrement}> Remove</button>
        </div>
    )
}

export default ClicksCounter
