import React from 'react';
import { minus } from '../Utilities/Utilities';

const Shirts = () => {
    const firstShirtPrice = 200;
    const secondShirtPrice = 300;
    const costDifference = minus(firstShirtPrice, secondShirtPrice)
    return (
        <div>
            <h3>I have Two shirts </h3>
            <p>Cost Difference  : {costDifference} </p>
        </div>
    );
};

export default Shirts;