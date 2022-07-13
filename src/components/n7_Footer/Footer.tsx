import React from "react";
import s from './Footer.module.scss';

export function Footer() {
	return (
		<div className={s.container}>
			<div className="wrapper">
				<footer className={s.footer}>
					<div className={s.logo}>Vadim Fominov</div>
					<ul className={s.socseti}>
						<li><a href="#">FB</a></li>
						<li><a href="#">VK</a></li>
						<li><a href="#">INST</a></li>
						<li><a href="#">GH</a></li>
					</ul>
					<div className={s.copy}>@2022 All rights reserved</div>
				</footer>
			</div>
		</div>
	)
}