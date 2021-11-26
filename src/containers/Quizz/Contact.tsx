import ButtonPrimary from 'components/Button/ButtonPrimary'
import Input from 'components/Input/Input'
import { useState } from 'react'
import PhoneValidation from 'components/PhoneValidation/PhoneValidation'

interface Props {
	onSubmit: (val: { email: string; phone: string }) => void
	withPartner?: Boolean
	isPsychiatrist?: Boolean
}

const Contact = ({ onSubmit, withPartner=false, isPsychiatrist=false }: Props) => {
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [show, setShow] = useState(false)
	const emailValidation = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
	const phoneValidation = /^5[0-9]{8}$/;
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
			{
				emailValidation.test(email) && phoneValidation.test(phone) ?
			<ButtonPrimary
				onClick={() => onSubmit({ email, phone })}
				className='w-full mt-4'
				bgColor={withPartner ? "bg-red-500 hover:bg-red-600" : isPsychiatrist ? "bg-yellow-600 hover:bg-yellow-700" :"bg-primary-6000 hover:bg-primary-700"}
				ringColor={withPartner ? "focus:ring-red-500" : isPsychiatrist ? "focus:ring-yellow-600": "focus:ring-primary-6000"}
				textArrangement='text-left'
			>
				შემდეგი ნაბიჯი
			</ButtonPrimary>
			: null
			}
		</div>
	)
}

export default Contact
