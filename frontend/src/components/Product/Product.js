import React from "react";
import './Product.css';

export default class product extends React.Component {
	render() {
		return (
			<div className="productContainer">
				<img src={"https://picsum.photos/200"} alt="product" className="productImg"></img>
				<div className="productName">
					{this.props.name}
				</div>
				<div className="productDesc">
					{this.props.desc}
				</div>
				<div className="productCTA">
					Go to product
				</div>
			</div>
		)
	}
}
