import React from 'react';

export default ({ title, children }) => (
	<div className="container page-bg my-4 p-4">
		<div className="row">
			<div className="col">
				<h2 className="sm text-danger">{title}</h2>
			</div>
		</div>
		<div className="row">
			<div className="col">
				{children}
			</div>
		</div>
	</div>
);