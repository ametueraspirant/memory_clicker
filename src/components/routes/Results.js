import React from 'react';
import '../tailwind.css';
import { Link } from "react-router-dom";
import Characters from '../characters.json';

class Results extends React.Component
{
	state =
	{
		backgroundimg: Characters.resultsbackground
	};

	render()
	{
		return(
			<h1>results</h1>
		);
	};
};

export default Results;