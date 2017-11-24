import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
	<div className="container min-h-60vh my-4">
		<div className="row min-h-60vh">
			<div className="col-md-6 m-auto bg-white-t p-4 page-shadow">
				<div className="text-center">
					<h2 className="text-danger">Твой путь к красоте!</h2>
					<Link className="btn btn-danger btn-lg m-2 mt-5" to="/why_avon">Почему Avon?</Link>
				</div>
			</div>
		</div>
	</div>
);