import React from 'react';
import { Link } from 'react-router-dom';

import './menu.scss';

export default class Menu extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-4">

					</div>
					<div className="col-md-8">
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
					</div>
				</div>
			</div>
		);
	}
}