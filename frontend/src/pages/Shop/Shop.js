import React from "react";

import '../pages.css';
import './Shop.css';

import Products from '../../components/Products/Products';
import Categories from '../../components/Categories/Categories';

export default class Shop extends React.Component {
	render() {
		return (
			<div className="pageContainer">
				<Categories></Categories>
				<Products></Products>
			</div>
		)
	}
}
