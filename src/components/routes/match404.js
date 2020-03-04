import React from 'react';
import '../tailwind.css';
import { Link } from "react-router-dom";
import Characters from '../characters.json';

class match404 extends React.Component
{
	state =
	{
		backgroundimg: Characters.fourohfourbackground
	};

	render()
	{
		return(
			<div className = "bg-auto bg-no-repeat bg-center bg-redfourohfour h-screen" style = {{backgroundImage: `url(${this.state.backgroundimg})`}}>
				<div className = "flex flex-row justify-center pt-64">
					<div className = "flex flex-col content-center text-white text-extrabold text-2xl">
						<h1 className = "mb-40">It looks like you're trying to escape the webpage! </h1>
						<Link to = "/" className = "self-center">-&gt; Click here to go back home.&lt;-</Link>
					</div>
				</div>
			</div>
		);
	};
}

export default match404;