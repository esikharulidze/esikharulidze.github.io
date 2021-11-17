import ButtonPrimary from 'components/Button/ButtonPrimary'
import ButtonQuizz from 'components/Button/ButtonQuizz'

interface Props {
	onSubmit: (val?: boolean) => void
}

const CreateOrNotQuestion = ({ onSubmit }: Props) => {
	return (
		<div className=' bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 '>
			<h2 className='font-semibold text-2xl mb-4'>გსურთ ანგარიშის შექმნა?</h2>
			<div className='grid grid-cols-2 gap-4'></div>
			<ButtonQuizz onClick={() => onSubmit(false)} className='w-full mt-4'>
				დიახ, მსურს ანგარიშის შექმნა(რეკომენდებულია)
			</ButtonQuizz>
			<ButtonQuizz onClick={() => onSubmit(true)} className='w-full mt-4 bg-white'>
				არა, ვიზიტს ჩავნიშნავ როგორც "სტუმარი"
			</ButtonQuizz>
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

export default CreateOrNotQuestion
