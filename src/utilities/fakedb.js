// use local storage to manage cart data
const addToDb = id => {
    let jobCart = getShoppingCart();
    // add quantity
    const quantity = jobCart[id];
    if (!quantity) {
        jobCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        jobCart[id] = newQuantity;
    }
    localStorage.setItem('job-cart', JSON.stringify(jobCart));
}

const removeFromDb = id => {
    const jobCart = getShoppingCart();
    if (id in jobCart) {
        delete jobCart[id];
        localStorage.setItem('job-cart', JSON.stringify(jobCart));
    }
}

const getShoppingCart = () => {
    let jobCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('job-cart');
    if (storedCart) {
        jobCart = JSON.parse(storedCart);
    }
    return jobCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('job-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}