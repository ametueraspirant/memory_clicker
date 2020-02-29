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
			<div className = "flex flex-row bg-blue-700 p-5">
				<h1 className = "">stuff</h1>
			</div>
		);
	}
}

export default Headbar;