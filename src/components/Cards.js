import React from 'react'
import './cards.css'

const Cards = ({title,publishedOn,channel,thumbnail}) => {
	return(
		<div className = 'pa2 pv3 tc bg-light-green br3 ma2 grow shadow5 size flex-container'>	
			<img alt='thumbnail' src={thumbnail} className='image'  />
			<div className='mt4 tc pv3'>
				<h2> {title} </h2>
				<p>Channel :{channel} </p>
				<p>Published On: {publishedOn}</p>	
			</div>
		
		</div>

		)
} 

export default Cards;