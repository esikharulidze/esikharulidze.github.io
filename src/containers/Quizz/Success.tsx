import ButtonPrimary from 'components/Button/ButtonPrimary'
import NcImage from 'components/NcImage/NcImage'

const Success = () => {
	return (
		<div className=' bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 mt-24'>
			<div className='grid grid-cols-4 mt-4 mb-8'>
				<div className='col-start-2 col-span-2'>
					<NcImage src='https://i.ibb.co/7W4LJDQ/psychologist-Animus-Bust-2.png'></NcImage>
				</div>
			</div>
			<h2 className='font-semibold text-2xl mb-4'>
				თქვენი ვიზიტი <span className='text-successgreen-500'>წარმატებით ჩაინიშნა</span>
			</h2>
			<h3>
				ვიზიტის შესახებ დამატებით ინფორმაციას მიიღებთ ტელეფონის საშვალებით
				{/* <span className='text-successgreen-500'>70₾</span> */}
			</h3>
			<div className='grid grid-cols-2 gap-4'></div>

			{/* <ButtonPrimary className='w-full mt-4' textArrangement='text-left'>
				შემდეგი ნაბიჯი
			</ButtonPrimary> */}
		</div>
	)
}

export default Success
