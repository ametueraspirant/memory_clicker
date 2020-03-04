import React from "react";
import './tailwind.css';

function Imgcard(props)
{
	return <img src={props.image} className = "w-1/12" id = {props.id} onClick = {props.onClick} alt = "tempalt" />;
}

export default Imgcard;