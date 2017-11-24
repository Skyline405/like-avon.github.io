import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../../components/page/page';

export default () => (
	<Page title="Страница не найдена">

		<div className="text-center my-4 mt-5">
			<h3>404</h3>
			<div className="my-4">Такая страница не существует.</div>
			<div>
				<Link className="btn btn-danger" to="/">На главную</Link>
			</div>
		</div>

	</Page>
);