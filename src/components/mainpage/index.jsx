import React from "react";
import logo from "../../logo.png";
import "./style.css";
import { ApiHost, FilterType } from '../../config';
import FilterBar from '../filterBar';
import InstaWall from '../instaWall';

export default class MainPage extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			photos: [],
			filterType: FilterType.All
		}
	}

	componentWillMount() {
		fetch(ApiHost)
			.then(response => response.json())
			.then((result) =>this.setState({photos: result}));
	}

	getFavoritesCounter = () => {
		return this.state.photos.filter((item) => (item.isFavorite)).length;
	}

	onFilterChange = (newFilterType) => {
		this.setState({filterType: newFilterType});
	}

	getWallContent = () => {
		switch(this.state.filterType){
			case FilterType.All:
				return this.state.photos;
			case FilterType.Favorites:
				return this.state.photos.filter(item => item.isFavorite);
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>MyInsta</h1>
				</header>
				<FilterBar favoriteCounter={this.getFavoritesCounter()} handleFilters={this.onFilterChange} selected={this.state.filterType} />
				<InstaWall content={this.getWallContent()}/>
			</div>
		);
	}
}
