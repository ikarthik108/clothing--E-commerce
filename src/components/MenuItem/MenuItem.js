import React from 'react';
import './MenuItem.scss'
import {withRouter} from 'react-router-dom';

const MenuItem=({key,title,imageUrl,size,linkUrl,history,match})=> {
	return (
		<div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
			<div className='background-image' 
			 style = {{
                backgroundImage : `url(${imageUrl})`, width:'100%' , height : '100%'
            }}/>
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span>SHOP NOW</span>
			</div>
			
		</div>
	)
}

export default withRouter(MenuItem);