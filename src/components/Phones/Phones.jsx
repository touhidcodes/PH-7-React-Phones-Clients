import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
	const phones = useLoaderData();
	// console.log(phones);
	return (
		<div>
			<h2>Phones {phones.length}</h2>
			{Array.isArray(phones)
				? phones.map((phone) => (
						<li key={phone.id}>
							<Link to={`/phone/${phone.id}`}>{phone.name}</Link>
						</li>
				  ))
				: []}
		</div>
	);
};

export default Phones;
