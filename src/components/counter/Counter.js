
import React, {useState} from 'react';

function Counter(props) {

    const [myVal, setMyVal] = useState(0);

    const increment = () => {
        setMyVal(myVal +1);
    };

    const decrement = () => {
        setMyVal(myVal -1);
    };

    return (
        <div>
            <input value={myVal} type='number' />
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Counter;