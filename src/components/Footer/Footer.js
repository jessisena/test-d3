import React from "react";

import "./Footer.css";

const Footer = ({title}) => 
	<header className="App-header">
		{title ? title : "@Dynatrace"}
	</header>

export default Footer;