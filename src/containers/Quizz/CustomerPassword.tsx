import ButtonQuizz from 'components/Button/ButtonQuizz'
import Input from 'components/Input/Input'
import { useState } from 'react'

interface Props {
	onSubmit: (val: string) => void
}

const CustomerPassword = ({ onSubmit }: Props) => {
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
						type='text'
						placeholder={'*********'}
						className='mt-1'
						value={firstValue}
						onChange={({ target: { value } }) => setFirstValue(value)}
					/>
				</label>
				<label className='block'>
					<span className='text-neutral-800 dark:text-neutral-200'>{'გაიმეორეთ პაროლი'}</span>
					<Input
						type='text'
						placeholder={'*********'}
						className='mt-1'
						value={lastValue}
						onChange={({ target: { value } }) => setLastValue(value)}
					/>
				</label>
				{firstValue && lastValue === firstValue ? (
					<ButtonQuizz className='w-full rounded-lg mt-4' onClick={() => onSubmit(firstValue)}>
						შემდეგი ნაბიჯი
					</ButtonQuizz>
				) : null}
			</form>
		</div>
	)
}

export default CustomerPassword
