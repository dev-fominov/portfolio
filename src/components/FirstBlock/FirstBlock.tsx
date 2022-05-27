import React from "react";
import s from './FirstBlock.module.css';

export function FirstBlock() {
	return (
		<div className={s.container}>
			<div className="wrapper">
				<div className={s.content}>
					<div className={s.left}>Привет!<br/> Меня зовут Вадим Фоминов. <br/>Я front-end разработчик</div>
					<div className={s.right}>
						<img className={s.img} src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="foto" />
					</div>
				</div>
			</div>
		</div>
	)
}