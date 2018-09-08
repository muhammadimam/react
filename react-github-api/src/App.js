import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pictures: []
		}
	}

	// Code is invoked after the component is mounted/inserted into the DOM tree.
	componentDidMount() {
		const url = "https://randomuser.me/api?results=500";

		fetch(url)
			.then(res => res.json())
		  .then(res => {
				let pictures = res.results.map((pic) => {
					return (
						<div key={pic.results}>
							<img alt="pictures" src={pic.picture.medium} />
						</div>
					);
				})

				this.setState({
					pictures: pictures
				});
			});
	}

	render() {
		return (
			<div>
				{this.state.pictures}
			</div>
		);
	}
}

export default App;