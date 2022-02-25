
import React from 'react';

const handleClick = () => {
    alert('I was clicked');
};


function Counter(props) {

    return (
        <div>
            <input type='number' />
            <button onClick={handleClick}>+</button>
        </div>
    );
}

export default Counter;