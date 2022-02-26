import React from 'react';
import Car from '../car/Car';


const getData = () => {
    const cars = ['Fiat','Renault','Opel'];
    return cars;
};

const Garage = () => {
    const cars = getData();
    return (
        <div>
            <h1>My Garage has:</h1>
            {cars.map(c => <Car brand={c}/>)}
        </div>
    );
}

export default Garage;