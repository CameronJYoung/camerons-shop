import React from "react";

import './Navigation.css';

import {Link} from 'react-router-dom';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isNavToggled: false}

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        console.log(1);
        this.setState(state => ({
            isNavToggled: !state.isNavToggled
        }));  
    }

	render() {
		return (
            <header className="mainHeader">
                <button onClick={this.toggleNav} className="toggleButton">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <img className="headerLogo" src={'https://dummyimage.com/500x200/000/fff&text=(500x200)/2'} alt="Logo" />
                <nav className="mainNav">
                    <ul className={this.state.isNavToggled ? 'active' : null}>
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