import React from "react";
import s from './Contacts.module.css';

export function Contacts() {
	return (
		<div className={s.container}>
			<div className="wrapper">
				<div className={s.title}>Контакты</div>
				<form className={s.form}>
					<input type="text" />
					<input type="text" />
					<textarea></textarea>
					<button>Отправить</button>
				</form>
			</div>
		</div>
	)
}