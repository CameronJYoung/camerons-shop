import React from "react";
import './Products.css';

import Product from '../../components/Product/Product';

export default class Products extends React.Component {
	render() {
		return (
			<div className="ProductSection">
				<Product></Product>
				<Product></Product>
				<Product></Product>
				<Product></Product>
				<Product></Product>
				<Product></Product>
				<Product></Product>
			</div>
		)
	}
}
