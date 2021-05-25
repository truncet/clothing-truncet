const INITIAL_STATE = {
    sections: [
       {
           title:'Home Office',
           imageUrl: 'https://bit.ly/3fsdcdK',
           id: 1,
           linkUrl: 'shop/homeoffice'
       },
       {
           title: 'outdoor',
           imageUrl: 'https://bit.ly/2RsDqoo',
           id:2,
           linkUrl: 'shop/outdoor'
       },
       {
           title: 'Bedroom',
           imageUrl: 'https://bit.ly/3fuH8WH',
           id:3,
           linkUrl: 'shop/bedroom'
       },
       {
           title: 'Dining',
           imageUrl: 'https://bit.ly/bangla-dining',
           id:4,
           size:'large',
           linkUrl: 'shop/dining'
       },
       {
           title: 'Living',
           imageUrl: 'https://bit.ly/bangla-living',
           id:5,
           size:'large',
           linkUrl: 'shop/living'
       }
   ]
}





const directoryReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        default:
            return state;
    }
};


export default directoryReducer;
