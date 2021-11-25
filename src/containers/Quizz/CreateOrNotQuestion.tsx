import ButtonPrimary from 'components/Button/ButtonPrimary'
import ButtonQuizz from 'components/Button/ButtonQuizz'
import ButtonSecondary from 'components/Button/ButtonSecondary'

interface Props {
	onSubmit: (val?: boolean) => void
	withPartner?: Boolean
	isPsychiatrist?: Boolean
}

const CreateOrNotQuestion = ({ onSubmit, withPartner = false, isPsychiatrist=false }: Props) => {
	return (
		<div className=' bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 '>
			<h2 className='font-semibold text-2xl mb-4'>გსურთ ანგარიშის შექმნა?</h2>
			<div className='grid grid-cols-2 gap-4'></div>
			<ButtonQuizz onClick={() => onSubmit(false)} bgColor={withPartner ? "bg-red-500 hover:bg-red-600" : isPsychiatrist ? "bg-yellow-600 hover:bg-yellow-700" :"bg-primary-6000 hover:bg-primary-700"} className='w-full mt-4'>
				დიახ, მსურს ანგარიშის შექმნა (რეკომენდებულია)
			</ButtonQuizz>
			<ButtonQuizz onClick={() => onSubmit(true)} className='w-full mt-4 bg-white' bgColor={withPartner ? "bg-red-500 hover:bg-red-600" : isPsychiatrist ? "bg-yellow-600 hover:bg-yellow-700" :"bg-primary-6000 hover:bg-primary-700"}>
				არა, ვიზიტს ჩავნიშნავ როგორც "სტუმარი"
			</ButtonQuizz>
			<div className='mt-5'>
				<div className={isPsychiatrist ? 'flex flex-row gap-4 block bg-red-500 mb-2 w-full rounded-md p-5':'flex flex-row gap-4 block bg-yellow-600 mb-2 w-full rounded-md p-5'}>
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
								fill={isPsychiatrist ? '#dc3c3c': '#BA7F02'}
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

export default CreateOrNotQuestion
