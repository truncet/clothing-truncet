import {createSelector} from 'reselect';




export const selectShop = state => state.shop;


export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector (
    [selectShopCollection],
    collection => collection ? Object.keys(collection).map(key=> collection[key]): []
);


export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollection],
    collections => (collections ? collections[collectionUrlParam] : null )
);


export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching,
);

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)