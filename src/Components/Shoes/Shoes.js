import React from 'react';
import { add } from '../Utilities/Utilities';

const Shoes = () => {
    const firstShoesPrice = 100;
    const secondShoesPrice = 200;
    const totalCost = add(firstShoesPrice, secondShoesPrice);
    return (
        <div>
            <h3>I have two shoes</h3>
            <p>Total Cost : {totalCost}</p>
        </div>
    );
};

export default Shoes;