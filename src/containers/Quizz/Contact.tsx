import ButtonPrimary from 'components/Button/ButtonPrimary'
import Input from 'components/Input/Input'
import { useState } from 'react'
import PhoneValidation from 'components/PhoneValidation/PhoneValidation'

interface Props {
	onSubmit: (val: { email: string; phone: string }) => void
}

const Contact = ({ onSubmit }: Props) => {
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [show, setShow] = useState(false)
	return (
		<div className=' bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 '>
			<h2 className='font-semibold text-2xl mb-4'>როგორ დაგეკონტაქტოთ?</h2>
			<div className='grid grid-cols-2 gap-4'></div>
			<form className='grid grid-cols-1 gap-6' action='#' method='post'>
				<label className='block'>
					<span className='text-neutral-800 dark:text-neutral-200'>თქვენი ელ.ფოსტა</span>
					<Input
						type='text'
						placeholder='example@animus.ge'
						className='mt-1'
						value={email}
						onChange={({ target: { value } }) => setEmail(value)}
					/>
				</label>
				<label className='block'>
					<span className='text-neutral-800 dark:text-neutral-200'>თქვენი ტელეფონი</span>
					<Input
						type='text'
						placeholder='5__ ___ ___'
						className='mt-1'
						value={phone}
						onChange={({ target: { value } }) => setPhone(value)}
					/>
				</label>
			</form>
			<ButtonPrimary
				onClick={() => onSubmit({ email, phone })}
				className='w-full mt-4'
				textArrangement='text-left'
			>
				შემდეგი ნაბიჯი
			</ButtonPrimary>
			<div className='mt-5'>
				<div className='flex flex-row gap-4 block bg-yellow-600 mb-2 w-full rounded-md p-5'>
					<div>
						<svg
							width='40'
							height='40'
							viewBox='0 0 48 48'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z'
								fill='#BA7F02'
							/>
							<path
								d='M24 32V24'
								stroke='white'
								stroke-width='4'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
							<path
								d='M24 16H24.0204'
								stroke='white'
								stroke-width='4'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</div>
					<p className='text-white md:text-sm lg:text-sm'>
						კითხვარს გაეცნობა მხოლოდ თქვენ მიერ არჩეული სპეციალისტი, რათა შემოგთავაზოთ თქვენზე მორგებული თერაპია ან მკურნალობა. კონფიდენციალურობის პოლიტიკა <a className="font-semibold" target="_blank" href="https://animus.ge/privacy-policy">იხილეთ ბმულზე.</a>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Contact
