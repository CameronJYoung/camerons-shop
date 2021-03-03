import React from "react";
import {Link} from "react-router-dom";

import '../theme.css';

import navBurger from './imgs/nav-burger.svg'
import navCross from './imgs/nav-cross.svg'
import './Nav.css';

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="sideNav camsMintGreen-bg">
				<header className="headerLogo">
					<img src={"https://dummyimage.com/500x200/000/fff"} alt="logo"></img>
				</header>
				<div className="mobileNavBtn">
					<img className="navBtn navClose" src={navCross} alt="navigation close button icon"></img>
					<img className="navBtn navOpen" src={navBurger} alt="navigation open button icon"></img>
				</div>
				<ul className="sideNavList">
					<li>
						<Link className="dark-text camsMediumGrey-hover" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="dark-text camsMediumGrey-hover" to="/media">
							Media
						</Link>
					</li>
					<li>
						<Link className="dark-text camsMediumGrey-hover" to="/shop">
							Shop
						</Link>
					</li>
					<li>
						<Link className="dark-text camsMediumGrey-hover" to="/account">
							Account
						</Link>
						<ul>
							<li>
								<Link className="dark-text camsMediumGrey-hover" to="/account">
									Basket
								</Link>
							</li>
							<li>
								<Link className="dark-text camsMediumGrey-hover" to="/account">
									Orders
								</Link>
							</li>
							<li>
								<Link className="dark-text camsMediumGrey-hover" to="/account">
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
