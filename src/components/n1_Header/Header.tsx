import React from "react";
import s from './Header.module.scss';

export function Header() {
	return (
		<div className={s.container}>
			<div className="wrapper">
				<header className={s.header}>
					{/* <div className={s.logo}>Вадим Фоминов</div> */}
					<div className={s.menu}>
						<a href="#home">Home</a>
						<a href="#skills">Skills</a>
						<a href="#works">Works</a>
						<a href="#home">Contacts</a>
					</div>
				</header>
			</div>
		</div>

	)
}