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
			<div>404</div>
		);
	};
}

export default match404;