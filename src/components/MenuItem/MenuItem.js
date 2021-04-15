import React from 'react';
import './MenuItem.scss'

const MenuItem=({id,title,imageUrl,size})=> {
	return (
		<div className={`${size} menu-item`}>
			<div className='background-image' 
			style={{backgroundImage:`url(${imageUrl})`, width:'100%' , height : '100%'}}/>
			<div className='content'>
				<h1 className='title'>{title}</h1>
				<span>SHOP NOW</span>
			</div>
			
		</div>
	)
}

export default MenuItem;