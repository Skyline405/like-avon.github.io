import React, { Component } from 'react';

import Page from '../../components/page/page';
import Slider from '../../components/slider/slider';

export default class Catalog extends Component {

	constructor(props) {
		super(props);

		this.state = {
			srcList: []
		};
	}

	componentDidMount() {
		this.getSrcList();
	}

	getSrcList() {
		return $.getJSON('/api/get/catalog/16_2017')
			.then( result  => this.setState({ srcList: result }));
	}

	render() {
		const { srcList } = this.state;

		console.log(srcList);

		return (
			<Page title="Каталог №16">

				<Slider className="mt-2" srcList={srcList} />

			</Page>
		);
	}

};