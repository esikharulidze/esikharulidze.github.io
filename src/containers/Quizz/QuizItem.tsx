import { AxiosResponse } from 'axios'
import ButtonSecondary from 'components/Button/ButtonSecondary'
import LayoutPage from 'components/LayoutPage/LayoutPage'
import ModalCourse from 'components/ModalCourse/ModalCourse'
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BackendCourse } from 'types'
import axios from 'utils/axios'
import { useHistory } from 'react-router-dom'
import DropDown from 'components/DropDown'
import Label from 'components/Label/Label'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Heading2 from 'components/Heading/Heading2'
import ButtonQuizz from 'components/Button/ButtonQuizz'
import NameInputContainer from './NameInputContainer'

export interface ServiceInnerProps {
	question?: Question
	onSubmit?: (val: string[]) => void
	withPartner?: Boolean
	isPsychiatrist?: Boolean
	isEdu?: Boolean
	isGroup?: Boolean
}

const services = {
	individual: 0,
	adults: 1,
	teens: 2,
	kids: 3
}

const QuizzV2: FC<ServiceInnerProps> = ({
	question,
	onSubmit,
	withPartner = false,
	isPsychiatrist = false,
	isEdu = false,
	isGroup = false
}) => {
	const [course, setCourse] = useState<BackendCourse>()
	const { slag, slug } = useParams<{ slag: string; slug: 'individual' | 'adults' | 'teens' | 'kids' }>()
	const [isReporting, setIsReporting] = useState(false)
	const openModalReportComment = () => setIsReporting(true)
	const closeModalReportComment = () => setIsReporting(false)

	const [selectedCourse, setSelectedCourse] = useState<BackendCourse>()
	const history = useHistory()

	const [checkedAnswers, setCheckedAnswers] = useState(new Set<string>())

	useEffect(() => {
		window.scrollTo({ top: 80 })
	}, [])

	const renderContent = (givenQuestion: Question) => {
		const namePlaceholder = givenQuestion.isPartnerNameInput
			? 'თქვენი პარტნიორის სახელი'
			: givenQuestion.forElse
			? 'პაციენტის სახელი'
			: givenQuestion.underage
			? 'შენი სახელი'
			: givenQuestion.question.includes('შვილ')
			? 'თქვენი შვილის სახელი'
			: 'თქვენი სახელი'

		const lastNamePlaceholder = givenQuestion.isPartnerNameInput
			? 'თქვენი პარტნიორის გვარი'
			: givenQuestion.forElse
			? 'პაციენტის გვარი'
			: givenQuestion.underage
			? 'შენი გვარი'
			: givenQuestion.question.includes('შვილ')
			? 'თქვენი შვილის გვარი'
			: 'თქვენი გვარი'

		const nameInputPlaceholder = givenQuestion.couple
			? 'ჩაწერეთ თქვენი სახელი ან ზედმეტსახელი'
			: givenQuestion.isPartnerNameInput
			? 'ჩაწერეთ პარტნიორის სახელი ან ზედმეტსახელი'
			: givenQuestion.forMe
			? 'ჩაწერეთ თქვენი სახელი ან ზედმეტსახელი'
			: givenQuestion.forElse
			? 'ჩაწერეთ სახელი'
			: givenQuestion.underage
			? 'ჩაწერე სახელი ან ზედმეტსახელი'
			: givenQuestion.question.includes('შვილ')
			? 'თქვენი შვილის გვარი'
			: 'ჩაწერეთ სახელი ან ზედმეტსახელი'

		const lastNameInputPlaceholder = givenQuestion.couple
			? 'ჩაწერეთ თქვენი გვარი'
			: givenQuestion.isPartnerNameInput
			? 'ჩაწერეთ პარტნიორის გვარი'
			: givenQuestion.forMe
			? 'ჩაწერეთ თქვენი გვარი'
			: givenQuestion.forElse
			? 'ჩაწერეთ გვარი'
			: givenQuestion.underage
			? 'ჩაწერე გვარი'
			: givenQuestion.question.includes('შვილ')
			? 'ჩაწერეთ გვარი'
			: 'ჩაწერეთ გვარი'
		return (
			<NameInputContainer
				namePlaceholder={namePlaceholder}
				lastNamePlaceholder={lastNamePlaceholder}
				nameInputPlaceholder={nameInputPlaceholder}
				lasNameInputPlaceholder={lastNameInputPlaceholder}
				withPartner={withPartner}
				isPsychiatrist={isPsychiatrist}
				isEdu={isEdu}
				isGroup={isGroup}
				onSubmit={(val: string) => (onSubmit ? onSubmit([val]) : {})}
			/>
		)
	}

	return (
		//     <div className="min-h-screen bg-primary-100 dark:bg-neutral-800 bg-opacity-25">
		//     <div className="grid justify-content-center grid-cols-1 xl:grid-cols-4 md:grid-cols-1 lg:grid-cols-1">
		//       <div className="grid col-start-2 col-span-4 col-end-4 row-start-2 row-end-4">

		//       <header className="text-center mt-24 mb-10">
		//           <h1 className="text-4xl font-semibold">☂️ პირველი ახალი ნაბიჯი
		// </h1>

		//             <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200 mb-10">
		//             რომელიც ვფიქრობთ დაგეხმარება და უკეთ გაგრძნობინებს თავს.
		//             </span>

		//         </header>

		<div className=' bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 '>
			<h2 className='font-semibold text-2xl mb-4'>{question ? question.question : 'loading'}</h2>

			{question && question.multiple ? (
				<div className='space-y-5'>
					{question.answers.map(answer => (
						<div key={answer._id}>
							<label className='inline-flex items-center'>
								<input
									type='checkbox'
									className={`rounded cursor-pointer ${withPartner ? 'checked:bg-red-500 hover:checked:bg-red-500 focus:checked:bg-red-500 focus:ring-red-500': isPsychiatrist ? "checked:bg-yellow-600 hover:checked:bg-yellow-600 focus:checked:bg-yellow-600 focus:ring-yellow-600": isGroup ? "checked:bg-pink-600 hover:checked:bg-pink-600 focus:checked:bg-pink-600 focus:ring-pink-600" : isEdu ? "checked:bg-green-600 hover:checked:bg-green-500 focus:checked:bg-green-500 focus:ring-green-500" : ""}`}
									checked={checkedAnswers.has(answer._id)}
									onClick={() =>
										checkedAnswers.has(answer._id)
											? setCheckedAnswers(
													prev =>
														new Set(
															[...Array.from(prev)].filter(
																a => a !== answer._id
															)
														)
											  )
											: setCheckedAnswers(
													prev => new Set(checkedAnswers.add(answer._id))
											  )
									}
								/>
								<span className='ml-2 font-medium text-neutral-700 dark:text-neutral-200'>
									{answer.answer}
								</span>
							</label>
						</div>
					))}
					{checkedAnswers.size ? (
						<ButtonQuizz
							className='w-full rounded-lg mt-8'
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
							onClick={() =>
								question.multiple && onSubmit && onSubmit(Array.from(checkedAnswers))
							}
						>
							შემდეგი ნაბიჯი
						</ButtonQuizz>
					) : null}
				</div>
			) : (
				<div
					// className={`grid grid-cols-1 gap-2 ${
					// 	question && question.answers.length > 3 ? 'sm:gird-cols-2  md:gird-cols-2' : ''
					// }`}

					className={
						question && question.answers.length > 3
							? 'grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-2'
							: 'grid grid-cols-1 gap-2'
					}
				>
					{question
						? question.answers.length
							? question.answers.map(answer => (
									<ButtonQuizz
										key={answer._id}
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
										className='w-full rounded-lg text-left'
										onClick={() => {
											!question.multiple && onSubmit && onSubmit([answer._id])
										}}
									>
										{answer.answer}
									</ButtonQuizz>
							  ))
							: renderContent(question)
						: null}
				</div>
			)}

			{/* <ButtonQuizz className="w-full rounded-lg text-left" onClick={() => onChoose&& onChoose('first')}>{psychiatrist ? 'მსურს ვიზიტი დავჯავშნო ჩემთვის' : 'ინდივიდუალური ვიზიტი ფსიქოლოგთან'}</ButtonQuizz>
        <ButtonQuizz className="w-full rounded-lg text-left" onClick={() => onChoose&& onChoose('second')}>{psychiatrist ? 'მსურს ვიზიტი დავჯავშნო სხვისთვის' : 'წყვილების თერაპია ფსიქოლოგთან'}</ButtonQuizz> */}

			{!isEdu ? (
				<div className='mt-5'>
					<div
						className={
							isPsychiatrist
								? 'flex flex-row gap-4 block bg-red-500 mb-2 w-full rounded-md p-5'
								: isGroup
								? 'flex flex-row gap-4 block bg-red-500 mb-2 w-full rounded-md p-5'
								: 'flex flex-row gap-4 block bg-yellow-600 mb-2 w-full rounded-md p-5'
						}
					>
						<div>
							<svg
								width='40'
								height='40'
								viewBox='0 0 48 48'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z'
									fill={isPsychiatrist ? '#dc3c3c' : isGroup ? '#dc3c3c' : '#BA7F02'}
								/>
								<path
									d='M24 32V24'
									stroke='white'
									stroke-width='4'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M24 16H24.0204'
									stroke='white'
									stroke-width='4'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</div>
						<p className='text-white md:text-sm lg:text-sm'>
							კითხვარს გაეცნობა მხოლოდ თქვენ მიერ არჩეული სპეციალისტი, რათა შემოგთავაზოთ თქვენზე
							მორგებული თერაპია ან მკურნალობა. კონფიდენციალურობის პოლიტიკა{' '}
							<a
								className='font-semibold'
								target='_blank'
								href='https://animus.ge/privacy-policy'
							>
								იხილეთ ბმულზე.
							</a>
						</p>
					</div>
				</div>
			) : null}
		</div>
		//   </div>
		// </div>
		// </div>
	)
}

export default QuizzV2
