import React from 'react';
import css from './Car.module.css'


function Car({car, car: {id, model, price, year}, deleteCar, setCarForUpdate}) {
    return (
        <div className={css.carBlock}>
            <div className={css.carInfo}>
                <div>ID: {id}</div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <div className={css.buttonCarBlock}>
                <button onClick={() => setCarForUpdate(car)}>Edit</button>
                <button onClick={() => deleteCar(id)}>Delete</button>
            </div>


        </div>
    );
}

export {Car};