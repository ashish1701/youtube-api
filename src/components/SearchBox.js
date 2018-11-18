import React from 'react';

const SearchBox=({onChange, onSubmit, onFilterChange}) => {
	return (
		<div>
			<div className='center w-100 form pa4 br-3 shadow-5 dib'>
				<input className='f4 w-50 pa2 center' 
				type= "text"
				 placeholder="Search" 
				 onChange = {onChange} 
				 />
				<button className='f4 grow w-10 link ph3 pv2 dib white bg-light-purple'
				onClick = {onSubmit}	
				>Search</button>
				<select
				className='w-5 ma2 link ph3 pv2 dib black bg-light-grey'
				onChange={onFilterChange}
				>
					<option defaultValue='none' > Select Filter </option>
					<option value='name'> Name </option>
					<option value='date'> Date </option>
				</select>
			</div>
		</div>
	)
}
export default SearchBox;
