import React from "react";
import "./style.css";
import InstaItem from '../instaItem';

export default class InstaWall extends React.Component {
	renderItems = () => {
		return this.props.content.map((item) => (
			<InstaItem key={item.id} {...item} />
		));
	}


	render() {
		return (
			<div className="insta-wall">
					{this.renderItems()}
			</div>
		);
	}
}
