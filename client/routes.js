import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import Home from './pages/home/home';
import Catalog from './pages/catalog/catalog';
import Register from './pages/register/register';
import About from './pages/about/about';
import Contacts from './pages/contacts/contacts';
import NoMatch from './pages/404/404';

const menu = [
	// { path: '/', name: 'Главная', exact: true },
	{ path: '/catalog', name: 'Каталог онлайн' },
	{ name: 'Начать зарабатывать', items: [
		{ path: '/business', name: 'Бизнес с Avon' },
		{ path: '/register', name: 'Стать представителем' },
	] },
	{ href: 'https://my.avon.ru/magazin/marina54nsk', name: 'Магазин' },
	{ path: '/contacts', name: 'Контакты' },
	{ name: 'Сотрудникам', items: [
		{ path: '/represents', name: 'Представителю' },
		{ path: '/coords', name: 'Координатору' },
	] },
];

export default () =>
<Router>
	<div>
		<Header menuItems={menu} />
		<div>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/catalog' component={Catalog} />
				<Route path='/register' component={Register} />
				<Route path='/about' component={About} />
				<Route path='/contacts' component={Contacts} />
				<Route component={NoMatch} />
			</Switch>
		</div>
		<Footer/>
	</div>
</Router>;