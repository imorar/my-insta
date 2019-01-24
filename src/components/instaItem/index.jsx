import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faHeart } from "@fortawesome/free-solid-svg-icons";
import { update } from "../../services/InstaService";

export default class InstaItem extends React.Component {
	
	increaseLikeCounter = () => {
		const item = {
			id: this.props.id,
			title: this.props.title,
			likeCounter: this.props.likeCounter + 1, 
			isFavorite: this.props.isFavorite,
			url: this.props.url
		}

		update(item).then((result) => this.props.refresh());
	}

	handleFavorite = () => {
		const item = {
			id: this.props.id,
			title: this.props.title,
			likeCounter: this.props.likeCounter, 
			isFavorite: !this.props.isFavorite,
			url: this.props.url
		}

		update(item).then((result) => this.props.refresh());
	}

	render() {
		return (
			<div className="insta-wall-item">
				<img
					className="image-container"
					alt={this.props.title}
					src={this.props.url}
				/>
				<div className="bar-container">
					<FontAwesomeIcon icon={faThumbsUp} size="2x" className="like" onClick={() => this.increaseLikeCounter()} />
					({this.props.likeCounter})
					<span className="separator" />
					<FontAwesomeIcon 
						icon={faHeart} size="2x"
						className={'favorite' + (this.props.isFavorite ? ' selected' : '')}
						onClick={() => this.handleFavorite()}/>
				</div>
			</div>
		);
	}
}
