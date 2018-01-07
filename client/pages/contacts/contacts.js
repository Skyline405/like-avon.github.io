import React from 'react';

import Page from '../../components/page/page';
import './contacts';

export default () => (
	<Page title="Контакты">

		<div className="row">

			<div className="col-md-6">
				
				<h4>Марина, координатор, лидер компании Avon</h4>
				<table>
					<tbody>
						<tr>
							<td className="pr-2">
								<a href="https://api.whatsapp.com/send?phone=79134652306" target="_blank">
									<i className="icon watsapp"></i>
								</a>
							</td>
							<td><a href="tel:+79134652306">+7-913-465-23-06</a></td>
						</tr>
						<tr>
							<td className="pr-2"><i className="icon email"></i></td>
							<td><a href="mailto:avon.zakaz.nsk@yandex.ru">avon.zakaz.nsk@yandex.ru</a></td>
						</tr>
						<tr>
							<td className="pr-2"><i className="icon vk"></i></td>
							<td><a href="https://vk.com/avon_54_nsk" target="_blank">vk.com/avon_54_nsk</a></td>
						</tr>
						<tr>
							<td className="pr-2"><i className="icon instagram"></i></td>
							<td><a href="https://www.instagram.com/avon_54_nsk/" target="_blank">instagram.com/avon_54_nsk/</a></td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className="col-md-6">

			</div>

		</div>
	</Page>
);