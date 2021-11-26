import React, { FC, useState } from 'react'
import ButtonPrimary from 'components/Button/ButtonPrimary'
import ButtonSecondary from 'components/Button/ButtonSecondary'
import Textarea from 'components/Textarea/Textarea'
import { useAppSelector } from 'app/hooks'
import Input from 'components/Input/Input'

export interface SingleCommentFormProps {
	className?: string
	commentId?: string
	onClickSubmit: (author: string, content: string, id: string) => void
	onClickCancel: (id?: string) => void
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
	const [name, setName] = useState('')
	const [content, setContent] = useState('')
	return (
		<form action='#' className={`nc-SingleCommentForm ${className}`} onSubmit={e => e.preventDefault()}>
			{customer ? null : (
				<Input
					placeholder='სახელი'
					value={name}
					onChange={({ target: { value } }) => setName(value)}
				/>
			)}
			<Textarea
				placeholder='Add to discussion'
				ref={textareaRef}
				required={true}
				defaultValue={defaultValue}
				rows={rows}
				value={content}
				onChange={({ target: { value } }) => setContent(value)}
			/>
			<div className='mt-2 space-x-3'>
				<ButtonPrimary
					onClick={() => onClickSubmit(customer ? customer.firstName : name, content, commentId!)}
					type='submit'
				>
					დამატება
				</ButtonPrimary>
				<ButtonSecondary type='button' onClick={() => onClickCancel(commentId)}>
					უკან
				</ButtonSecondary>
			</div>
		</form>
	)
}

export default SingleCommentForm
