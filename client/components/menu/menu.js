import React from 'react';
import { NavLink } from 'react-router-dom';

import 'bootstrap/js/dist/dropdown';

import './menu.scss';

export default ({ menuItems, className }) => (
	<div>
		<ul className="navbar-nav mr-auto d-lg-none" data-toggle="collapse" data-target="#navbarSupportedContent">
			{createItems(menuItems, true)}
		</ul>
		<ul className="navbar-nav mr-auto d-none d-lg-flex">
			{createItems(menuItems, true)}
		</ul>
	</div>
);


const createItems = (menuItems, hasExact) => {
	let exact = !!hasExact;

	return menuItems.map( (item, i) => {
		let button = null;

		if (item.items) {
			button = <li className="nav-item dropdown" key={i}>
				{createDropDown(item)}
				{createDropDownBody(item.items)}
			</li>;
		} else if (item.path) {
			button = <li className="nav-item" key={i}>
				{createNavLink(item, exact)}
			</li>;
			exact = false;
		} else {
			button = <li className="nav-item" key={i}>
				{createLink(item)}
			</li>;
		}

		return button;
	});
};

const createNavLink = (item, exact) => <NavLink className="nav-link pl-3 pl-lg-2" to={item.path} exact={exact}>
	{item.name}
</NavLink>;

const createLink = (item) => <a className="nav-link pl-3 pl-lg-2" href={item.href} target="_blank">
	{item.name}
</a>;

const createDropDown = (item) => <a className="nav-link pl-3 pl-lg-2 dropdown-toggle" href="#" data-toggle="dropdown">
	{item.name}
</a>;

const createDropDownBody = (items) => <ul className="dropdown-menu bg-dark-t">
	{createItems(items)}
</ul>;