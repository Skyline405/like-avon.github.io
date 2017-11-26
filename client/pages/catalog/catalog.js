import React from 'react';

import Page from '../../components/page/page';
import Slider from '../../components/slider/slider';

const imgPlaceholderUrl = 'http://lorempixel.com/1920/1200/';

const cats = ['cats', 'city', 'food', 'people', 'nature', 'sport', 'transport'];

let srcList = new Array(10).fill(imgPlaceholderUrl).map( (src, i) => src + cats[i % cats.length] );

export default () => (
	<Page title="Каталог №16">

		<Slider className="mt-2" srcList={[
			//'http://like-avon.loc/catalogs/16_017/Page_00001.jpg',
			...srcList
		]} />

	</Page>
);