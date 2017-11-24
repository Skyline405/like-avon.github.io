import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import './menu.scss';

const createItems = (menuItems) => {
	return menuItems.map( (item, i) => {
		if (item.path) {
			return <Link className="nav-item nav-link pl-3 pl-lg-2" key={i} to={item.path} exact={i === 0}>{item.name}</Link>;
		}
		return <a className="nav-item nav-link pl-3 pl-lg-2" key={i} href={item.href} target="_blank">{item.name}</a>
	});
};

export default ({ menuItems, className }) => (
	<div>
		<ul className="navbar-nav mr-auto d-lg-none" data-toggle="collapse" data-target="#navbarSupportedContent">
			{createItems(menuItems)}
		</ul>
		<ul className="navbar-nav mr-auto d-none d-lg-flex">
			{createItems(menuItems)}
		</ul>
	</div>
);