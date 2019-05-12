import React from "react";
import GridPanel from "./GridPanel/GridPanel";
import UserPanel from "./UserPanel/UserPanel";
import PageTemplate from "./PageTemplate";
import "./App.css";

function App() {

	return (
		<PageTemplate>
			<UserPanel></UserPanel>
			<div class="ui section divider"></div>
			<GridPanel></GridPanel>
		</PageTemplate>
	);

}

export default App;

