import React from "react";
import Utils from "../../commons/Utils";
import Widget from "../Widget/Widget";

export default class GridPanel extends React.PureComponent {

	constructor(props) {

		super(props);

		this.state = {
			loading: true,
			error: false,
			errorMessage: "",
			widgetList: []
		}

	}
  
	async componentDidMount() {

		try {

			const data = await Utils.getAlbumsList();
			this.setState({loading: false, widgetList: data});

		} catch(e) {

			this.setState({loading: false, error: true, errorMessage: e});
		
}
		
	}


	render() {

		if(this.state.loading) {

			return(
				<div class="ui center aligned container">
					<div class="ui segment">
						<div className="ui active transition visible dimmer">
							<div className="content"><div className="ui loader"></div></div>
						</div>
						<img
							alt="Loading..."
							src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
							className="ui image"
						/>
					</div>				
				</div>

			);
		
		}

		return(
			<div class="ui center aligned container">
						<div class="ui grid">
				{this.state.widgetList.map((item, index) => <Widget key={index} object={item}></Widget>)}
			</div>
			</div>

		);

	}

}
