import React from "react";

import {Link} from 'react-router-dom';

export default class Navigation extends React.Component {
	render() {
		return (
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
		)
	}
}