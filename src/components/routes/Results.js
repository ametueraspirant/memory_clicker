import React from 'react';
import '../tailwind.css';
import { Link } from "react-router-dom";
import Characters from '../characters.json';

class Results extends React.Component
{
	componentDidMount(){
		this.setState({ score: this.props.location.state.score, timedout: this.props.location.state.timedout });
	}

	state =
	{
		backgroundimg: Characters.resultsbackground
	};

	render()
	{
		if(this.state.timedout)
		{
			return(
				<div className = "bg-contain bg-repeat-round h-screen" style = {{backgroundImage: `url(${this.state.backgroundimg})`}}>
					<div className = "flex flex-col justify-around pt-32 px-32">
						<div className = "text-2xl text-semibold self-center w-1/3 text-center">
							<div className = "bg-red-700 text-center p-10 rounded-t-full">
								<h1 className = "text2xl text-white text-bold w-full">FINISH</h1>
							</div>
							<div className = "bg-white rounded-b-lg p-10">
								<p>You finished with a streak of {this.state.score} unique faces!</p>
								<p className = "pb-5">Try to be faster next time, ey champ?</p>
								<Link to = "/Game" className = "bg-red-600 p-3 mr-2 rounded-lg">Play again?</Link>
								or
								<Link to = "/" className = "bg-red-600 p-3 ml-2 rounded-lg">Go Home?</Link>
							</div>
						</div>
					</div>
				</div>
			); 
		}
		else return(
			<div className = "bg-contain bg-repeat-round h-screen" style = {{backgroundImage: `url(${this.state.backgroundimg})`}}>
					<div className = "flex flex-col justify-around pt-32 px-32">
						<div className = "text-2xl text-semibold self-center w-1/3 text-center">
							<div className = "bg-red-700 text-center p-10 rounded-t-full">
								<h1 className = "text2xl text-white text-bold w-full">FINISH</h1>
							</div>
							<div className = "bg-white rounded-b-lg p-10">
								<p>You finished with a streak of {this.state.score} unique faces!</p>
								<p className = "pb-5">But that last click was a duplicate!</p>
								<Link to = "/game" className = "bg-red-600 p-3 mr-2 rounded-lg">Play again?</Link>
								or
								<Link to = "/memory_clicker" className = "bg-red-600 p-3 ml-2 rounded-lg">Go Home?</Link>
							</div>
						</div>
					</div>
				</div>
		);
	};
};

export default Results;