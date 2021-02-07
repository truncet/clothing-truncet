import React from 'react';

import SHOP_DATA from './shop.collection';

import CollectionPreviews from '../../components/collection-previews/collection-previews.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }
    
    render(){
        const {collections} = this.state;
        return (
            <div className="collections">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreviews key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;