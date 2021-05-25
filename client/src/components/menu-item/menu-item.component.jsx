import React from 'react';

import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, linkUrl, history}) => (
    <div className={`${size} menu-item`}>
        <div  
             style= {{
                 backgroundImage : `url(${imageUrl})`
            }} 
        className= "background-image" 
        onClick = {() => history.push(linkUrl)}/>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle"> Shop Now</span>
        </div>
    </div> 
);

export default withRouter(MenuItem);


