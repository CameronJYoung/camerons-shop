import React from "react";
import './Product.css';

export default class product extends React.Component {
	render() {
		return (
			<div className="productContainer">
				<img src={"https://picsum.photos/200"} alt="product" className="productImg"></img>
				<div className="productDesc">
					Integer non libero dapibus, finibus purus nec, tincidunt leo. Morbi vehicula tellus
					sed sagittis euismod. Aenean lobortis lacinia luctus. Cras sit amet varius lorem.
					Etiam tempus orci id eros pellentesque fringilla. Nam eget consectetur odio.
					Praesent ut urna odio. Nunc nulla velit, molestie vitae nisi in, pretium malesuada quam.
				</div>
				<div className="productCTA">
					Go to product
				</div>
			</div>
		)
	}
}
