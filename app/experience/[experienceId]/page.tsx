import { Experience } from '@/typings';
import React from 'react'
import data from '../../../data/experience.json' assert { type: 'JSON' }

type ExperienceIdProps = {
    params: {
      experienceId: string;
    }
}

export default async function ExperienceId({ params: { experienceId }}: ExperienceIdProps) {
	const experience = await fetchExperience(experienceId);

  return (
    <main>
        <h1>Company: {experience.company}</h1>
		<p>Title: {experience.title}</p>
		<p>StartYear: {experience.startYear.toString()}</p>
		<p>StartMonth: {experience.startMonth}</p>

		{experience.endYear != null &&
			<div>
				<p>EndYear: {experience.endYear.toString()}</p>
				<p>EndMonth: {experience.endMonth}</p>
			</div>
		}

		{experience.descriptions.map((description, i) => (
			<p key={i}>{description}</p>
		))}

    </main>
  )
}

const fetchExperience = async (experienceId: string) => {

	// TODO: Host the data elsewhere and fetch it in this function

	const experience: Experience = parseExperience(experienceId)
	return experience;
}

const parseExperience = (experienceId: string): Experience => {

	const datum = data.find((datum) => datum.id === experienceId )

	const experience: Experience = {
		id: datum!.id,
		title: datum!.title,
		company: datum!.company,
		startYear: datum!.startYear,
		startMonth: datum!.startMonth,
		endYear: datum?.endYear,
		endMonth: datum?.endMonth,

		descriptions: datum!.descriptions.map((description) => description.description),
	}

	return experience;
}