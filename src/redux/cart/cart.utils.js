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
}