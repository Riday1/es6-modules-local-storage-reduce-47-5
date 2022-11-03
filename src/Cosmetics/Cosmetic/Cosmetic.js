import React from 'react';
import { addToDb } from '../FakeDB/FakeDB';

const Cosmetic = (props) => {
    const { id, name, price } = props.cosmetic;
    const addToCart = (id) => {
        addToDb(id);
    }
    return (
        <div style={{ border: '2px solid tomato', margin: '20px', padding: '10px' }}>
            <h3>Pro. Name : {name}</h3>
            <p>Price : {price}</p>
            <p><small>pro. ID : {id}</small></p>
            <button onClick={() => addToCart(id)}>Add To card</button>

        </div>
    );
};

export default Cosmetic;