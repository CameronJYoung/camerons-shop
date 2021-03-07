import React from "react";
import {Link} from "react-router-dom";

export default class LoggedInNav extends React.Component {
	render() {
		return (
			<>
				<li>
					<Link className="dark-text camsMediumGrey-hover" to="/login">
						Log In
					</Link>
				</li>
				<li>
					<Link className="dark-text camsMediumGrey-hover" to="/signup">
						Sign Up
					</Link>
				</li>
			</>
		)
	}
}
