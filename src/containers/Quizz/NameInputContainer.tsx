import { useState } from 'react'
import Input from 'components/Input/Input'
import ButtonQuizz from 'components/Button/ButtonQuizz'

interface Props {
	namePlaceholder: string
	nameInputPlaceholder?: string
	lastNamePlaceholder: string
	lasNameInputPlaceholder?: string
	onSubmit: (val: string) => void
	withPartner?: Boolean
	isPsychiatrist?: Boolean
}

const NameInputContainer = ({
	namePlaceholder,
	nameInputPlaceholder,
	lasNameInputPlaceholder,
	lastNamePlaceholder,
	onSubmit,
	withPartner = false,
	isPsychiatrist = false
}: Props) => {
	const [firstValue, setFirstValue] = useState('')
	const [lastValue, setLastValue] = useState('')
	return (
		<div>
		<form className='grid grid-cols-1 gap-6' action='#' method='post' onSubmit={e => e.preventDefault()}>
			<label className='block'>
				<span className='text-neutral-800 dark:text-neutral-200'>{namePlaceholder}</span>
				<Input
					type='text'
					placeholder={nameInputPlaceholder || 'ჩაწერეთ სახელი'}
					className='mt-1'
					value={firstValue}
					onChange={({ target: { value } }) => setFirstValue(value)}
				/>
			</label>
			<label className='block'>
				<span className='text-neutral-800 dark:text-neutral-200'>{lastNamePlaceholder}</span>
				<Input
					type='text'
					placeholder={lasNameInputPlaceholder || 'ჩაწერეთ გვარი'}
					className='mt-1'
					value={lastValue}
					onChange={({ target: { value } }) => setLastValue(value)}
				/>
			</label>
			{firstValue  && lastValue.length > 2 ? (
				<ButtonQuizz
					className='w-full rounded-lg'
					bgColor={withPartner ? "bg-red-500 hover:bg-red-600" : isPsychiatrist ? "bg-yellow-600 hover:bg-yellow-700" :"bg-primary-6000 hover:bg-primary-700"}
					ringColor={withPartner ? "focus:ring-red-500" : isPsychiatrist ? "focus:ring-yellow-600": "focus:ring-primary-6000"}
					onClick={() => {
						onSubmit(`${firstValue} ${lastValue}`)
						setFirstValue('')
						setLastValue('')
					}}
				>
					შემდეგი ნაბიჯი
				</ButtonQuizz>
			) : null}
		</form>
		{/* <div className='mt-5'>
				<div className="flex flex-row gap-4 block bg-red-500 mb-2 w-full rounded-md p-4">
					<div>
					<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#EF5858"/>
						<path d="M28.5 19.5L19.5 28.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M19.5 19.5L28.5 28.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					</div>
					<div>
						<h2 className="text-white font-semibold">
						დაფიქსირდა ლათინური შრიფტი!
						</h2>
					<p className='text-white md:text-sm lg:text-sm'>
							გთხოვთ ინფორმაცია შეიყვანოთ ქართულად.
						</p>
					</div>
				</div>
			</div> */}
		</div>
	)
}

export default NameInputContainer
