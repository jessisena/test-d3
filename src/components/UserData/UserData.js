import React from "react";
import { subscribeToTimer } from "../../commons/api";

export default class UserData extends React.PureComponent {

	constructor(props) {

		super(props);

		this.state = {
			timestamp: ""
		}

		subscribeToTimer((err, timestamp) => this.setState({ 
			timestamp 
		}));
	
	}


	render() {

		return(
			<h1>{this.state.timestamp}</h1>
		);

	}

}