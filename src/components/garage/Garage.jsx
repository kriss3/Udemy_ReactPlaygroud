import React from 'react';
import Car from './car';

function Garage() {
    const cars = ['Fiat','Renault','Opel'];
    return (
        <div>
            <h1>My Garage has:</h1>
            {cars.map(c => <Car brand={c}/>)}
        </div>
    );
}

export default Garage;