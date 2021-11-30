import ButtonPrimary from 'components/Button/ButtonPrimary'
import NcImage from 'components/NcImage/NcImage'

const Success = () => {
	return (
		<div className=' bg-white rounded-lg px-10 p-10 dark:bg-neutral-900'>
			<div className='grid grid-cols-4 mt-4 mb-0'>
				<div className='col-start-2 col-span-2'>
					{/* <NcImage src='https://i.ibb.co/7W4LJDQ/psychologist-Animus-Bust-2.png'></NcImage> */}
				</div>
			</div>
			<h2 className='font-semibold text-3xl mb-2'>
				ვიზიტი <span className='text-yellow-600'>წარმატებით ჩაინიშნა</span>
			</h2>
			<p>
				ვიზიტის შესახებ დეტალები გამოგზავნილია თქვენს მიერ მითითებულ ნომერზე, დამატებითი
				ინფორმაციისთვის გთხოვთ დაუკავშირდეთ ანიმუსის ოპერატორს ნომერზე: +995 32 2112 144
				{/* <span className='text-successgreen-500'>70₾</span> */}
			</p>
			<div className='grid grid-cols-2 gap-4 mb-4'></div>

			<ButtonPrimary href='/' className='w-full mt-4' textArrangement='text-left'>
				მთავარ გვერდზე დაბრუნება
			</ButtonPrimary>
		</div>
	)
}

export default Success
