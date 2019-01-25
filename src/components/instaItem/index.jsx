import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faHeart, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { update, remove } from "../../services/InstaService";

export default class InstaItem extends React.Component {
	
	increaseLikeCounter = () => {
		const item = {
			id: this.props.id,
			title: this.props.title,
			likeCounter: this.props.likeCounter + 1, 
			isFavorite: this.props.isFavorite,
			url: this.props.url
		}

		update(item).then(() => this.props.refresh());
	}

	handleFavorite = () => {
		const item = {
			id: this.props.id,
			title: this.props.title,
			likeCounter: this.props.likeCounter, 
			isFavorite: !this.props.isFavorite,
			url: this.props.url
		}

		update(item).then(() => this.props.refresh());
	}

	deletePhoto = () => {
		remove(this.props.id).then(() => this.props.refresh());
	}

	render() {
		return (
			<div className="insta-wall-item">
				<div className="image-container">
					<div className="delete">
						<FontAwesomeIcon  icon={faWindowClose} size="lg" className="cancel" onClick={this.deletePhoto} />
					</div>
					<img
						alt={this.props.title}
						src={this.props.url}
						title={this.props.title}
					/>
				</div>
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
