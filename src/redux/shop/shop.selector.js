import {createSelector} from 'reselect';




export const selectShop = state => state.shop;


export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector (
    [selectShopCollection],
    collection => Object.keys(collection).map(key=> collection[key])
);


export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollection],
    collections => collections[collectionUrlParam]
);