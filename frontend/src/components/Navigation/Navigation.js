import React from "react";

import './Navigation.css';

import {Link} from 'react-router-dom';

export default class Navigation extends React.Component {
	render() {
		return (
            <header className="mainHeader">
                <img className="headerLogo" src={'https://dummyimage.com/500x200/000/fff&text=(500x200)/2'} alt="Logo" />
                <a href="#" className="toggleButton">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <nav className="mainNav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>

                        <li>
                            <Link to="/media">Media</Link>
                        </li>

                        <li>
                            <Link to="/account">Account</Link>
                        </li>

                        <li>
                            <Link to="/login">Login</Link>
                        </li>

                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </ul>
                </nav>
            </header>
		)
	}
}