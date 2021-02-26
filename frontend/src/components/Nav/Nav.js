import React from "react";
import {Link} from "react-router-dom";

import './Nav.css';

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="sideNav">
				<header className="headerLogo">
					<img src={"https://dummyimage.com/500x200/000/fff"} alt="logo"></img>
				</header>
				<ul className="sideNavList">
					<li>
						<Link to="/">
							Home
						</Link>
					</li>
					<li>
						<Link to="/media">
							Media
						</Link>
					</li>
					<li>
						<Link to="/shop">
							Shop
						</Link>
					</li>
					<li>
						<Link to="/account">
							Account
						</Link>
						<ul>
							<li>
								<Link to="/account">
									Basket
								</Link>
							</li>
							<li>
								<Link to="/account">
									Orders
								</Link>
							</li>
							<li>
								<Link to="/account">
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
