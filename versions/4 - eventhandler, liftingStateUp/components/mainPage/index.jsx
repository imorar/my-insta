import React from "react";
import logo from "../../logo.png";
import "./style.css";
import { ApiHost, FilterType } from '../../config';
import InstaItem from '../instaItem';
import FilterBar from '../filterBar';

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

	renderItems = () => {
		return this.state.photos.map((item) => (
			//<InstaItem id={item.id} url={item.url} title={item.title} isFavorite={item.isFavorite} likeCounter={item.likeCounter} />
			 <InstaItem key={item.id} {...item} />
		));
	}

	getFavoritesCounter = () => {
		return this.state.photos.filter((item) => (item.isFavorite)).length;
	}

	onFilterChange = (newFilterType) => {
		this.setState({filterType: newFilterType});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>MyInsta</h1>
				</header>
				<FilterBar favoriteCounter={this.getFavoritesCounter()} handleFilters={this.onFilterChange} selected={this.state.filterType} />
				<div className="insta-wall">
					{this.renderItems()}
				</div>
			</div>
		);
	}
}
