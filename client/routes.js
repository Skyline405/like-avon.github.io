import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './components/menu/menu';
import Home from './pages/home/home';
import About from './pages/about/about';

export default () => (
	<Router>
		<div>
			<Menu/>
			<Route exact path='/' component={Home} />
			<Route path='/about' component={About} />
		</div>
	</Router>
);