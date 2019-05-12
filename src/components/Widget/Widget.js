import React from "react";
import "./Widget.css";

const Widget = (props) => {

	return(

		<div className="ui card mycard">
			<div className="content">
				<div className="header">Project Report - April</div>
				<div className="meta">ROI: 30%</div>
				<div className="description">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews.
				</div>
			</div>
		</div>
	);

}

export default Widget;