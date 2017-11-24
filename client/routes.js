import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import About from './pages/about/about';
import NoMatch from './pages/404/404';

export default () => (
	<Router>
		<div>
			<Header/>
			<div>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route component={NoMatch} />
				</Switch>
			</div>
			<Footer/>
		</div>
	</Router>
);