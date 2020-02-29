import React from "react";
import './tailwind.css';

class Headbar extends React.Component
{
	state =
	{
		vars: true
	};

	render()
	{
		return(
			<div className = "flex flex-row justify-around bg-redbrown p-8 my-2">
				<h1 className = "text-3xl font-bold italic" id = "playbutton">Play</h1>
			</div>
		);
	}
}

export default Headbar;