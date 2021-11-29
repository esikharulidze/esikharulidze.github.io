import React, { FC, useState, useCallback } from 'react'
import ButtonCircle from 'components/Button/ButtonCircle'
import NcImage from 'components/NcImage/NcImage'
import Badge from 'components/Badge/Badge'
import Input from 'components/Input/Input'
import axios from 'utils/axios'

export interface SectionSubscribe2Props {
	className?: string
}

const emailValidation =
	/(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i

const SectionSubscribe2: FC<SectionSubscribe2Props> = ({ className = '' }) => {
	const [email, setEmail] = useState('')

	const onSubmit = useCallback(async () => {
		try {
			if (emailValidation.test(email)) {
				await axios.post('contact/subscribe', { email })
				setEmail('')
			}
		} catch (e) {}
	}, [email])

	return (
		<div
			className={`nc-SectionSubscribe2 relative flex flex-col lg:flex-row items-center ${className}`}
			data-nc-id='SectionSubscribe2'
		>
			<div className='flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5'>
				<h2 className='font-semibold text-3xl'>შემოუერთდით ანიმუსს 🎉</h2>
				<span className='block mt-3 text-neutral-500 dark:text-neutral-400'>
					გამოიწერეთ ცენტრის სიახლეები და მიიღეთ:
				</span>
				<ul className='space-y-4 mt-10'>
					<li className='flex items-center space-x-4'>
						<Badge name='01' />
						<span className='font-medium text-neutral-700 dark:text-neutral-300'>
							ფასდაკლებები შეხვედრებზე
						</span>
					</li>
					<li className='flex items-center space-x-4'>
						<Badge color='red' name='02' />
						<span className='font-medium text-neutral-700 dark:text-neutral-300'>
							ექსკლუზიური შეთავაზებები
						</span>
					</li>
					<li className='flex items-center space-x-4'>
						<Badge color='green' name='03' />
						<span className='font-medium text-neutral-700 dark:text-neutral-300'>
							ბოლო განახლებები
						</span>
					</li>
				</ul>
				<div className='mt-10 relative max-w-sm' onSubmit={e => e.preventDefault()}>
					<Input
						required
						aria-required
						placeholder='შეიყვანეთ ელ.ფოსტა'
						type='email'
						onChange={({ target: { value } }) => setEmail(value)}
						value={email}
					/>
					<ButtonCircle
						onClick={onSubmit}
						type='submit'
						className='absolute transform top-1/2 -translate-y-1/2 right-1'
					>
						<i className='las la-arrow-right text-xl'></i>
					</ButtonCircle>
				</div>
			</div>
			<div className='flex-grow'>
				<NcImage src={'https://animuscontent.s3.eu-central-1.amazonaws.com/subscription-hero.png'} />
			</div>
		</div>
	)
}

export default SectionSubscribe2
