import React from "react";
import "./style.css";
import { insert } from "../../services/InstaService";

export default class AddPhoto extends React.PureComponent {
	constructor(props){
		super(props);

		this.state = {
			title: undefined,
			url: undefined,
			errorMessage: ""
		}
	}

	handleChange = (event) => {
		const value = event.target.value;
		const name = event.target.name;

		this.setState({
			[name]: value
		});
	}

	addPhoto = () => {
		let showTitleError = this.state.title === undefined || this.state.title === "";
		let showUrlError = this.state.url === undefined || this.state.url === "";
		this.setState({errorMessage: this.getErrorMessage(showTitleError, showUrlError)});

		if(!showTitleError && !showUrlError) {
			const item = {
				title: this.state.title,
				url: this.state.url,
				isFavorite: false,
				likeCounter: 0
			}

			insert(item).then((result) => this.props.refresh());
		}
	}

	getErrorMessage = (showTitleError, showUrlError) => {
		let errorMessage = "";
		if(showTitleError) {
			errorMessage += "Title required. ";
		}

		if(showUrlError) {
			errorMessage += "Url required. ";
		}

		return errorMessage;
	}

	render() {
		return (
			<div className="insta-action">
				<p className="error">{this.state.errorMessage}</p>
				<div className="form-item">
					<label>Title</label>
					<input name="title" onChange={this.handleChange}/>
				</div>
				<div className="form-item">
					<label>Url</label>
					<input name="url" onChange={this.handleChange}/>
				</div>
				
				<input type="submit" onClick={this.addPhoto} value="Add photo" />
			</div>
		);
	}
}
