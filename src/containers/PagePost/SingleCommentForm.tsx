import React, { FC, useState } from 'react'
import ButtonPrimary from 'components/Button/ButtonPrimary'
import ButtonSecondary from 'components/Button/ButtonSecondary'
import Textarea from 'components/Textarea/Textarea'
import Input from 'components/Input/Input'
import { useAppSelector } from 'app/hooks'

export interface SingleCommentFormProps {
	className?: string
	commentId?: number
	onClickSubmit: (author: string, content: string, id?: string) => void
	onClickCancel: (id?: number) => void
	textareaRef?: React.MutableRefObject<null>
	defaultValue?: string
	rows?: number
}

const SingleCommentForm: FC<SingleCommentFormProps> = ({
	className = 'mt-5',
	commentId,
	onClickSubmit,
	onClickCancel,
	textareaRef,
	defaultValue = '',
	rows = 4
}) => {
	const { customer } = useAppSelector(state => state.auth)
	const [nameState, setNameState] = useState('')
	const [content, setContent] = useState('')
	return (
		<form action='#' className={`nc-SingleCommentForm ${className}`} onSubmit={e => e.preventDefault()}>
			{customer ? null : (
				<Input
					placeholder='სახელი'
					className='mb-4'
					value={nameState}
					onChange={({ target: { value } }) => setNameState(value)}
				/>
			)}
			<Textarea
				placeholder='ჩაერთეთ დისკუსიაში'
				ref={textareaRef}
				required={true}
				defaultValue={defaultValue}
				rows={rows}
				value={content}
				onChange={({ target: { value } }) => setContent(value)}
			/>
			<div className='mt-2 space-x-3'>
				<ButtonPrimary
					onClick={() => onClickSubmit(customer ? customer.firstName : nameState, content)}
					type='submit'
				>
					დააფიქსირეთ თქვენი აზრი
				</ButtonPrimary>
				{/* <ButtonSecondary type='button' onClick={() => onClickCancel(commentId)}>
					გაუქმება
				</ButtonSecondary> */}
			</div>
		</form>
	)
}

export default SingleCommentForm
