import React from "react";

export default class LoggedInNav extends React.Component {
	render() {
        const {name} = this.props;

		return (
            <li>
                Welcome Back {name}
            </li>
		)
	}
}
