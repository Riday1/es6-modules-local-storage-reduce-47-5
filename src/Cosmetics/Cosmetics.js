import React, { useEffect, useState } from 'react';
import Cosmetic from './Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    // const cosmetics = [
    //     { id: 1, name: 'nailpolish', price: 100 },
    //     { id: 2, name: 'nailpolish remover', price: 100 },
    //     { id: 3, name: 'snow', price: 100 },
    //     { id: 4, name: 'powder', price: 100 },
    //     { id: 5, name: 'perfume', price: 100 }
    // ]

    return (
        <div>
            <h1>Welcome to my cosmetics site</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;