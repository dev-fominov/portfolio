import React from "react";
import s from './Contacts.module.scss';

export function Contacts() {
	return (
		<div className={s.container}>
			<div className="wrapper">
				<div className={s.title}>Contacts</div>
				<form className={s.form}>
					<input type="text" />
					<input type="text" />
					<textarea></textarea>
					<button>Send</button>
				</form>
			</div>
		</div>
	)
}