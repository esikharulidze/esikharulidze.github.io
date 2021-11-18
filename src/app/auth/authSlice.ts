import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { BackendCustomer } from 'types'
import axios from 'utils/axios'

interface InitialState {
	customer?: BackendCustomer
}

const initialState: InitialState = {}

export const login = (username: string, password: string) => async (dispatch: Dispatch) => {
	try {
		console.log(username, 'bijooo')
		const { data } = await axios.post<any, AxiosResponse<{ token: string }>>('customer/login', {
			username,
			password
		})
		localStorage.setItem('customer-token', data.token)
		const customerProfile = await axios.get('customer/profile')
		dispatch(setCustomer(customerProfile.data))
	} catch (e) {
		console.log(e)
	}
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCustomer: (state, { payload }: PayloadAction<BackendCustomer | undefined>) => {
			state.customer = payload
			if (!payload) {
				localStorage.removeItem('customer-token')
			}
		}
	}
})

export const { setCustomer } = authSlice.actions

export default authSlice.reducer
