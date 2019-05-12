import React from "react";
import "./Header.css";

const styles = {
	AppHeader: {
		backgroundColor: "#282c34",
		minHeight: "10vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "12rem",
		color: "white"
	}
}

const Header = ({title}) => 
	<header className="App-header">
		{title ? title : "Dynatrace dashboard"}
	</header>

export default Header;