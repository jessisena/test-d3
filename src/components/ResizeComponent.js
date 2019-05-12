import React from "react";

const ResizeComponent = ComposedComponent =>

	class ResizeComponent extends React.PureComponent {

		constructor(props) {

			super(props);
			this.state = {
				width: window.innerWidth
			};

			window.addEventListener("resize", this.handleWindowSizeChange);

		}

         handleWindowSizeChange = () => this.setState({ width: window.innerWidth });

         componentWillUnmount = () => window.removeEventListener("resize", this.handleWindowSizeChange);

        render = () => <ComposedComponent {...this.state} {...this.props} >{this.props.children}</ComposedComponent>;

	};

export default ResizeComponent;