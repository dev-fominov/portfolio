import React from "react";
import s from './Skills.module.scss';

type SkillType = {
	id: number
	iconURL: string
	title: string
	description: string
}

export function Skill(props: SkillType) {
	return (
		<div className={s.itemSkill}>
			<img src={props.iconURL} alt="icon" />
			<div className={s.itemTitle}>{props.title}</div>
			<div className={s.description}>{props.description}</div>
		</div>
	)
}