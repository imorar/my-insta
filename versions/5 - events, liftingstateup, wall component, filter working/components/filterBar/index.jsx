import React from "react";
import "./style.css";
import { FilterType } from "../../config";

export default class FilterBar extends React.Component {
	render() {
		return (
			<div className="insta-filter">
				<span 
					onClick={() => this.props.handleFilters(FilterType.All)}
					className={this.props.selected === FilterType.All ? 'selected' : ''}>
					All
				</span>
				<span 
					onClick={() => this.props.handleFilters(FilterType.Favorites)}
					className={this.props.selected === FilterType.Favorites ? 'selected' : ''}>
					Favorites ({this.props.favoriteCounter})
				</span>
			</div>
		);
	}
}
