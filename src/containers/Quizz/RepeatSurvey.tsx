import ButtonPrimary from 'components/Button/ButtonPrimary'
import ButtonSecondary from 'components/Button/ButtonSecondary'

interface Props {
	onSubmit: (val?: boolean) => void
}

const RepeatSurvey = ({ onSubmit }: Props) => {
	return (
		<div className=' bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 '>
			<h2 className='font-semibold text-2xl mb-4'>გსურთ შეავსოთ კითხვარი თავიდან?</h2>
			<div className='grid grid-cols-2 gap-4'></div>
			<div className='grid grid-cols-1'>
				<ButtonPrimary className='w-full' textArrangement='text-left' onClick={() => onSubmit(true)}>
					დიახ, კითხვარს შევავსებ თავიდან
				</ButtonPrimary>
				<ButtonSecondary
					className='w-full mt-4'
					textArrangement='text-left'
					onClick={() => onSubmit(false)}
				>
					არა, გამოვიყენებ აქამდე შევსებულ კითხვარს
				</ButtonSecondary>
			</div>
			<div className='mt-5'>
				<div className='flex flex-row gap-4 block bg-yellow-600	 mb-2 w-full rounded-md p-5'>
					<div>
						<svg
							width='48'
							height='48'
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
					<p className='text-white'>
						კითხვარი გამოიყენება პროფესიონალი ფსიქოლოგის მიერ, რათა მას წინასწარი ზოგადი
						ინფორმაცია ჰქონდეს თქვენ შესახებ, რაც დაეხმარება თერაპიის უკეთესად წარმართვაში.
					</p>
				</div>
			</div>
		</div>
	)
}

export default RepeatSurvey
