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
			{firstValue && lastValue ? (
				<ButtonQuizz
					className='w-full rounded-lg'
					bgColor={withPartner ? "bg-red-500 hover:bg-red-600" : isPsychiatrist ? "bg-yellow-600 hover:bg-yellow-700" :"bg-primary-6000 hover:bg-primary-700"}
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
	)
}

export default NameInputContainer
