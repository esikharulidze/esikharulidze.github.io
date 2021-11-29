import React, { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	sizeClass?: string
	fontClass?: string
	rounded?: string
	error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className = '',
			sizeClass = 'h-11 px-4 py-3',
			fontClass = 'text-sm font-normal',
			rounded = 'rounded-lg',
			children,
			type = 'text',
			error = false,
			...args
		},
		ref
	) => {
		return (
			<input
				ref={ref}
				type={type}
				className={`block w-full focus:ring focus:ring-opacity-50 bg-white dark:focus:ring-opacity-25 dark:bg-neutral-900 ${rounded} ${fontClass} ${sizeClass} ${className} ${
					error
						? 'border-red-500 focus:border-red-600 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-700'
						: 'border-neutral-200 focus:border-primary-300 focus:ring-primary-200 dark:border-neutral-700 dark:focus:ring-primary-6000'
				}`}
				{...args}
			/>
		)
	}
)

export default Input
