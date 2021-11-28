import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import NcModal from 'components/NcModal/NcModal'
import ButtonPrimary from 'components/Button/ButtonPrimary'
import ButtonSecondary from 'components/Button/ButtonSecondary'
import Input from 'components/Input/Input'
import axios from 'utils/axios'

export interface PhoneValidationProps {
	show: string
	onCloseModalDeleteComment: () => void
	next: () => void
	customerId: string
}

let interval: NodeJS.Timeout

const PhoneValidation: FC<PhoneValidationProps> = ({ show, onCloseModalDeleteComment, customerId, next }) => {
	const firstInput = useRef<HTMLInputElement>(null)
	const secondInput = useRef<HTMLInputElement>(null)
	const thirdInput = useRef<HTMLInputElement>(null)
	const fourthInput = useRef<HTMLInputElement>(null)
	const [error, setError] = useState(false)
	const [otp, setOtp] = useState<(number | null)[]>([null, null, null, null])
	const [time, setTime] = useState(59)

	useEffect(() => {
		if (firstInput.current) {
			firstInput.current.focus()
		}
	}, [firstInput])
	useEffect(() => {
		if (otp[0] !== null && otp[1] === null) {
			secondInput.current?.focus()
		}
	}, [otp, secondInput])
	useEffect(() => {
		if (otp[1] !== null && otp[2] === null) {
			thirdInput.current?.focus()
		}
	}, [otp, thirdInput])
	useEffect(() => {
		if (otp[2] !== null && otp[3] === null) {
			fourthInput.current?.focus()
		}
	}, [otp, fourthInput])

	useEffect(() => {
		if (show) {
			interval = setInterval(() => {
				setTime(prevTime => prevTime - 1)
			}, 1000)
		}
	}, [show])

	const onSubmit = useCallback(async () => {
		try {
			setError(false)
			const data = {
				customerId,
				otp: '' + otp[0] + otp[1] + otp[2] + otp[3]
			}
			await axios.post('customer/otp', data)
			clearInterval(interval)
			next()
			onCloseModalDeleteComment()
		} catch (e) {
			setError(true)
		}
	}, [customerId, otp, next, onCloseModalDeleteComment, interval])

	const onResend = useCallback(async () => {
		try {
			setTime(59)
			await axios.put('customer/otp', { customerId })

			interval = setInterval(() => {
				setTime(prevTime => prevTime - 1)
			}, 1000)
		} catch (e) {
			console.log(e)
		}
	}, [customerId, interval])

	useEffect(() => {
		if (interval && time === 0) {
			clearInterval(interval)
		}
	}, [interval, time])

	const renderContent = () => {
		return (
			<div>
				<h2 className='text-xl mb-2 mt-2 font-bold ml-3'>დაადასტურეთ ტელეფონი</h2>
				<p className='ml-3 mb-6 text-sm'>კოდი გამოგზავნილია ნომერზე ******{show}</p>
				<div className='flex gap-5 justify-center'>
					<Input
						type='text'
						placeholder={''}
						sizeClass={'h-16 w-16 px-6 font-semibold'}
						className='mt-1 text-xl'
						ref={firstInput}
						value={otp[0] || undefined}
						onChange={({ target: { value } }) =>
							setOtp(prevOtp => {
								const a = [...prevOtp]
								a[0] = value !== '' ? Number(value) % 10 : null
								return a
							})
						}
					/>
					<Input
						type='text'
						placeholder={''}
						sizeClass={'h-16 w-16 px-6 font-semibold'}
						className='mt-1 text-xl'
						ref={secondInput}
						value={otp[1] || undefined}
						onChange={({ target: { value } }) =>
							setOtp(prevOtp => {
								const a = [...prevOtp]
								a[1] = value !== '' ? Number(value) % 10 : null
								return a
							})
						}
					/>
					<Input
						type='text'
						placeholder={''}
						sizeClass={'h-16 w-16 px-6 font-semibold'}
						className='mt-1 text-xl'
						ref={thirdInput}
						value={otp[2] || undefined}
						onChange={({ target: { value } }) =>
							setOtp(prevOtp => {
								const a = [...prevOtp]
								a[2] = value !== '' ? Number(value) % 10 : null
								return a
							})
						}
					/>
					<Input
						type='text'
						placeholder={''}
						sizeClass={'h-16 w-16 px-6 font-semibold'}
						className='mt-1 text-xl'
						ref={fourthInput}
						value={otp[3] || undefined}
						onChange={({ target: { value } }) =>
							setOtp(prevOtp => {
								const a = [...prevOtp]
								a[3] = value !== '' ? Number(value) % 10 : null
								return a
							})
						}
					/>
				</div>
				<div className='pr-3 pl-3 mt-4'>
					{error ? <p className='text-red-500'>კოდი არასწორია</p> : null}
					<ButtonPrimary className='mt-2 w-full' onClick={onSubmit}>
						დადასტურება
					</ButtonPrimary>
				</div>
				<p
					className='ml-3 mt-4 cursor-pointer font-semibold'
					onClick={() => (time === 0 ? onResend() : null)}
				>
					კოდის თავიდან გაგზავნა {time ? `0:${time.toString().padStart(2, '0')}` : null}
				</p>
			</div>
		)
	}

	const renderTrigger = () => {
		return null
	}

	return (
		<NcModal
			isOpenProp={!!show}
			onCloseModal={onCloseModalDeleteComment}
			contentExtraClass='max-w-sm'
			renderContent={renderContent}
			renderTrigger={renderTrigger}
			modalTitle=''
			closeButton={false}
		/>
	)
}

export default PhoneValidation
