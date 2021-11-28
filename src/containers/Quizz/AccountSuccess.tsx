import ButtonPrimary from 'components/Button/ButtonPrimary'
import NcImage from 'components/NcImage/NcImage'

interface Props {
	onSubmit: () => void
	withPartner?: Boolean
	isPsychiatrist?: Boolean
	isEdu?: Boolean
	isGroup?: Boolean
}

const AccountSuccess = ({
	onSubmit,
	withPartner = false,
	isPsychiatrist = false,
	isEdu = false,
	isGroup = false
}: Props) => {
	return (
		<div className=' bg-white rounded-lg px-10 p-10 dark:bg-neutral-900'>
			<div className='grid grid-cols-4 mt-4 mb-8'>
				<div className='col-start-2 col-span-2'>
					<NcImage src='https://i.ibb.co/7W4LJDQ/psychologist-Animus-Bust-2.png'></NcImage>
				</div>
			</div>
			<h2 className='font-bold text-3xl mb-2'>
				ანგარიში <span className='text-yellow-600'>წარმატებით შეიქმნა</span>
			</h2>
			<p className='mb-4'>
				ანუ, თქვენ გადადგით პირველი ნაბიჯი საკუთარ თავზე სამუშაოდ!
				{/* <span className='text-successgreen-500'> 70₾</span> */}
			</p>
			<div className='grid grid-cols-2 gap-4'></div>

			<ButtonPrimary
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
				onClick={onSubmit}
			>
				შემდეგი ნაბიჯი
			</ButtonPrimary>
		</div>
	)
}

export default AccountSuccess
