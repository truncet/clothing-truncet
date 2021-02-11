import React from 'react';
import './collection-overview.styles.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreviews from '../../components/collection-previews/collection-previews.component';
import {selectShopCollection} from './../../redux/shop/shop.selector';

const CollectionOverview = ({collections}) => (
    <div className='collection-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreviews key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollection
});

export default connect(mapStateToProps)(CollectionOverview);