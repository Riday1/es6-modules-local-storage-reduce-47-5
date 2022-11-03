const addToDb = (id) => {
    let shoppingCart;
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    else {
        shoppingCart = {};
    }
    // console.log(shoppingCart)
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const removeFromDb = (id) => {
    let shoppingCart = JSON.parse(localStorage.getItem('shopping-cart'));

    if (shoppingCart) {
        delete shoppingCart[id];

        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

export { addToDb, removeFromDb }