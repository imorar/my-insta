import React from "react";
import logo from "../../logo.png";
import "./style.css";
import { FilterType } from '../../config';
import FilterBar from '../filterBar';
import InstaWall from '../instaWall';
import { getAll } from '../../services/InstaService';
import AddPhoto from "../addPhoto";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class MainPage extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			photos: [],
			filterType: FilterType.All,
			needToReload: false,
			showAddArea: false
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
		switch(this.state.filterType){
			default:
			case FilterType.All:
				return this.state.photos;
			case FilterType.Favorites:
				return this.state.photos.filter(item => item.isFavorite).slice();
		}
	}

	reloadData = () => {
		this.setState({needToReload: true, showAddArea: false});
	}

	renderAddForm = () => {
		if(this.state.showAddArea)
			return <AddPhoto refresh={this.reloadData} />
	}

	render() {
		return (
			<div className="App">
				
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>MyInsta</h1>
				</header>
				<div className="insta-add-container">
					<div onClick={() => this.setState({showAddArea: !this.state.showAddArea})}>
						<FontAwesomeIcon icon={faPlusSquare} size="2x" />
					</div>
					{this.renderAddForm()}
				</div>
				
				<FilterBar favoriteCounter={this.getFavoritesCounter()} handleFilters={this.onFilterChange} selected={this.state.filterType} />
				<InstaWall content={this.getWallContent()} reloadData={this.reloadData}/>
			</div>
		);
	}
}
