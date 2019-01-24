import React from "react";
import logo from "../../logo.png";
import "./style.css";
import { ApiHost } from '../../config';
import InstaItem from '../instaItem';

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
			//<InstaItem id={item.id} url={item.url} title={item.title} isFavorite={item.isFavorite} likeCounter={item.likeCounter} />
			 <InstaItem key={item.id} {...item} />
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
