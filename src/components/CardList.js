import React from 'react';
import Cards from './Cards'

const CardList = ({searchResults}) => {
	return(
			<div>
				{
					searchResults.map((results, i) =>{
						return <Cards 
							key = {i}
							title = {searchResults[i].snippet.title}
							publishedOn={searchResults[i].snippet.publishedAt}
							channel={searchResults[i].snippet.channelTitle}
							thumbnail={searchResults[i].snippet.thumbnails.medium.url}
						/>
					})
				}
			</div>)
}

export default CardList; 