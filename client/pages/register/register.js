import React from 'react';

import Page from '../../components/page/page';

export default () => (
	<Page title="Регистрация в Avon">

		<p>
			Дорогой Клиент!
			Если Вы хотите заказать напрямую со склада AVON, то заполните эту анкету.
			Вам придет SMS-сообщение с компьютерным номером.
			Таким образом Вы получите доступ к личному кабинету Представителя, откуда и разместите Ваш заказ.
			Оплатить заказ Вы можете в течение 7 календарных дней после получения (при предоставлении Ваших паспортных данных).
		</p>

		<form>

			<FormBlock title="Общие данные">
				<div className="form-row">

					<FlatInput className="col-lg-4" title="Фамилия" name="firstName" placeholder="Иванов" required/>
					<FlatInput className="col-lg-4" title="Имя" name="lastName" placeholder="Иван" required/>
					<FlatInput className="col-lg-4" title="Отчество" name="patronymic" placeholder="Иванович" required/>

				</div>

				<div className="form-row">

					<FlatInput className="col-lg-4" title="Дата рождения" name="birthDay" type="date" required/>
					<FlatInput className="col-lg-4" title="Моб. телефон" name="phone" placeholder="+7-123-456-78" required/>
					<FlatInput className="col-lg-4" title="E-mail" type="email" name="email" placeholder="example@info.me"/>

				</div>
			</FormBlock>

			<FormBlock title="Адрес фактического проживания">
				<div className="form-row">

					<FlatInput className="col-lg-12" title="Город, Улица" name="fact-city-street" placeholder="г. Новосибирск, ул. Ленина" required/>

				</div>

				<div className="form-row">

					<FlatInput className="col-md-3 col-6" title="Дом" name="fact-house" placeholder="1" required/>
					<FlatInput className="col-md-3 col-6" title="Корпус" name="fact-building" placeholder="2"/>
					<FlatInput className="col-md-3 col-6" title="Квартира" name="fact-apartment" placeholder="3" required/>
					<FlatInput className="col-md-3 col-6" title="Индекс" name="fact-zipCode" placeholder="630000"/>

				</div>

				<CheckBox>Адрес проживания совпадает с пропиской</CheckBox>
			</FormBlock>

			<FormBlock title="Адрес регистрации (прописки)">
				<div className="form-row">

					<FlatInput className="col-lg-12" title="Город, Улица" name="reg-city-street" placeholder="г. Новосибирск, ул. Ленина" required/>

				</div>

				<div className="form-row">

					<FlatInput className="col-md-3 col-6" title="Дом" name="reg-house" placeholder="1" required/>
					<FlatInput className="col-md-3 col-6" title="Корпус" name="reg-building" placeholder="2"/>
					<FlatInput className="col-md-3 col-6" title="Квартира" name="reg-apartment" placeholder="3" required/>
					<FlatInput className="col-md-3 col-6" title="Индекс" name="reg-zipCode" placeholder="630000"/>

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
					<CheckBox required>Я соглашаюсь на обработку моих персональных данных</CheckBox>
				</div>
			</FormBlock>

			<FormBlock>
				<span className="border border-danger rounded p-2">
					<span className="font-weight-bold text-danger">*</span>
					<span> - поля обязательные к заполнению.</span>
				</span>
			</FormBlock>

			<button type="submit" className="btn btn-danger">Продолжить</button>
		</form>
	</Page>
);


const FlatInput = ({ title, className, placeholder, required, type, name}) => (
	<div className={'form-group ' + className}>
		<div className="input-group">
			<div className="input-group-addon">
				{title}
				{required && <sup className="font-weight-bold text-danger ml-1">*</sup>}
			</div>
			<input type={type || 'text'} className="form-control" name={name} placeholder={placeholder} required={required}/>
		</div>
	</div>
);

const CheckBox = ({ children, checked, name }) => (
	<div className="form-group">
		<div className="form-check mb-2 mb-sm-0">
			<label className="form-check-label">
				<input className="form-check-input" name={name} type="checkbox" defaultChecked={!!checked}/> {children}
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
	<div className="form-check form-check-inline col-sm-12 col-md-auto">
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