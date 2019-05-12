import React from "react";
import { BarChart } from "react-d3-components";

import ResizeComponent from "../ResizeComponent";

const UserPanel = (props) => {

	const data = [
		{
			label: "somethingA",
			values: [{x: "SomethingA", y: 10}, {x: "SomethingB", y: 4}, {x: "SomethingC", y: 3}]
		},
		{
			label: "somethingB",
			values: [{x: "SomethingA", y: 6}, {x: "SomethingB", y: 8}, {x: "SomethingC", y: 5}]
		},
		{
			label: "somethingC",
			values: [{x: "SomethingA", y: 6}, {x: "SomethingB", y: 8}, {x: "SomethingC", y: 5}]
		}
	];
  
	const getWidthChart = (currentWidth) => {

		console.log("getWidthChart");
		const res = parseInt(currentWidth - ((currentWidth*20) / 100 ));
		return res;

	}

	return (
    
		<div class="ui fluid center aligned container">
			<div class="ui raised segments">
				<div class="ui segment">User data</div>
				<div class="ui segment">
					<BarChart
						data={data}
						width={getWidthChart(props.width)}
						height={400}
						margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
				</div>
			</div>
		</div>
	);


}


export default ResizeComponent(UserPanel);