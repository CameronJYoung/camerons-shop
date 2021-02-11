import React from "react";
import {Link} from "react-router-dom";

import './Header.css';
import BasketImg from './imgs/basket-icon.png'

export default class Header extends React.Component {
	render() {
		return (
			<header className="mainHeader">
				<div className="mainHeaderIcon">
					<img src={"https://dummyimage.com/500x200/000/fff"} alt="logo"></img>
				</div>
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
							<Link to="/account">
								Account
							</Link>
						</li>
					</ul>
				</nav>
				<div className="mainBasketIcon">
					<img src={BasketImg} alt="basket-icon"></img>
				</div>
			</header>
		)
	}
}
