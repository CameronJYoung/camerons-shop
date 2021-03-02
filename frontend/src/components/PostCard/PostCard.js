import React from "react";

import './PostCard.css';

export default class PostCard extends React.Component {
	render() {
		return (
            <div className="postCard">
                <img className="postCardThumb" src={"https://dummyimage.com/600x600/000/fff"} alt="post thumbnail"></img>
                <div className="postInfoContainer">
                    <h1>Name of Post - Name of Writer</h1>
                    <p>Excepteur sint ex qui adipisicing nostrud laborum nulla voluptate irure esse enim. Sint et deserunt velit proident do est sit sint ex sint. Commodo cillum reprehenderit ullamco et Lorem. Occaecat sint labore anim sunt sit fugiat ea ad pariatur cupidatat sint. Reprehenderit eiusmod ad sint voluptate labore incididunt irure. Quis in ea qui Lorem cillum amet. Duis voluptate exercitation exercitation pariatur qui proident tempor non nulla cillum.</p>
                    <p className="callToAction">Go to post</p>
                </div>
            </div>
		)
	}
}
