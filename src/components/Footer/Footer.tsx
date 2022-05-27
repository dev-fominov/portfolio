import React from "react";
import s from './Footer.module.css';

export function Footer() {
	return (
		<div className={s.container}>
			<div className="wrapper">
				<footer className={s.footer}>
					<div className={s.logo}>Вадим Фоминов</div>
					<ul className={s.socseti}>
						<li><a href="#">FB</a></li>
						<li><a href="#">VK</a></li>
						<li><a href="#">INST</a></li>
						<li><a href="#">GH</a></li>
					</ul>
					<div className={s.copy}>@2022 Все права защищены</div>
				</footer>
			</div>
		</div>
	)
}