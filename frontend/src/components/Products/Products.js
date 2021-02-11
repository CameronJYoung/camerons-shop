import React from "react";
import './Products.css';

import Product from '../../components/Product/Product';

export default class Products extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
		}
	}

	componentDidMount() {
		// Simple GET request using fetch
		fetch('https://api.mocki.io/v1/ae4bdbce')
			.then((response) => response.json())
			.then(itemList => {
				this.setState({
					items: itemList,
					isLoaded: true
				});
			});
	}
	render() {

		var {isLoaded, items} = this.state;

		if (!isLoaded) {
			return (
				<div className="ProductSection">
					<div>Loading...</div>
				</div>
			)
		} else {
			return (
				<div className="ProductSection">
					{
						items.map(i => {
							return <Product key={i.id} name={i.name} desc={i.desc}></Product>
						})
					}			
				</div>
			)
		}	
	}
}