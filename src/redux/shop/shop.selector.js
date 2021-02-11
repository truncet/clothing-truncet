import {createSelector} from 'reselect';

export const selectShop = state => state.shop;


export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collections
);