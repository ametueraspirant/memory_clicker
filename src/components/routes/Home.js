import React from 'react';
import '../tailwind.css';
import { Link } from "react-router-dom";
import Characters from '../characters.json';

class Home extends React.Component
{
	state =
	{
		backgroundimg: Characters.homebackground
	};

	render()
	{
		return(
			<div className = "bg-cover h-screen" style = {{backgroundImage: `url(${this.state.backgroundimg})`}}>
				<Link to = {"/Game"}>
					<div className = "flex flex-col justify-around pt-64 px-32">
						<h1 className = "text-white text-2xl text-semibold self-center blend-exclusion">
							<p>Hey there. So persona characters all look pretty similar. It doesn't help that there's a lot of them... 
							Let's test your memory. Click characters as the screen shifts. Try not to click the same character twice.</p> 
							<p>there's got to be a better way to make this text show up without making it slightly ugly</p>
						</h1>
						<h2 className = "text-white text-4xl italic text-bold self-center">Start the game</h2>
					</div>
				</Link>
			</div>
		);
	};
}

export default Home;