import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/util';

import MainMenu from '../menu/menu';

import Logo from './images/logo.png';

import './header.scss';

export default ({ menuItems }) => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark-t">
		<div className="container">
			<Link className="navbar-brand" to="/">
				<img src={Logo} width="80" alt="Like Avon"/>
			</Link>
			<div className="order-lg-2">
				<button className="btn btn-danger mr-2 d-none d-sm-inline-block">Регистрация</button>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
			</div>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<MainMenu menuItems={menuItems} />
			</div>
		</div>
	</nav>
);