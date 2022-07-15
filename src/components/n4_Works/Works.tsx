import React from "react";
import { Work } from "./Work";
import s from './Works.module.scss';

const worksData = [
	{ id: 1, imgURL: 'https://compsch.com/wp-content/uploads/2019/12/VKontakte-1-699x466.jpg', projectURL: '#', title: 'Social app', excerpt: 'description React' },
	{ id: 2, imgURL: 'https://todotech20.com/wp-content/uploads/2021/12/Trello-hur-du-anvander-det-for-dina-projekt-och-mer.jpg', projectURL: '#', title: 'Trello app', excerpt: 'description TypeScript' },
	{ id: 3, imgURL: 'https://cdn.worldvectorlogo.com/logos/typescript.svg', projectURL: '#', title: 'TypeScript', excerpt: 'description TypeScript' }
]

export function Works() {
	return (
		<div className={s.container}>
			<div className="wrapper">
				<div className={s.title}>My works</div>
				<div className={s.content}>
					{worksData.map(w =>
						<Work
							key={w.id}
							id={w.id}
							imgURL={w.imgURL}
							title={w.title}
							// excerpt={w.excerpt}
							projectURL={w.projectURL} />)}
				</div>
			</div>
		</div>
	)
}