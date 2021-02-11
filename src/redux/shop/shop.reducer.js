import SHOP_DATA from './shop.collection';


const INITIAL_STATE = {
    collections: SHOP_DATA
}


const shopReducer = (state= INITIAL_STATE, action) => {
    switch (action.typ){
        default:
            return state;
    }
};


export default shopReducer;