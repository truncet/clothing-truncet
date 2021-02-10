export const addItemsToCart = (cartItems, newItemToAdd)=> {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === newItemToAdd.id
    );

    if (existingCartItem){
        return cartItems.map(cartItem =>
            cartItem.id === newItemToAdd.id ? {...cartItem, quantity:cartItem.quantity + 1}: cartItem
            )
    }
    return [...cartItems, {...newItemToAdd, quantity:1}];
};

export const removeItemsFromCart = (cartItems, cartItemsToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemsToRemove.id
    );

    if (existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== existingCartItem.id);
    }

    return cartItems.map(cartItem => 
        cartItem.id === existingCartItem.id?
        {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
        );

}