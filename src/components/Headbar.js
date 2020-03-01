import React from 'react';
import './tailwind.css';
import Characters from './characters.json';
import Imgcard from './Imgcard.js';

class Headbar extends React.Component
{
	state =
	{
		portraits: Characters.data,
		background: Characters.background
	};

	display_portraits = event =>
	{
		event.preventDefault();
		this.state.portraits.forEach(element => {
			
		});
		// this.run_game();
	};

	run_game = event =>
	{
		event.preventDefault();

	};

	render()
	{
		return(
			<div>
				<div className = "flex flex-row justify-around bg-redbrown p-8 my-2">
					<button className = "text-3xl font-bold italic" id = "playbutton" onClick = {this.display_portraits}>Play</button>
				</div>
				<div className = "flex flex-row " id = "game">
					{
						this.state.portraits.map(element => {
							return <Imgcard image = {element} />
						})
					}
				</div>
			</div>
		);
	};
}

export default Headbar;