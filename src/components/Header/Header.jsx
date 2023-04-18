import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav>
			<Link to ={"/phones"}>Phones</Link>
		</nav>
	);
};

export default Header;
