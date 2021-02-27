import React from "react";
import {Link} from "react-router-dom";

import '../theme.css';

import './Nav.css';

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="sideNav starCommandBlue-bg">
				<header className="headerLogo">
					<img src={"https://dummyimage.com/500x200/000/fff"} alt="logo"></img>
				</header>
				<ul className="sideNavList">
					<li>
						<Link className="darkLava-text uranianBlue-hover" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="darkLava-text uranianBlue-hover" to="/media">
							Media
						</Link>
					</li>
					<li>
						<Link className="darkLava-text uranianBlue-hover" to="/shop">
							Shop
						</Link>
					</li>
					<li>
						<Link className="darkLava-text uranianBlue-hover" to="/account">
							Account
						</Link>
						<ul>
							<li>
								<Link className="darkLava-text uranianBlue-hover" to="/account">
									Basket
								</Link>
							</li>
							<li>
								<Link className="darkLava-text uranianBlue-hover" to="/account">
									Orders
								</Link>
							</li>
							<li>
								<Link className="darkLava-text uranianBlue-hover" to="/account">
									Settings
								</Link>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		)
	}
}
