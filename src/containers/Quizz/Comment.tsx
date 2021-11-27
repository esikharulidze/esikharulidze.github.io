import ButtonPrimary from 'components/Button/ButtonPrimary'
import React, { FC, useEffect, useState, useCallback } from 'react'
export interface ServiceInnerProps {
	onSubmit: (text: string) => void
	withPartner?: Boolean
	isPsychiatrist?: Boolean
	isEdu?: Boolean
	isGroup?: Boolean
}

const Quizz: FC<ServiceInnerProps> = ({ onSubmit, withPartner = false, isPsychiatrist=false, isEdu=false, isGroup=false }) => {
	const [value, setValue] = useState<string>('')

	return (
		<div className=' bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 '>
			<h2 className='font-semibold text-2xl mb-4'>დატოვეთ დამატებითი კომენტარი</h2>

			<div className='text-md'>
				თუ თვლით, რომ სპეციალისტმა მეტი უნდა იცოდეს თქვენ შესახებ ან გაგაჩნიათ რაიმე სპეციფიკური
				სურვილი, გთხოვთ მიუთითოთ.
			</div>

			<label className='block text-left'>
				<textarea
					className='p-4 block w-full text-sm rounded-xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-800 mt-4 mb-4'
					// style={{ backgroundColor: '#F8F8F8', borderStyle: 'none', resize: 'none' }}
					rows={8}
					placeholder='შეიყვანეთ ტექსტი'
					value={value}
					onChange={({ target: { value } }) => setValue(value)}
				></textarea>
			</label>
			<ButtonPrimary
				className='w-full'
				bgColor={withPartner ? "bg-red-500 hover:bg-red-600" : isPsychiatrist ? "bg-yellow-600 hover:bg-yellow-700" : isGroup ? "bg-pink-500 hover:bg-pink-600" : isEdu ? "bg-green-700 hover:bg-green-800" :"bg-primary-6000 hover:bg-primary-700"}
        ringColor={withPartner ? "focus:ring-red-500" : isPsychiatrist ? "focus:ring-yellow-600": isGroup ? "focus:ring-pink-600" : isEdu ? "focus:ring-green-600": "focus:ring-primary-6000"}
				textArrangement='text-left'
				onClick={() => onSubmit && onSubmit(value)}
			>
				შემდეგი ნაბიჯი
			</ButtonPrimary>
			{!isEdu ?
        <div className='mt-5'>
				<div className={isPsychiatrist ? 'flex flex-row gap-4 block bg-red-500 mb-2 w-full rounded-md p-5': isGroup ? 'flex flex-row gap-4 block bg-red-500 mb-2 w-full rounded-md p-5' :'flex flex-row gap-4 block bg-yellow-600 mb-2 w-full rounded-md p-5'}>
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
								fill={isPsychiatrist ? '#dc3c3c': isGroup ? '#dc3c3c': '#BA7F02'}
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
			</div> : null
      }
		</div>
	)
}

export default Quizz
