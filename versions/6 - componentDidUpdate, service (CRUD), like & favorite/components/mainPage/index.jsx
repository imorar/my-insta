import React from "react";
import logo from "../../logo.png";
import "./style.css";
import { FilterType } from '../../config';
import FilterBar from '../filterBar';
import InstaWall from '../instaWall';
import { getAll } from '../../services/InstaService';

export default class MainPage extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			photos: [],
			filterType: FilterType.All,
			needToReload: false
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.needToReload !== this.state.needToReload && this.state.needToReload){
			this.loadData();
		}
	}

	componentWillMount() {
		this.loadData();
	}

	loadData = () => {
		getAll().then((result) =>this.setState({photos: result, needToReload: false}));
	}

	getFavoritesCounter = () => {
		return this.state.photos.filter((item) => (item.isFavorite)).length;
	}

	onFilterChange = (newFilterType) => {
		this.setState({filterType: newFilterType});
	}

	getWallContent = () => {
		let result;
		switch(this.state.filterType){
			default:
			case FilterType.All:
				return this.state.photos;
			case FilterType.Favorites:
				return this.state.photos.filter(item => item.isFavorite).slice();
		}

		return result;
	}

	reloadData = () => {
		this.setState({needToReload: true});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>MyInsta</h1>
				</header>
				<FilterBar favoriteCounter={this.getFavoritesCounter()} handleFilters={this.onFilterChange} selected={this.state.filterType} />
				<InstaWall content={this.getWallContent()} reloadData={this.reloadData}/>
			</div>
		);
	}
}
