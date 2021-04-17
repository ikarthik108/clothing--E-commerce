import React from 'react';
import './CollectionPreview.scss'

import CollectionItem from '../CollectionItem/CollectionItem.js'

const CollectionPreview= ({key,title,routeName,items}) => {
	return (
		<div className='collection-preview'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<div className='preview'>
			{items
				.filter((item,index)=>index < 4)
				.map(item=> (
						<CollectionItem key={item.id} name={item.name}
						 price={item.price} imageUrl={item.imageUrl}/>

			))}	
			</div>	
		</div>
	);
}

export default CollectionPreview;