import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faHeart } from "@fortawesome/free-solid-svg-icons";

export default class InstaItem extends React.Component {
	render() {
		return (
			<div className="insta-wall-item">
				<img
					className="image-container"
					alt={this.props.title}
					src={this.props.url}
				/>
				<div className="bar-container">
					<FontAwesomeIcon icon={faThumbsUp} size="2x" className="like" />
					({this.props.likeCounter})
					<span className="separator" />
					<FontAwesomeIcon icon={faHeart} size="2x" className={'favorite' + (this.props.isFavorite ? ' selected' : '')} />
				</div>
			</div>
		);
	}
}
