import ButtonPrimary from 'components/Button/ButtonPrimary'
import ButtonQuizz from 'components/Button/ButtonQuizz'
import ButtonSecondary from 'components/Button/ButtonSecondary'
import NcImage from 'components/NcImage/NcImage'


const ResumeQuizz = () => {
	return (
        <div className="min-h-screen bg-primary-100 dark:bg-neutral-800 bg-opacity-25">
            <div className="grid justify-content-center grid-cols-1 xl:grid-cols-4 md:grid-cols-1 lg:grid-cols-1">
            <div className="grid col-start-2 col-span-4 col-end-4 row-start-2 row-end-4">
		<div className=' bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 mt-24'>
        <div className='grid grid-cols-4 mt-4 mb-10'>
				<div className='col-start-2 col-span-2'>
					<NcImage src='https://i.ibb.co/7VsCF3d/psychologist-Frame.png'></NcImage>
				</div>
			</div>
			<h2 className='font-semibold text-2xl'>
				თქვენ გაქვთ დაუსრულებელი კითხვარი
			</h2>
			<div className='grid grid-cols-2 gap-4'></div>

			<ButtonQuizz className='w-full mt-4'>
				გავაგრძელებ კითხვარის შევსებას
			</ButtonQuizz>
            <ButtonSecondary className='w-full mt-4' textArrangement="text-left" sizeClass = "px-4 py-4 sm:px-6">
				თავიდან დავიწყებ კითხვარის შევსებას
			</ButtonSecondary>
		</div>
        </div>
        </div>
        </div>
	)
}

export default ResumeQuizz
