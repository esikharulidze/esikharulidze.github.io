import ButtonQuizz from 'components/Button/ButtonQuizz'
import Input from 'components/Input/Input'
import { useState } from 'react'

const nameField = /^[ა-ჰ]*$/

interface Props {
	onSubmit: (val: { firstName: string; lastName: string }) => void
	withPartner?: Boolean
	isPsychiatrist?: Boolean
	isEdu?: Boolean
	isGroup?: Boolean
}

const CustomerName = ({
	onSubmit,
	withPartner = false,
	isPsychiatrist = false,
	isEdu = false,
	isGroup = false
}: Props) => {
	const [firstValue, setFirstValue] = useState('')
	const [lastValue, setLastValue] = useState('')
	const [firstError, setFirstError] = useState(false)
	const [secondError, setSecondError] = useState(false)
	return (
		<div className=' bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 '>
			<h2 className='font-semibold text-2xl mb-4'>ანგარიშის დეტალები</h2>
			<div className='grid grid-cols-2 gap-4'></div>
			<form
				className='grid grid-cols-1 gap-6'
				action='#'
				method='post'
				onSubmit={e => e.preventDefault()}
			>
				<label className='block'>
					<span className='text-neutral-800 dark:text-neutral-200'>
						{'ანგარიშის მფლობელის სახელი'}
					</span>
					<Input
						type='text'
						placeholder={'ჩაწერეთ სახელი'}
						className='mt-1'
						value={firstValue}
						onChange={({ target: { value } }) => {
							if (!nameField.test(value)) {
								setFirstError(true)
							} else {
								setFirstError(false)
							}
							setFirstValue(value)
						}}
					/>
				</label>
				<label className='block'>
					<span className='text-neutral-800 dark:text-neutral-200'>
						{'ანგარიშის მფლობელის გვარი'}
					</span>
					<Input
						type='text'
						placeholder={'ჩაწერეთ გვარი'}
						className='mt-1'
						value={lastValue}
						onChange={({ target: { value } }) => {
							if (!nameField.test(value)) {
								setSecondError(true)
							} else {
								setSecondError(false)
							}
							setLastValue(value)
						}}
					/>
				</label>
				{firstError || secondError ? (
					<p style={{ marginTop: -10 }} className='text-sm text-red-500'>
						*გთხოვთ გამოიყენოთ მხოლოდ ქართული სიმბოლოები
					</p>
				) : null}
				{firstValue && !firstError && !secondError && lastValue.length > 2 ? (
					<ButtonQuizz
						className='w-full rounded-lg'
						bgColor={
							withPartner
								? 'bg-red-500 hover:bg-red-600'
								: isPsychiatrist
								? 'bg-yellow-600 hover:bg-yellow-700'
								: isGroup
								? 'bg-pink-500 hover:bg-pink-600'
								: isEdu
								? 'bg-green-700 hover:bg-green-800'
								: 'bg-primary-6000 hover:bg-primary-700'
						}
						ringColor={
							withPartner
								? 'focus:ring-red-500'
								: isPsychiatrist
								? 'focus:ring-yellow-600'
								: isGroup
								? 'focus:ring-pink-600'
								: isEdu
								? 'focus:ring-green-600'
								: 'focus:ring-primary-6000'
						}
						onClick={() =>
							onSubmit({
								firstName: firstValue,
								lastName: lastValue
							})
						}
					>
						შემდეგი ნაბიჯი
					</ButtonQuizz>
				) : null}
			</form>
		</div>
	)
}

export default CustomerName
