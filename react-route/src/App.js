import React, {Component} from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Login from './Login';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Nav />
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />
				</div>
			</BrowserRouter>
		);
	}
};

export default App;