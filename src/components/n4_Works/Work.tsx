import React from "react";
import s from './Works.module.scss';

type WorkType = {
	id: number
	imgURL: string
	title: string
	// excerpt: string
	projectURL: string
}

export function Work(props: WorkType) {
	return (
		<div className={s.itemWork}>
			<div className={s.topContent}>
				<img src={props.imgURL} alt="icon" />
				<a href={props.projectURL}>
					<div className={s.contentExcerpt}>
						<div className={s.itemTitle}>{props.title}</div>
						{/* <div className={s.excerpt}>{props.excerpt}</div> */}
					</div>
				</a>
			</div>

		</div>
	)
}