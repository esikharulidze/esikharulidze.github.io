import ButtonQuizz from 'components/Button/ButtonQuizz'
import Input from 'components/Input/Input'
import { useState } from 'react'

interface Props {
	onSubmit: (val: string) => void
	withPartner?: Boolean
	isPsychiatrist?: Boolean
	isEdu?: Boolean
	isGroup?: Boolean
}

const CustomerPassword = ({ onSubmit, withPartner=false, isPsychiatrist=false, isEdu=false, isGroup=false }: Props) => {
	const [firstValue, setFirstValue] = useState('')
	const [lastValue, setLastValue] = useState('')
	return (
		<div className=' bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 '>
			<h2 className='font-semibold text-2xl mb-4'>დააყენეთ პაროლი</h2>
			<div className='grid grid-cols-2 gap-4'></div>
			<form
				className='grid grid-cols-1 gap-6'
				action='#'
				method='post'
				onSubmit={e => e.preventDefault()}
			>
				<label className='block'>
					<span className='text-neutral-800 dark:text-neutral-200'>{'შეიყვანეთ პაროლი'}</span>
					<Input
						type='password'
						placeholder={'*********'}
						className='mt-1'
						value={firstValue}
						onChange={({ target: { value } }) => setFirstValue(value)}
					/>
				</label>
				<label className='block'>
					<span className='text-neutral-800 dark:text-neutral-200'>{'გაიმეორეთ პაროლი'}</span>
					<Input
						type='password'
						placeholder={'*********'}
						className='mt-1'
						value={lastValue}
						onChange={({ target: { value } }) => setLastValue(value)}
					/>
				</label>
				{firstValue && lastValue === firstValue && lastValue.length > 5 ? (
					<ButtonQuizz className='w-full rounded-lg mt-1' 
					onClick={() => onSubmit(firstValue)}
					bgColor={withPartner ? "bg-red-500 hover:bg-red-600" : isPsychiatrist ? "bg-yellow-600 hover:bg-yellow-700" : isGroup ? "bg-pink-500 hover:bg-pink-600" : isEdu ? "bg-green-700 hover:bg-green-800" :"bg-primary-6000 hover:bg-primary-700"}
        ringColor={withPartner ? "focus:ring-red-500" : isPsychiatrist ? "focus:ring-yellow-600": isGroup ? "focus:ring-pink-600" : isEdu ? "focus:ring-green-600": "focus:ring-primary-6000"}
					>
						ანგარიშის შექმნა
					</ButtonQuizz>
				) : null}
			</form>
		</div>
	)
}

export default CustomerPassword
