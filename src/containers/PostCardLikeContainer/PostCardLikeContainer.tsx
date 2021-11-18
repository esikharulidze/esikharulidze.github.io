import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import {
	selectRecentLikeds,
	selectRecentRemoveds,
	removeLikedByPostId,
	addNewLikedByPostId
} from 'app/postLikes/postLikes'

import { PostDataType } from 'data/types'
import PostCardLikeAction, { PostCardLikeActionProps } from 'components/PostCardLikeAction/PostCardLikeAction'
import axios from 'utils/axios'
import { setCurrentPost } from 'app/post/postSlice'
import { changeCurrentPage } from 'app/pages/pages'
import { useHistory } from 'react-router'

export interface PostCardLikeContainerProps extends Omit<PostCardLikeActionProps, 'isLiked' | 'likeCount'> {
	like: PostDataType['like']
}

const PostCardLikeContainer: FC<PostCardLikeContainerProps> = ({ like, postId, onClickLike, ...args }) => {
	const recentLikeds = useAppSelector(selectRecentLikeds)
	const recentRemoveds = useAppSelector(selectRecentRemoveds)
	const dispatch = useAppDispatch()
	const history = useHistory()

	const isLiked = () => {
		if (recentLikeds.includes(postId)) {
			return true
		}
		if (like.isLiked && !recentRemoveds.includes(postId)) {
			return true
		}
		return false
	}

	const getLikeCount = (): number => {
		// Recent Liked

		return like.count
	}

	const handleClickLike = async () => {
		try {
			await axios.patch(`post/like/${postId}`).then(({ data }) => {
				dispatch(setCurrentPost(data))
				dispatch(changeCurrentPage({ type: '/post/:slug', data }))
			})
			if (isLiked()) {
				dispatch(removeLikedByPostId(postId))
			} else {
				dispatch(addNewLikedByPostId(postId))
			}
			onClickLike && onClickLike(postId)
		} catch (e) {
			history.push('/login')
		}
	}

	console.log(like)

	return (
		<PostCardLikeAction
			{...args}
			isLiked={isLiked()}
			likeCount={getLikeCount()}
			postId={postId}
			onClickLike={handleClickLike}
		/>
	)
}

export default PostCardLikeContainer
