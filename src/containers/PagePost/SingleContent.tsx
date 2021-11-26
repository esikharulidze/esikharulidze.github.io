import React, { FC, useCallback, useEffect, useRef } from 'react'
import Tag from 'components/Tag/Tag'
import { SinglePageType } from './PageSingle'
import SingleAuthor from './SingleAuthor'
import SingleCommentForm from './SingleCommentForm'
import SingleCommentLists from './SingleCommentLists'
import SingleContentDemo from './SingleContentDemo'
import { useLocation } from 'react-router'
import { BackendPost } from 'types'
import axios from 'utils/axios'
import { useDispatch } from 'react-redux'
import { setCurrentPost } from 'app/post/postSlice'

export interface SingleContentProps {
	data: BackendPost
}

const SingleContent: FC<SingleContentProps> = ({ data }) => {
	const { author, comments, content, _id } = data
	const dispatch = useDispatch()
	const commentRef = useRef<HTMLDivElement>(null)
	//
	const location = useLocation()

	useEffect(() => {
		//  SCROLL TO COMMENT AREA
		if (location.hash !== '#comment') {
			return
		}
		//
		if (location.hash === '#comment') {
			setTimeout(() => {
				if (commentRef.current) {
					commentRef.current.scrollIntoView()
				}
			}, 500)
		}
	}, [location])

	const commentToPost = useCallback(async (author: string, content: string, commentId?: string) => {
		try {
			const { data } = await axios.patch('post/comment', {
				postId: _id,
				author,
				content
			})
			dispatch(setCurrentPost(data))
		} catch (e) {
			console.log(e)
		}
	}, [])

	return (
		<div className='nc-SingleContent space-y-10'>
			{/* ENTRY CONTENT */}
			<div
				id='single-entry-content'
				className='prose prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-dark'
			>
				{/* THIS IS THE DEMP CONTENT */}
				{/* IF YOUR DATA IS JSON, YOU CAN USE render with html-react-parser (https://www.npmjs.com/package/html-react-parser) */}
				{content ? <div dangerouslySetInnerHTML={{ __html: content }}></div> : <></>}
			</div>

			{/* TAGS */}
			{/* <div className="max-w-screen-md mx-auto flex flex-wrap">
        {tags.map((item) => (
          <Tag hideCount key={item.id} tag={item} className="mr-2 mb-2" />
        ))}
      </div> */}

			{/* AUTHOR */}
			<div className='max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700'></div>
			<div className='max-w-screen-md mx-auto '>
				<SingleAuthor author={author} />
			</div>

			{/* COMMENT FORM */}
			<div id='comment' ref={commentRef} className='max-w-screen-md mx-auto pt-5'>
				<h3 className='text-xl font-semibold text-neutral-800 dark:text-neutral-200'>
					კომენტარები ({comments.length})
				</h3>
				<SingleCommentForm onClickSubmit={commentToPost} onClickCancel={id => console.log(id)} />
			</div>

			{/* COMMENTS LIST */}
			<div className='max-w-screen-md mx-auto'>
				<SingleCommentLists comments={comments} />
			</div>
		</div>
	)
}

export default SingleContent
