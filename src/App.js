import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import './App.css';

import Header from './Components/Header/Header'
import NoticeList from './Components/Notice/NoticeList'

class App extends Component {
	render() {
		return (
			<HashRouter>
				<div className='container'>
					<Header />
					<div className="card-body">
						<Route exact path="/" component={NoticeList} />
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;