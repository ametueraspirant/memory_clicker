import React from 'react';
import '../tailwind.css';
import { Link } from "react-router-dom";
import Characters from '../characters.json';
import Imgcard from '../Imgcard.js';

class Game extends React.Component
{
	state =
	{
		portraits: Characters.data,
		score: 0,
		currenttime: 5,
		intervalID: 0,
		clickedsofar: []
	};

	display_portraits = () =>
	{
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
		var thisid = event.target.id;

		this.state.clickedsofar.forEach(element => {
			if(thisid === element)
			{
				return console.log("you already clicked this");
				//exit code with failure message
			}
		});

		this.setState (()=> this.state.clickedsofar.push(thisid));
		this.setState({score: this.state.score + 1, currenttime: 5});
		this.display_portraits();
	}

	start_timer = event =>
	{
		event.preventDefault();
		let intervalid = setInterval(this.timer, 1000);
		this.setState({intervalID: intervalid});
	}

	timer = () =>
	{
		if(this.state.currenttime > 0)
		{
			this.setState(previousState => ({currenttime: previousState.currenttime - 1}));
		}
		else
		{
			clearInterval(this.state.intervalID);
			//exit code with time message
		}
	}

	render()
	{
		return(
			<div>
				<div className = "flex flex-row justify-around bg-red-700 p-8 mt-2 mb-20">
					<h1 className = "text-3xl font-bold italic">{this.state.currenttime}</h1>
					<h1 className = "text-3xl font-bold italic">{this.state.score}</h1>
					<button className = "text-3xl font-bold italic" onClick = {this.start_timer}>Start</button>
				</div>
				<div className = "flex flex-row flex-wrap w-5/6 mx-auto my-10" id = "game">
					{this.state.portraits.map(portrait => (
						<Imgcard image={portrait.image} key = {portrait.id} id = {portrait.id} onClick = {this.portrait_click} />
					))}
				</div>
			</div>
		);
	};
}

export default Game;