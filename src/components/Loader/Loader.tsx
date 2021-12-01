import { useState } from 'react'
import { css } from '@emotion/react'
import PuffLoader from 'react-spinners/PuffLoader'

const override = css`
	display: block;
	margin: 0 auto;
	border-color: #c026d3;
`

interface Props {
	absolute?: boolean
}

const Loader = ({ absolute }: Props) => {
	if (absolute) {
		return (
			<div className='w-screen h-screen fixed flex items-center justify-center z-50 top-0 left-0 bg-white dark:bg-neutral-900'>
				<div className='sweet-loading'>
					<PuffLoader color='#c026d3' loading={true} css={override} size={150} />
				</div>
			</div>
		)
	}
	return (
		<div className='sweet-loading'>
			<PuffLoader color='#c026d3' loading={true} css={override} size={150} />
		</div>
	)
}

export default Loader
