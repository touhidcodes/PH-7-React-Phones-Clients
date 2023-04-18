import React from "react";
import { useLoaderData } from "react-router-dom";

const Phone = () => {
	const phone = useLoaderData();
	console.log(phone);
	return (
		<div>
			<h3>Phone: {phone.name}</h3>
			<h3>Price: {phone.price}</h3>
			<h3>Description: {phone.description}</h3>
			<img src={phone.image} alt='' />
		</div>
	);
};

export default Phone;
