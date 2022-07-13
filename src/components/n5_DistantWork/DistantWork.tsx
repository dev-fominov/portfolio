import React from "react";
import s from './DistantWork.module.scss';

export function DistantWork() {
	return (
		<div className={s.container}>
			<div className="wrapper">
				<div className={s.title}>I'm looking into remote work options.</div>
				<button className={s.btn}>Hire me</button>
			</div>
		</div>
	)
}