import ButtonPrimary from 'components/Button/ButtonPrimary'
import NcImage from 'components/NcImage/NcImage'

interface Props {
	withPartner?: Boolean
	isPsychiatrist?: Boolean
	isEdu?: Boolean
	isGroup?: Boolean
}

const Success = ({ withPartner = false, isPsychiatrist = false, isEdu = false, isGroup = false }: Props) => {
	return (
		<div className=' bg-white rounded-lg px-10 p-10 dark:bg-neutral-900'>
			<div className='grid grid-cols-4 mb-0'>
				<div className='col-start-2 col-span-2'>
					<NcImage
						src={`https://animuscontent.s3.eu-central-1.amazonaws.com/Signup-Completion-${
							withPartner
								? 'Red'
								: isPsychiatrist
								? 'Yellow'
								: isGroup
								? 'Pink'
								: isEdu
								? 'Green'
								: 'Blue'
						}.png`}
					></NcImage>
				</div>
			</div>
			<h2 className='font-semibold text-3xl mb-2'>
				თქვენ წარმატებით
				<span className='text-yellow-600'>
					{!isEdu && !isGroup ? 'დაჯავშნეთ ვიზიტი' : 'დარეგისტრირდით კურსზე'}
				</span>
			</h2>
			{isGroup || isEdu ? (
				<p>
					თქვენ წარმატებით ჩაეწერეთ ჯგუფში. დამატებით ინფორმაციას მოგაწვდით ანიმუსის მენეჯერი.
					ჯგუფიდან ამოსაწერად გთხოვთ დაგვიკავშირდეთ ნომერზე: +995 32 2112 144
				</p>
			) : (
				<p>
					ვიზიტის შესახებ დეტალები გამოგზავნილია თქვენს მიერ მითითებულ ნომერზე, დამატებითი
					ინფორმაციისთვის გთხოვთ დაუკავშირდეთ ანიმუსის ოპერატორს ნომერზე: +995 32 2112 144
				</p>
			)}
			<div className='grid grid-cols-2 gap-4 mb-4'></div>

			<ButtonPrimary
				href='/'
				className='w-full mt-4'
				textArrangement='text-left'
				bgColor={
					withPartner
						? 'bg-red-500 hover:bg-red-600'
						: isPsychiatrist
						? 'bg-yellow-600 hover:bg-yellow-700'
						: isGroup
						? 'bg-pink-500 hover:bg-pink-600'
						: isEdu
						? 'bg-green-700 hover:bg-green-800'
						: 'bg-primary-6000 hover:bg-primary-700'
				}
				ringColor={
					withPartner
						? 'focus:ring-red-500'
						: isPsychiatrist
						? 'focus:ring-yellow-600'
						: isGroup
						? 'focus:ring-pink-600'
						: isEdu
						? 'focus:ring-green-600'
						: 'focus:ring-primary-6000'
				}
			>
				მთავარ გვერდზე დაბრუნება
			</ButtonPrimary>
		</div>
	)
}

export default Success
