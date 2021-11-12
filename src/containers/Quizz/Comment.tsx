import ButtonPrimary from 'components/Button/ButtonPrimary'
import React, { FC, useEffect, useState, useCallback } from 'react'
export interface ServiceInnerProps {
	onSubmit: (text: string) => void
}

const Quizz: FC<ServiceInnerProps> = ({ onSubmit }) => {
	const [value, setValue] = useState<string>('')

	return (
		<div className=' bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 '>
			<h2 className='font-semibold text-2xl mb-4'>დატოვეთ დამატებითი კომენტარი</h2>

			<div className='text-md'>
				თუ თვლით რომ სპეციალისტმა მეტი უნდა იცოდეს თქვენ შესახებ ან გაგაჩნიათ რაიმე სპეციფიკური
				სურვილი, გთოხვთ მიუთითოთ.
			</div>

			<label className='block text-left'>
				<textarea
					className='form-textarea border-none mt-4 block w-full rounded-md py-4 px-5 mb-4'
					style={{ backgroundColor: '#F8F8F8', borderStyle: 'none', resize: 'none' }}
					rows={8}
					placeholder='შეიყვანეთ ტექსტი'
					value={value}
					onChange={({ target: { value } }) => setValue(value)}
				></textarea>
			</label>
			<ButtonPrimary
				className='w-full bg-successgreen-500'
				textArrangement='text-left'
				onClick={() => onSubmit && onSubmit(value)}
			>
				გაგრძელება
			</ButtonPrimary>
			<div className=''>
				<div className='flex flex-row mt-6 gap-4 block bg-yellow-600	 mb-2 w-full rounded-md p-5'>
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

export default Quizz
