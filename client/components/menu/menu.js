import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import './menu.scss';

export default class Menu extends React.Component {
	render() {
		return (
			<ul className="navbar-nav mr-auto" data-toggle="collapse" data-target="#navbarSupportedContent">
				<Link className="nav-item nav-link" to="/" exact>Главная</Link>
				<Link className="nav-item nav-link" to="/catalog">Каталог онлайн</Link>
				<Link className="nav-item nav-link" to="/start-earn">Начать зарабатывать</Link>
				<a className="nav-item nav-link" href="https://my.avon.ru/magazin/marina54nsk" target="_blank">Магазин</a>
				<Link className="nav-item nav-link" to="/contacts">Контакты</Link>
				<Link className="nav-item nav-link" to="/for-employers">Для сотрудников</Link>
			</ul>
		);
	}
}