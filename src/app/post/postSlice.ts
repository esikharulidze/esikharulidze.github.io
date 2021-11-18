import { createSlice } from '@reduxjs/toolkit'
import { BackendPost } from 'types'

interface InitialState {
	posts?: BackendPost[]
	currentPost?: BackendPost
}

const initialState: InitialState = {}

const postSlice = createSlice({
	initialState,
	name: 'post',
	reducers: {
		setPosts: (state, { payload }) => {
			state.posts = payload
		},
		setCurrentPost: (state, { payload }) => {
			state.currentPost = payload
		}
	}
})

export const { setPosts, setCurrentPost } = postSlice.actions

export default postSlice.reducer
