import React from "react";

import './Home.css';

import HomeImage from './images/temporary-background.jpg';

export default class Home extends React.Component {
	render() {
		return (
			<>
				<div className="headingContainer lightBlue-background">
					<h1>Home</h1>
				</div>
				<div className="genericContainer">
					<p>
						Proident et non ullamco occaecat do pariatur reprehenderit et anim deserunt. 
						Et laborum consectetur et pariatur tempor labore duis enim nostrud non laboris 
						duis. In proident adipisicing non do aliquip fugiat nisi magna. Sint laboris 
						consectetur eu sit enim eiusmod ad officia velit eiusmod 
						officia magna.<br></br><br></br>

						Id quis et minim pariatur. Lorem laborum pariatur duis proident. Elit eu ex 
						culpa Lorem dolore pariatur nostrud. Quis irure consequat aute cupidatat aliqua 
						aliquip officia deserunt voluptate culpa laborum. Ad in esse nisi culpa sit 
						consectetur aliquip sit aute culpa.<br></br><br></br>

						Esse ex elit ad voluptate non laborum eu proident. Quis qui anim ipsum proident. 
						Quis anim culpa do laborum proident sunt consectetur ut. Irure voluptate nostrud 
						irure culpa voluptate duis amet ad laboris esse nulla do non.<br></br><br></br>

						Duis velit non est Lorem culpa in excepteur. Culpa duis laborum velit eiusmod 
						occaecat aliquip laboris dolor. Anim qui pariatur commodo ex id magna dolore 
						anim sunt eu exercitation eiusmod exercitation. Enim cupidatat cillum Lorem sit 
						deserunt consectetur culpa ut sit officia non est aute. Occaecat qui mollit 
						exercitation esse ut deserunt consequat ad mollit amet ex nisi. Aliqua consectetur 
						sunt velit incididunt ex sunt.<br></br><br></br>
					</p>

				</div>
				<div className="genericImageContainer halfImageContainer">
					<img src={HomeImage} alt="Logo" />
				</div>
				<div className="genericContainer">
					<p>
						Proident et non ullamco occaecat do pariatur reprehenderit et anim deserunt. 
						Et laborum consectetur et pariatur tempor labore duis enim nostrud non laboris 
						duis. In proident adipisicing non do aliquip fugiat nisi magna. Sint laboris 
						consectetur eu sit enim eiusmod ad officia velit eiusmod 
						officia magna.<br></br><br></br>

						Id quis et minim pariatur. Lorem laborum pariatur duis proident. Elit eu ex 
						culpa Lorem dolore pariatur nostrud. Quis irure consequat aute cupidatat aliqua 
						aliquip officia deserunt voluptate culpa laborum. Ad in esse nisi culpa sit 
						consectetur aliquip sit aute culpa.<br></br><br></br>

						Ullamco cupidatat veniam laborum dolor quis voluptate exercitation ipsum sint. 
						Adipisicing voluptate sit et aliquip. Tempor nisi voluptate eu elit. Dolor non 
						non enim qui nostrud enim ullamco cillum.<br></br><br></br>

						Esse ex elit ad voluptate non laborum eu proident. Quis qui anim ipsum proident. 
						Quis anim culpa do laborum proident sunt consectetur ut. Irure voluptate nostrud 
						irure culpa voluptate duis amet ad laboris esse nulla do non.<br></br><br></br>

						Duis velit non est Lorem culpa in excepteur. Culpa duis laborum velit eiusmod 
						occaecat aliquip laboris dolor. Anim qui pariatur commodo ex id magna dolore 
						anim sunt eu exercitation eiusmod exercitation. Enim cupidatat cillum Lorem sit 
						deserunt consectetur culpa ut sit officia non est aute. Occaecat qui mollit 
						exercitation esse ut deserunt consequat ad mollit amet ex nisi. Aliqua consectetur 
						sunt velit incididunt ex sunt.<br></br><br></br>
					</p>

				</div>

				{/* <div className="genericImageContainer fullImageContainer">
					<img src={HomeImage} alt="Logo" />
				</div> */}

				<div className="genericContainer blogContainer">
					<h1>Posts</h1>
					<p>
						Proident et non ullamco occaecat do pariatur reprehenderit et anim deserunt. 
						Et laborum consectetur et pariatur tempor labore duis enim nostrud non laboris 
						duis. In proident adipisicing non do aliquip fugiat nisi magna. Sint laboris 
						consectetur eu sit enim eiusmod ad officia velit eiusmod 
						officia magna.<br></br><br></br>

						Id quis et minim pariatur. Lorem laborum pariatur duis proident. Elit eu ex 
						culpa Lorem dolore pariatur nostrud. Quis irure consequat aute cupidatat aliqua 
						aliquip officia deserunt voluptate culpa laborum. Ad in esse nisi culpa sit 
						consectetur aliquip sit aute culpa.<br></br><br></br>

						Ullamco cupidatat veniam laborum dolor quis voluptate exercitation ipsum sint. 
						Adipisicing voluptate sit et aliquip. Tempor nisi voluptate eu elit. Dolor non 
						non enim qui nostrud enim ullamco cillum.<br></br><br></br>

						Esse ex elit ad voluptate non laborum eu proident. Quis qui anim ipsum proident. 
						Quis anim culpa do laborum proident sunt consectetur ut. Irure voluptate nostrud 
						irure culpa voluptate duis amet ad laboris esse nulla do non.<br></br><br></br>

						Duis velit non est Lorem culpa in excepteur. Culpa duis laborum velit eiusmod 
						occaecat aliquip laboris dolor. Anim qui pariatur commodo ex id magna dolore 
						anim sunt eu exercitation eiusmod exercitation. Enim cupidatat cillum Lorem sit 
						deserunt consectetur culpa ut sit officia non est aute. Occaecat qui mollit 
						exercitation esse ut deserunt consequat ad mollit amet ex nisi. Aliqua consectetur 
						sunt velit incididunt ex sunt.<br></br><br></br>
					</p>
				</div>
			</>
		)
	}
}
