import React from 'react';

import Page from '../../components/page/page';

export default () => (
	<Page title="Регистрация в Avon">
		<form>

			<FormBlock title="Общие данные">
				<div className="form-row">

					<FlatInput className="col-lg-4" title="Фамилия" placeholder="Иванов" required/>
					<FlatInput className="col-lg-4" title="Имя" placeholder="Иван" required/>
					<FlatInput className="col-lg-4" title="Отчество" placeholder="Иванович" required/>

				</div>

				<div className="form-row">

					<FlatInput className="col-lg-4" title="Дата рождения" type="date" required/>
					<FlatInput className="col-lg-4" title="Моб. телефон" placeholder="+7-123-456-78" required/>
					<FlatInput className="col-lg-4" title="E-mail" type="email" placeholder="example@info.me"/>

				</div>
			</FormBlock>

			<FormBlock title="Адрес фактического проживания">
				<div className="form-row">

					<FlatInput className="col-lg-12" title="Город, Улица" placeholder="г. Новосибирск, ул. Ленина" required/>

				</div>

				<div className="form-row">

					<FlatInput className="col-md-3 col-6" title="Дом" placeholder="1" required/>
					<FlatInput className="col-md-3 col-6" title="Корпус" placeholder="2"/>
					<FlatInput className="col-md-3 col-6" title="Квартира" placeholder="3" required/>
					<FlatInput className="col-md-3 col-6" title="Индекс" placeholder="630000"/>

				</div>

				<CheckBox>Адрес проживания совпадает с пропиской</CheckBox>
			</FormBlock>

			<FormBlock title="Адрес фактического проживания">
				<div className="form-row">

					<FlatInput className="col-lg-12" title="Город, Улица" placeholder="г. Новосибирск, ул. Ленина" required/>

				</div>

				<div className="form-row">

					<FlatInput className="col-md-3 col-6" title="Дом" placeholder="1" required/>
					<FlatInput className="col-md-3 col-6" title="Корпус" placeholder="2"/>
					<FlatInput className="col-md-3 col-6" title="Квартира" placeholder="3" required/>
					<FlatInput className="col-md-3 col-6" title="Индекс" placeholder="630000"/>

				</div>
			</FormBlock>

			<FormBlock>
				<div className="form-row">
					<RadioGroup title="Ранее уже был(а) зарегистрирован(а) в компании?" items={[
						{ title: 'Нет', value: 'Нет' },
						{ title: 'Представителем', value: 'Представителем' },
						{ title: 'Координатором', value: 'Координатором' }
					]} name="hasRegister"/>
				</div>
			</FormBlock>

			<FormBlock>
				<div className="form-row my-2">
					<CheckBox>Я соглашаюсь на обработку моих персональных данных</CheckBox>
				</div>
			</FormBlock>

			<button type="submit" className="btn btn-danger">Продолжить</button>
		</form>
	</Page>
);


const FlatInput = ({ title, className, placeholder, required, type}) => (
	<div className={'form-group ' + className}>
		<div className="input-group">
			<div className="input-group-addon">{title}</div>
			<input type={type || 'text'} className="form-control" placeholder={placeholder} required={required}/>
		</div>
	</div>
);

const CheckBox = ({ children, checked }) => (
	<div className="form-group">
		<div className="form-check mb-2 mb-sm-0">
			<label className="form-check-label">
				<input className="form-check-input" type="checkbox" defaultChecked={!!checked}/> {children}
			</label>
		</div>
	</div>
);

const RadioGroup = ({ title, name, items }) => (
	<div className="form-group">
		<div className="form-input">
			{title && <div className="mb-2">{title}</div>}
			{items.map((item, i) => <Radio key={i} name={name} value={item.value}>{item.title}</Radio> )}
		</div>
	</div>
);

const Radio = ({ children, checked, name, value }) => (
	<div className="form-check form-check-inline">
		<label className="form-check-label">
			<input className="form-check-input" type="radio" name={name} value={value} defaultChecked={!!checked}/> {children}
		</label>
	</div>
);

const FormBlock = ({ title, children }) => (
	<div className="form-block">
		{title && <div className="font-weight-bold mb-4">{title}</div>}
		{children}
	</div>
);