import React from "react";
import s from './DistantWork.module.css';

export function DistantWork() {
	return (
		<div className={s.container}>
			<div className="wrapper">
				<div className={s.title}>Рассматриваю варианты удалённой работы</div>
				<button className={s.btn}>Нанять меня</button>
			</div>
		</div>
	)
}