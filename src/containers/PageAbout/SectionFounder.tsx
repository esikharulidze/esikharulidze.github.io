import { AxiosResponse } from 'axios'
import Heading from 'components/Heading/Heading'
import NcImage from 'components/NcImage/NcImage'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { BackendUser } from 'types'
import axios from 'utils/axios'

export interface People {
	id: string
	name: string
	job: string
	avatar: string
}

const FOUNDER_DEMO: People[] = [
	{
		id: '1',
		name: `ელენე სიხარულიძე`,
		job: 'დამფუძნებელი, ფსიქოლოგი',
		avatar: 'https://animuscontent.s3.eu-central-1.amazonaws.com/elene.jpg'
	},
	{
		id: '4',
		name: `ეკატერინე ჩიქოვანი`,
		job: 'პედაგოგი, არტთერაპევტი',
		avatar: 'https://animuscontent.s3.eu-central-1.amazonaws.com/ekaterine.jpg'
	},
	{
		id: '3',
		name: `ქეთია ბელქანია`,
		job: 'მთავარი რედაქტორი',
		avatar: 'https://animuscontent.s3.eu-central-1.amazonaws.com/ketia.jpg'
	},
	{
		id: '2',
		name: `ნათია ლეკიშვილი`,
		job: 'მენეჯერი, კოორდინატორი',
		avatar: 'https://animuscontent.s3.eu-central-1.amazonaws.com/natia.jpg'
	}
]

const SectionFounder = () => {
	const [authors, setAuthors] = useState<BackendUser[]>([])
	useEffect(() => {
		;(async () => {
			try {
				await axios.get<any, AxiosResponse<BackendUser[]>>('user/all').then(({ data }) => {
					setAuthors(data)
				})
			} catch (e) {
				console.log(e)
			}
		})()
	}, [])
	const history = useHistory()
	return (
		<div className='nc-SectionFounder relative'>
			<Heading desc='გაეცანით ჩვენს მაღალკვალიფიციურ და კრეატიულ გუნდს'>🤝 ანიმუსის გუნდი</Heading>
			<div className='grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8 cursor-pointer'>
				{authors.map(item => (
					<div
						key={item.id}
						className='max-w-sm'
						onClick={() => {
							history.push(`/team/${item.slug}`)
						}}
					>
						<NcImage
							containerClassName='relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden'
							className='absolute inset-0 object-cover'
							src={item.avatar}
						/>
						<h3 className='text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200'>
							{item.firstName} {item.lastName}
						</h3>
						<span className='block text-sm text-neutral-500 sm:text-base dark:text-neutral-400'>
							{item.jobTitle}
						</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default SectionFounder
