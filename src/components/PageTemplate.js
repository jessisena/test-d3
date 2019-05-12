import React from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const PageTemplate = ({title, styles, children}) =>
	<div className="page">
		<Header title={title}/>
		<div style={{textAlign: "center", padding: "4rem"}}>
			{children}
		</div>
			
		<Footer/>
	</div>

export default PageTemplate;
 