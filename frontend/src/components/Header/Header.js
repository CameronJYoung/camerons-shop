import React from "react";
import {Link} from "react-router-dom";

import './Header.css';

export default class Header extends React.Component {
	render() {
		return (
			<header className="mainHeader">
				<nav className="mainHeaderNav">
					<ul>
						<li>
							<Link to="/">
								Home
							</Link>
						</li>

						<li>
							<Link to="/shop">
								Shop
							</Link>
						</li>

						<li>
							<Link to="/help">
								Help
							</Link>
						</li>
					</ul>
				</nav>
				<div className="mainHeaderIcon">
					<img src={"https://dummyimage.com/500x200/000/fff"} alt="logo"></img>
				</div>
			</header>
		)
	}
}
