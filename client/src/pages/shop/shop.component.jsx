import React , {useEffect} from 'react';

import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import CollectionPageContainer from '../collection/collection.container';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import { fetchCollectionStart, fetchCollectionStartAsync } from '../../redux/shop/shop.actions';




const  ShopPage  =  ({match,fetchCollectionStart}) =>   {
      useEffect(() => {
        fetchCollectionStart();
      }, [fetchCollectionStart]); 

      return  <div className="shop-page">
        <Route exact path ={`${match.path}`} component={CollectionOverviewContainer} />
        <Route path ={`${match.path}/:collectionId`} component={CollectionPageContainer} />
    </div>
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);