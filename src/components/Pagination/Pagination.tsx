import { CustomLink } from 'data/types'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import twFocusClass from 'utils/twFocusClass'

const DEMO_PAGINATION: CustomLink[] = [
	{
		label: '1',
		href: '#'
	},
	{
		label: '2',
		href: '#'
	},
	{
		label: '3',
		href: '#'
	},
	{
		label: '4',
		href: '#'
	}
]

export interface PaginationProps {
	className?: string
	posts?: any
	selected?: number
	setSelected?: (val: number) => void
	length?: number
}

const Pagination: FC<PaginationProps> = ({ className = '', posts, length, selected, setSelected }) => {
	// console.log(posts.length)

	// const DEMO_PAGINATION = posts.length

	const renderItem = (i: number) => {
		if (i === selected) {
			// RETURN ACTIVE PAGINATION
			return (
				<div
					key={i}
					className={`cursor-pointer inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white ${twFocusClass()}`}
				>
					{i}
				</div>
			)
		}
		// RETURN UNACTIVE PAGINATION
		return (
			<div
				key={i}
				className={`cursor-pointer inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}
				// to={pag.href}
				onClick={() => (setSelected ? setSelected(i) : {})}
			>
				{i}
			</div>
		)
	}

	return (
		<nav className={`nc-Pagination inline-flex space-x-1 text-base font-medium ${className}`}>
			{Array.from(Array(length).keys()).map((val, i) => (i > 0 ? renderItem(i) : null))}
		</nav>
	)
}

export default Pagination
