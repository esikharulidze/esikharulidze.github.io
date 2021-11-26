import ButtonPrimary from 'components/Button/ButtonPrimary'
import NcImage from 'components/NcImage/NcImage'

interface Props {
	onSubmit: () => void
	withPartner?: Boolean
	isPsychiatrist?: Boolean
}

const AccountSuccess = ({ onSubmit, withPartner=false, isPsychiatrist=false }: Props) => {
	return (
		<div className=' bg-white rounded-lg px-10 p-10 dark:bg-neutral-900'>
			<div className='grid grid-cols-4 mt-4 mb-8'>
				<div className='col-start-2 col-span-2'>
					<NcImage src='https://i.ibb.co/7W4LJDQ/psychologist-Animus-Bust-2.png'></NcImage>
				</div>
			</div>
			<h2 className='font-semibold text-2xl mb-4'>
				თქვენი ანგარიში <span className='text-successgreen-500'>წარმატებით შეიქმნა</span>
			</h2>
			<h3>
				ფსიქოლოგთან ვიზიტის საფასურია
				<span className='text-successgreen-500'> 70₾</span>
			</h3>
			<div className='grid grid-cols-2 gap-4'></div>

			<ButtonPrimary className='w-full mt-4' textArrangement='text-left' 
			bgColor={withPartner ? "bg-red-500 hover:bg-red-600" : isPsychiatrist ? "bg-yellow-600 hover:bg-yellow-700" :"bg-primary-6000 hover:bg-primary-700"} onClick={onSubmit}
			ringColor={withPartner ? "focus:ring-red-500" : isPsychiatrist ? "focus:ring-yellow-600": "focus:ring-primary-6000"}
			>
				შემდეგი ნაბიჯი
			</ButtonPrimary>
		</div>
	)
}

export default AccountSuccess
