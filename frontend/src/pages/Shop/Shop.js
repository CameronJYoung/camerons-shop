import React from "react";

import '../page.css';
import '../theme.css';
import './Shop.css';

import Products from '../../components/Products/Products';
import Categories from '../../components/Categories/Categories';

export default class Shop extends React.Component {
	render() {
		return (
			<div className="pageContainer">
				<div className="pageTitleContainer">
					<h1>Shop</h1>
				</div>
				<Categories></Categories>
				<Products></Products>
			</div>
		)
	}
}
