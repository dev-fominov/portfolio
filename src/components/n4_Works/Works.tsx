import React from "react";
import { Work } from "./Work";
import s from './Works.module.scss';

const worksData = [
	{ id: 1, imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png', projectURL: '#', title: 'React', excerpt: 'description React' },
	{ id: 2, imgURL: 'https://cdn.worldvectorlogo.com/logos/typescript.svg', projectURL: '#', title: 'TypeScript', excerpt: 'description TypeScript' },
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
							excerpt={w.excerpt}
							projectURL={w.projectURL} />)}
				</div>
			</div>
		</div>
	)
}