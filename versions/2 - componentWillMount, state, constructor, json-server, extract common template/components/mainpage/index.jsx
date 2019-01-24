import React from "react";
import logo from "../../logo.png";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faHeart } from "@fortawesome/free-solid-svg-icons";
import { ApiHost } from './../../config';

export default class MainPage extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			photos: []
		}
	}
	
	componentWillMount() {
		fetch(ApiHost)
			.then(response => response.json())
			.then((result) =>this.setState({photos: result}));
	}

	renderItems = () => {
		return this.state.photos.map((item) => (
			<div className="insta-wall-item">
				<img
					className="image-container"
					alt={item.title}
					src={item.url}
				/>
				<div className="bar-container">
					<FontAwesomeIcon icon={faThumbsUp} size="2x" className="like" />
					({item.likes})
					<span className="separator" />
					<FontAwesomeIcon icon={faHeart} size="2x" className={'favorite' + (item.isFavortite ? ' selected' : '')} />
				</div>
			</div>
		));
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>MyInsta</h1>
				</header>
				<div className="insta-wall">
					{this.renderItems()}
				</div>
			</div>
		);
	}
}
