import React from "react";
import { Skill } from "./Skill";
import s from './Skills.module.scss';

const skillsData = [
	{ id: 4, iconURL: 'data:image/png;base64,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', title: 'JavaScript', description: 'description JavaScript' },
	{ id: 3, iconURL: 'https://cdn.worldvectorlogo.com/logos/typescript.svg', title: 'TypeScript', description: 'description TypeScript' },
	{ id: 1, iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png', title: 'React', description: 'description React' },
	{ id: 2, iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png', title: 'React Native', description: 'description TypeScript' },
]

export function Skills() {
	return (
		<div className={s.container}>
			<div className="wrapper">
				<div className={s.title}>My skills</div>
				<div className={s.content}>
					{skillsData.map(s =>
						<Skill
							key={s.id}
							id={s.id}
							iconURL={s.iconURL}
							title={s.title}
							description={s.description} />)}
				</div>
			</div>
		</div>
	)
}