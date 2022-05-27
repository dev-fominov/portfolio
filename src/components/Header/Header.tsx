import React from "react";
import s from './Header.module.css';

export function Header() {
	return (
		<div className={s.container}>
			<div className="wrapper">
				<header className={s.header}>
					{/* <div className={s.logo}>Вадим Фоминов</div> */}
					<div className={s.menu}>
						<a href="#home">Главная</a>
						<a href="#skills">Скиллы</a>
						<a href="#works">Работы</a>
						<a href="#home">Контакты</a>
					</div>
				</header>
			</div>
		</div>

	)
}