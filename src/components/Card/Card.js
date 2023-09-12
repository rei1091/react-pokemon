import React from 'react'
import './Card.css';

const Card = ({ pokemon }) => {
	return (
		<div className='card'>
			<div className='cardImg'>
				<img src={pokemon.sprites.front_default} />
			</div>
			<h3 className='cardName'>{pokemon.name}</h3>
			<div className='cardTypes'>Type</div>
			{pokemon.types.map((type) => {
				return (
					<div key={type.type.name}>
						<span className='typeName'>{type.type.name}</span>
					</div>);
			})}
			<div className='cardInfo'>
				<div className='carsData'>
					<p className='title'>Weight:{pokemon.weight}</p>
					<p className='title'>Height:{pokemon.height}</p>
					<p className='title'>Ability:{pokemon.abilities[0].ability.name}</p>
				</div>
			</div>
		</div>
	)
}

export default Card