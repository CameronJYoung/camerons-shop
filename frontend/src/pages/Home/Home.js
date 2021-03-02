import React from "react";

import Footer from '../../components/Footer/Footer';
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';

import '../page.css';
import '../theme.css';
import './Home.css';

export default class Home extends React.Component {
	render() {
		return (
			<div className="pageContainer">
				<div className="pageTitleContainer camsLightGrey-bg">
					<h1 className="camsMediumGrey-text">Home</h1>
				</div>
				<div className="genericContentContainer storyContainer">
					<h1>Some Text</h1>
					<p>
						Ullamco sit quis anim tempor eiusmod deserunt velit aute mollit laborum. Incididunt veniam 
						amet in ex ipsum culpa proident fugiat incididunt nisi excepteur officia ipsum labore. Eu 
						<img className="homeStoryIcon" src={"https://dummyimage.com/800x800/000/fff"} alt="story"></img>
						duis reprehenderit in eiusmod duis tempor cillum id laboris in. Nulla aliquip et eu irure 
						est cupidatat nulla et id. Ex tempor velit laboris ex quis cillum exercitation duis amet 
						do labore deserunt nulla. Quis qui do eu aliqua anim laborum labore. Non reprehenderit 
						cupidatat nisi mollit pariatur mollit aliquip duis duis sit deserunt nisi.
						Dolor culpa tempor non ipsum. Ullamco aliqua est do do cillum in nisi minim ullamco fugiat 
						incididunt magna nostrud qui. Adipisicing elit occaecat aute officia dolor. Fugiat 
						incididunt elit laborum ex excepteur laborum officia esse pariatur Lorem.
						Ullamco incididunt nulla elit elit enim Lorem laboris. Ad officia in est magna consequat 
						irure. Lorem pariatur adipisicing nulla eu incididunt id cillum ullamco dolore commodo 
						cillum. Dolore Lorem tempor ex est pariatur magna cillum aliquip id duis labore. Pariatur 
						fugiat ut ea aute ipsum officia. Magna fugiat reprehenderit nostrud aute non nisi cupidatat 
						incididunt exercitation aliqua ea fugiat. Sit enim cillum in velit cillum duis non nulla 
						nostrud cillum dolore. Quis qui do eu aliqua anim laborum labore. Non reprehenderit 
						cupidatat nisi mollit pariatur mollit aliquip duis duis sit deserunt nisi.
						Dolor culpa tempor non ipsum.
					</p>
				</div>
				<div className="genericContentContainer postsContainer">
					<h1 className="camsMediumGrey-text">Posts</h1>
					<div className="postCard">
						<img className="postCardThumb" src={"https://dummyimage.com/400x400/000/fff"} alt="post thumbnail"></img>
						<div className="postInfoContainer">
							<h1>Name of Post - Name of Writer</h1>
							<p>Excepteur sint ex qui adipisicing nostrud laborum nulla voluptate irure esse enim. Sint et deserunt velit proident do est sit sint ex sint. Commodo cillum reprehenderit ullamco et Lorem. Occaecat sint labore anim sunt sit fugiat ea ad pariatur cupidatat sint. Reprehenderit eiusmod ad sint voluptate labore incididunt irure. Quis in ea qui Lorem cillum amet. Duis voluptate exercitation exercitation pariatur qui proident tempor non nulla cillum.</p>
							<p className="callToAction">Go to post</p>
						</div>
					</div>
					<div className="postCard">
						<img className="postCardThumb" src={"https://dummyimage.com/400x400/000/fff"} alt="post thumbnail"></img>
						<div className="postInfoContainer">
							<h1>Name of Post - Name of Writer</h1>
							<p>Excepteur sint ex qui adipisicing nostrud laborum nulla voluptate irure esse enim. Sint et deserunt velit proident do est sit sint ex sint. Commodo cillum reprehenderit ullamco et Lorem. Occaecat sint labore anim sunt sit fugiat ea ad pariatur cupidatat sint. Reprehenderit eiusmod ad sint voluptate labore incididunt irure. Quis in ea qui Lorem cillum amet. Duis voluptate exercitation exercitation pariatur qui proident tempor non nulla cillum.</p>
							<p className="callToAction">Go to post</p>
						</div>
					</div>
					<div className="postCard">
						<img className="postCardThumb" src={"https://dummyimage.com/400x400/000/fff"} alt="post thumbnail"></img>
						<div className="postInfoContainer">
							<h1>Name of Post - Name of Writer</h1>
							<p>Excepteur sint ex qui adipisicing nostrud laborum nulla voluptate irure esse enim. Sint et deserunt velit proident do est sit sint ex sint. Commodo cillum reprehenderit ullamco et Lorem. Occaecat sint labore anim sunt sit fugiat ea ad pariatur cupidatat sint. Reprehenderit eiusmod ad sint voluptate labore incididunt irure. Quis in ea qui Lorem cillum amet. Duis voluptate exercitation exercitation pariatur qui proident tempor non nulla cillum.</p>
							<p className="callToAction">Go to post</p>
						</div>
					</div>
					<div className="postCard">
						<img className="postCardThumb" src={"https://dummyimage.com/400x400/000/fff"} alt="post thumbnail"></img>
						<div className="postInfoContainer">
							<h1>Name of Post - Name of Writer</h1>
							<p>Excepteur sint ex qui adipisicing nostrud laborum nulla voluptate irure esse enim. Sint et deserunt velit proident do est sit sint ex sint. Commodo cillum reprehenderit ullamco et Lorem. Occaecat sint labore anim sunt sit fugiat ea ad pariatur cupidatat sint. Reprehenderit eiusmod ad sint voluptate labore incididunt irure. Quis in ea qui Lorem cillum amet. Duis voluptate exercitation exercitation pariatur qui proident tempor non nulla cillum.</p>
							<p className="callToAction">Go to post</p>
						</div>
					</div>
					<div className="postCard">
						<img className="postCardThumb" src={"https://dummyimage.com/400x400/000/fff"} alt="post thumbnail"></img>
						<div className="postInfoContainer">
							<h1>Name of Post - Name of Writer</h1>
							<p>Excepteur sint ex qui adipisicing nostrud laborum nulla voluptate irure esse enim. Sint et deserunt velit proident do est sit sint ex sint. Commodo cillum reprehenderit ullamco et Lorem. Occaecat sint labore anim sunt sit fugiat ea ad pariatur cupidatat sint. Reprehenderit eiusmod ad sint voluptate labore incididunt irure. Quis in ea qui Lorem cillum amet. Duis voluptate exercitation exercitation pariatur qui proident tempor non nulla cillum.</p>
							<p className="callToAction">Go to post</p>
						</div>
					</div>
					<div className="postCard">
						<img className="postCardThumb" src={"https://dummyimage.com/400x400/000/fff"} alt="post thumbnail"></img>
						<div className="postInfoContainer">
							<h1>Name of Post - Name of Writer</h1>
							<p>Excepteur sint ex qui adipisicing nostrud laborum nulla voluptate irure esse enim. Sint et deserunt velit proident do est sit sint ex sint. Commodo cillum reprehenderit ullamco et Lorem. Occaecat sint labore anim sunt sit fugiat ea ad pariatur cupidatat sint. Reprehenderit eiusmod ad sint voluptate labore incididunt irure. Quis in ea qui Lorem cillum amet. Duis voluptate exercitation exercitation pariatur qui proident tempor non nulla cillum.</p>
							<p className="callToAction">Go to post</p>
						</div>
					</div>
					<div className="postCard">
						<img className="postCardThumb" src={"https://dummyimage.com/400x400/000/fff"} alt="post thumbnail"></img>
						<div className="postInfoContainer">
							<h1>Name of Post - Name of Writer</h1>
							<p>Excepteur sint ex qui adipisicing nostrud laborum nulla voluptate irure esse enim. Sint et deserunt velit proident do est sit sint ex sint. Commodo cillum reprehenderit ullamco et Lorem. Occaecat sint labore anim sunt sit fugiat ea ad pariatur cupidatat sint. Reprehenderit eiusmod ad sint voluptate labore incididunt irure. Quis in ea qui Lorem cillum amet. Duis voluptate exercitation exercitation pariatur qui proident tempor non nulla cillum.</p>
							<p className="callToAction">Go to post</p>
						</div>
					</div>
					<div className="postCard">
						<img className="postCardThumb" src={"https://dummyimage.com/400x400/000/fff"} alt="post thumbnail"></img>
						<div className="postInfoContainer">
							<h1>Name of Post - Name of Writer</h1>
							<p>Excepteur sint ex qui adipisicing nostrud laborum nulla voluptate irure esse enim. Sint et deserunt velit proident do est sit sint ex sint. Commodo cillum reprehenderit ullamco et Lorem. Occaecat sint labore anim sunt sit fugiat ea ad pariatur cupidatat sint. Reprehenderit eiusmod ad sint voluptate labore incididunt irure. Quis in ea qui Lorem cillum amet. Duis voluptate exercitation exercitation pariatur qui proident tempor non nulla cillum.</p>
							<p className="callToAction">Go to post</p>
						</div>
					</div>
					<div className="postCard">
						<img className="postCardThumb" src={"https://dummyimage.com/400x400/000/fff"} alt="post thumbnail"></img>
						<div className="postInfoContainer">
							<h1>Name of Post - Name of Writer</h1>
							<p>Excepteur sint ex qui adipisicing nostrud laborum nulla voluptate irure esse enim. Sint et deserunt velit proident do est sit sint ex sint. Commodo cillum reprehenderit ullamco et Lorem. Occaecat sint labore anim sunt sit fugiat ea ad pariatur cupidatat sint. Reprehenderit eiusmod ad sint voluptate labore incididunt irure. Quis in ea qui Lorem cillum amet. Duis voluptate exercitation exercitation pariatur qui proident tempor non nulla cillum.</p>
							<p className="callToAction">Go to post</p>
						</div>
					</div>
					<div className="postCard">
						<img className="postCardThumb" src={"https://dummyimage.com/400x400/000/fff"} alt="post thumbnail"></img>
						<div className="postInfoContainer">
							<h1>Name of Post - Name of Writer</h1>
							<p>Excepteur sint ex qui adipisicing nostrud laborum nulla voluptate irure esse enim. Sint et deserunt velit proident do est sit sint ex sint. Commodo cillum reprehenderit ullamco et Lorem. Occaecat sint labore anim sunt sit fugiat ea ad pariatur cupidatat sint. Reprehenderit eiusmod ad sint voluptate labore incididunt irure. Quis in ea qui Lorem cillum amet. Duis voluptate exercitation exercitation pariatur qui proident tempor non nulla cillum.</p>
							<p className="callToAction">Go to post</p>
						</div>
					</div>
					<div className="postCard">
						<img className="postCardThumb" src={"https://dummyimage.com/400x400/000/fff"} alt="post thumbnail"></img>
						<div className="postInfoContainer">
							<h1>Name of Post - Name of Writer</h1>
							<p>Excepteur sint ex qui adipisicing nostrud laborum nulla voluptate irure esse enim. Sint et deserunt velit proident do est sit sint ex sint. Commodo cillum reprehenderit ullamco et Lorem. Occaecat sint labore anim sunt sit fugiat ea ad pariatur cupidatat sint. Reprehenderit eiusmod ad sint voluptate labore incididunt irure. Quis in ea qui Lorem cillum amet. Duis voluptate exercitation exercitation pariatur qui proident tempor non nulla cillum.</p>
							<p className="callToAction">Go to post</p>
						</div>
					</div>
				</div>

				<Footer></Footer>
			</div>
		)
	}
}
