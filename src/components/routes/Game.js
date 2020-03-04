import React from 'react';
import '../tailwind.css';
import { Link, Redirect } from "react-router-dom";
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
		gameon: false,
		timeout: false,
		lost: false,
		clickedsofar: []
	};

	display_portraits = () =>
	{
		this.setState(() => this.state.portraits.sort(() => Math.random() - .5));
	};

	run_game = event =>
	{
		event.preventDefault();
		this.setState({gameon: true});
		this.start_timer();
		this.display_portraits();
	};

	portrait_click = event =>
	{
		event.preventDefault();
		if(this.state.gameon)
		{
			var thisid = event.target.id;

			this.state.clickedsofar.find(element => {
				if(thisid === element)
				{
					this.setState({lost: true});
				}
			});

			this.setState (()=> this.state.clickedsofar.push(thisid));
			this.setState({score: this.state.score + 1, currenttime: 5});
			this.display_portraits();
		}
	}

	start_timer = () =>
	{
		let intervalid = setInterval(this.timer, 1000);
		this.setState({intervalID: intervalid});
	}

	timer = () =>
	{
		if(this.state.currenttime > 1)
		{
			this.setState(previousState => ({currenttime: previousState.currenttime - 1}));
		}
		else
		{
			clearInterval(this.state.intervalID);
			this.setState({timeout: true});
		}
	}

	render()
	{
		if(this.state.lost || this.state.timeout)
		{
			return <Redirect to = {{ pathname: "/Results", state: { score: this.state.score, timedout: this.state.timeout }}}></Redirect>
		}
		else return(
			<div>
				<div className = "flex flex-row justify-around bg-red-700 p-8 mt-2 mb-20">
					<h1 className = "text-3xl font-bold italic">Time: {this.state.currenttime} (resets on click)</h1>
					<h1 className = "text-3xl font-bold italic">Score: {this.state.score}</h1>
					<button className = "text-3xl font-bold italic" onClick = {this.run_game}>Start</button>
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