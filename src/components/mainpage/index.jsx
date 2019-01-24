import React from "react";
import logo from "../../logo.png";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faHeart } from "@fortawesome/free-solid-svg-icons";

export default class MainPage extends React.Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>MyInsta</h1>
				</header>
				<div className="insta-wall">
					<div className="insta-wall-item">
						<img
							className="image-container"
							alt=""
							src="https://media-cdn.tripadvisor.com/media/photo-s/09/92/70/d1/club-hotel-turan-prince.jpg"
						/>
						<div className="bar-container">
							<FontAwesomeIcon icon={faThumbsUp} size="2x" className="like" />
							{"(5)"}
							<span className="separator" />
							<FontAwesomeIcon icon={faHeart} size="2x" className="favorite" />
						</div>
					</div>
					<div className="insta-wall-item">
						<img
							className="image-container"
							alt=""
							src="https://media-cdn.tripadvisor.com/media/photo-s/09/92/73/8c/mini-zoo.jpg"
						/>
						<div className="bar-container">
							<FontAwesomeIcon icon={faThumbsUp} size="2x" className="like" />
							{"(5)"}
							<span className="separator" />
							<FontAwesomeIcon icon={faHeart} size="2x" className="favorite" />
						</div>
					</div>
					<div className="insta-wall-item">
						<img
							className="image-container"
							alt=""
							src="https://media-cdn.tripadvisor.com/media/photo-s/09/92/84/5a/aquapark.jpg"
						/>
						<div className="bar-container">
							<FontAwesomeIcon icon={faThumbsUp} size="2x" className="like" />
							{"(5)"}
							<span className="separator" />
							<FontAwesomeIcon icon={faHeart} size="2x" className="favorite" />
						</div>
					</div>
					<div className="insta-wall-item">
						<img
							className="image-container"
							alt=""
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx2I-MH7Ncxsp7ivUhvB7t5gZ5jRtX-zL_5xbHH9UCFybMTOktQA"
						/>
						<div className="bar-container">
							<FontAwesomeIcon icon={faThumbsUp} size="2x" className="like" />
							{"(5)"}
							<span className="separator" />
							<FontAwesomeIcon icon={faHeart} size="2x" className="favorite selected" />
						</div>
					</div>
					<div className="insta-wall-item">
						<img
							className="image-container"
							alt=""
							src="https://media-cdn.tripadvisor.com/media/photo-s/09/92/73/8a/mini-zoo.jpg"
						/>
						<div className="bar-container">
							<FontAwesomeIcon icon={faThumbsUp} size="2x" className="like" />
							{"(5)"}
							<span className="separator" />
							<FontAwesomeIcon icon={faHeart} size="2x" className="favorite" />
						</div>
					</div>
					<div className="insta-wall-item">
						<img
							className="image-container"
							alt=""
							src="http://krontour.ro/wp-content/gallery/club-turan-prince-world-5/2.jpg"
						/>
						<div className="bar-container">
							<FontAwesomeIcon icon={faThumbsUp} size="2x" className="like" />
							{"(5)"}
							<span className="separator" />
							<FontAwesomeIcon icon={faHeart} size="2x" className="favorite selected" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
