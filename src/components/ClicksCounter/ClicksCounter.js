import React, {useState} from "react";
import './ClicksCounter.css';

const ClicksCounter = () => {
    const [counter, setCounter] = useState(0)
    const increment = () => setCounter (counter + 1)
    const decrement = () => setCounter (counter - 1)

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button className="clicks-counter-button" onClick={increment}>Add</button>
            <button className="clicks-counter-button" onClick ={decrement}> Remove</button>
        </div>
    )
}

export default ClicksCounter
