import React from 'react';
import '../tailwind.css';
import Characters from '../characters.json';
import Imgcard from '../Imgcard.js';

class Game extends React.Component
{
	state =
	{
		portraits: Characters.data,
		score: 0,
		currenttime: 0,
		clickedsofar: []
	};

	display_portraits = event =>
	{
		// event.preventDefault();
		this.setState(() => this.state.portraits.sort(() => Math.random() - .5));
	};

	run_game = event =>
	{
		event.preventDefault();

		this.display_portraits();
	};

	portrait_click = event =>
	{
		event.preventDefault();
		
	}

	render()
	{
		return(
			<div>
				<div className = "flex flex-row justify-around bg-redbrown p-8 mt-2 mb-20">
					<button className = "text-3xl font-bold italic" id = "playbutton" onClick = {this.run_game}>{this.state.currenttime}</button>
				</div>
				<div className = "flex flex-row flex-wrap w-5/6 mx-auto my-10" id = "game">
					{this.state.portraits.map(portrait => (
						<Imgcard image={portrait.image} id = {portrait.id} onClick = {this.portrait_click} />
					))}
				</div>
			</div>
		);
	};
}

export default Game;