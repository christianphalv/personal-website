import exp from 'constants';
import Link from 'next/link'
import React from 'react'

export default function Experience() {
  return (
    <main>
        <h1>This is the experience page</h1>
		<ExperienceList />
    </main>
  )
}

function ExperienceList() {
  	const experienceList: string[] = ["aws-tgw", "urop"];

	return (
		<div>
			{experienceList.map((experience) => (
				<Link key={experience} href={`/experience/${experience}`}>Experience #{experience}</Link>
			))}
		</div>
	)
}

