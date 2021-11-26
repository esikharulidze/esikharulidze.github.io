import React, { FC, useCallback, useEffect, useState } from 'react'
import ButtonPrimary from 'components/Button/ButtonPrimary'
import CommentCard, { CommentType } from 'components/CommentCard/CommentCard'
import { BackendComment } from 'types'
import axios from 'utils/axios'

export interface SingleCommentListsProps {
	comments: BackendComment[]
}

const SingleCommentLists: FC<SingleCommentListsProps> = ({ comments }) => {
	let cmtLv1 = comments.filter(item => !item.parent)
	const getComment = useCallback(async () => {}, [])

	const renderCommentItemChild = (comment: BackendComment) => {
		return (
			<li key={comment._id}>
				<CommentCard size='normal' comment={comment} />
				{comment.replies && (
					<ul className='pl-4 mt-5 space-y-5 md:pl-9'>
						{comment.replies.map(renderCommentItemChild)}
					</ul>
				)}
			</li>
		)
	}

	const renderCommentItem = (comment: BackendComment) => {
		// const [backendComment, setBackendComment] = useState<BackendComment>()
		// useEffect(() => {
		// 	;(async () => {
		// 		try {
		// 			const { data } = await axios.get(`comment/${comment._id}`)
		// 			setBackendComment(data)
		// 		} catch (e) {
		// 			console.log(e)
		// 		}
		// 	})()
		// }, [comment])
		return (
			<li key={comment._id}>
				<CommentCard comment={comment} />
				{/* {backendComment && backendComment.replies && (
					<ul className='pl-4 mt-5 space-y-5 md:pl-11'>
						{comment.replies.map(renderCommentItemChild)}
					</ul>
				)} */}
			</li>
		)
	}

	return (
		<ul className='nc-SingleCommentLists space-y-5'>
			{cmtLv1.map(renderCommentItem)}
			{/* <ButtonPrimary className='dark:bg-primary-700 w-full'>მეტი კომენტარის ნახვა</ButtonPrimary> */}
		</ul>
	)
}

export default SingleCommentLists
