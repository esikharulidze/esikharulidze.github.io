import React, { FC, useEffect, useState } from 'react'
import PostCardCommentBtn from '../PostCardCommentBtn/PostCardCommentBtn'
import PostCardLikeContainer from '../../containers/PostCardLikeContainer/PostCardLikeContainer'
import { BackendPost } from '../../types'
import { useAppSelector } from 'app/hooks'

export interface PostCardLikeAndCommentProps {
	className?: string
	itemClass?: string
	postData: Pick<BackendPost, 'likes' | '_id' | 'comments'>
	hiddenCommentOnMobile?: boolean
	onClickLike?: (id: string | number) => void
}

const PostCardLikeAndComment: FC<PostCardLikeAndCommentProps> = ({
	className = '',
	itemClass = 'px-3 h-8 text-xs',
	hiddenCommentOnMobile = true,
	postData,
	onClickLike = () => {}
}) => {
	const { customer } = useAppSelector(state => state.auth)

	const like = {
		count: postData.likes.length,
		isLiked: !!postData.likes.filter(l => (customer ? l._id === customer._id : false)).length
	}

	console.log(postData.likes.length)
	// const [like, setLike] = useState({
	// 	count: postData.likes.length,
	// 	isLiked: !!postData.likes.filter(l => l._id === customer?._id).length
	// })

	// useEffect(() => {
	// 	setLike({
	// 		count: postData.likes.length,
	// 		isLiked: !!postData.likes.filter(l => l._id === customer?._id).length
	// 	})
	// }, [customer])

	return (
		<div
			className={`nc-PostCardLikeAndComment flex items-center space-x-2 ${className}`}
			data-nc-id='PostCardLikeAndComment'
		>
			<PostCardLikeContainer
				className={itemClass}
				like={like}
				onClickLike={onClickLike}
				postId={postData._id}
			/>
			<PostCardCommentBtn
				href={''}
				commentCount={postData.comments.length}
				className={`${hiddenCommentOnMobile ? 'hidden sm:flex' : 'flex'}  ${itemClass}`}
			/>
		</div>
	)
}

export default PostCardLikeAndComment
