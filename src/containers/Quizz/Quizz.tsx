import { AxiosResponse } from 'axios'
import ButtonPrimary from 'components/Button/ButtonPrimary'
import ButtonSecondary from 'components/Button/ButtonSecondary'
import LayoutPage from 'components/LayoutPage/LayoutPage'
import ModalCourse from 'components/ModalCourse/ModalCourse'
import React, { FC, useEffect, useState, useCallback, useMemo } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import { BackendCourse, BackendSurvey } from 'types'
import axios from 'utils/axios'
import { DropDown } from './components'
import Label from 'components/Label/Label'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Heading2 from 'components/Heading/Heading2'
import ButtonQuizz from 'components/Button/ButtonQuizz'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import QuizItem from './QuizItem'
import Comment from './Comment'
import Calendar from './Calendar'
import CreateOrNotQuestion from './CreateOrNotQuestion'
import Contact from './Contact'
import ChoosePaymentMethod from './ChoosePaymentMethod'
import Success from './Success'
import CustomerName from './CustomerName'
import CustomerPassword from './CustomerPassword'
import AccountSuccess from './AccountSuccess'
import RepeatSurvey from './RepeatSurvey'
import { useAppSelector } from 'app/hooks'
import PhoneValidation from 'components/PhoneValidation/PhoneValidation'
import Loader from 'components/Loader/Loader'
import { Helmet } from 'react-helmet'

export interface ServiceInnerProps {
	className?: string
}

function useQuery() {
	const { search } = useLocation()

	return useMemo(() => new URLSearchParams(search), [search])
}

const Quizz: FC<ServiceInnerProps> = ({ className = '' }) => {
	const [course, setCourse] = useState<BackendCourse>()
	const query = useQuery()
	const { slug } = useParams<{ slug: 'psychologist' | 'psychiatrist' | 'grouptherapy' | 'educational' }>()
	const [isReporting, setIsReporting] = useState(false)
	const openModalReportComment = () => setIsReporting(true)
	const closeModalReportComment = () => setIsReporting(false)
	const [withPartner, setWithPartner] = useState(false)
	const isPsychiatrist = slug === 'psychiatrist'
	const isGroup = slug === 'grouptherapy'
	const isEdu = slug === 'educational'
	const [partner, setPartner] = useState<number>()
	const [age, setAge] = useState<number>()
	const [forElse, setForElse] = useState(false)
	const [step, setStep] = useState(1)
	const [appointmentId, setAppointmentId] = useState()

	const [currentQuestion, setCurrentQuestion] = useState<Question>()
	const [surveyId, setSurveyId] = useState('')

	const [customerFirstName, setCustomerFirstName] = useState('')
	const [customerLastName, setCustomerLastName] = useState('')

	const [customerEmail, setCustomerEmail] = useState('')
	const [customerPhone, setCustomerPhone] = useState('')
	const [showValidation, setShowValidation] = useState('')
	const [savedCustomerId, setSavedCustomerId] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const { customer } = useAppSelector(state => state.auth)

	// useEffect(() => {
	//   (async () => {
	//     try {
	//       await axios.get<any, AxiosResponse<BackendCourse>>(`course/${slag}`).then(({data}) => {
	//         setCourse(data)
	//       })
	//     } catch(e) {
	//       console.log(e)
	//     }
	//   })()
	// }, [])

	const startQuiz = useCallback(async () => {
		try {
			setStep(3)
			setIsLoading(true)
			const { data } = await axios.get<any, AxiosResponse<{ question: any; surveyId: string }>>(
				`survey/start/${slug}?age=${age}&forElse=${forElse}${partner ? '&partner=' + partner : ''}${
					query.get('course') ? '&course=' + query.get('course') : ''
				}`
			)
			setIsLoading(false)
			setSurveyId(data.surveyId)
			setCurrentQuestion(data.question)
		} catch (e) {
			setIsLoading(false)
			console.log(e)
		}
	}, [age, slug, partner])

	const resumeQuiz = useCallback(
		async (answerIds: string[]) => {
			try {
				setError('')
				setIsLoading(true)
				const { data } = await axios.patch<any, AxiosResponse<Question | { age: number }>>(
					`survey/continue/${surveyId}`,
					{
						questionId: currentQuestion!._id,
						answerIds: answerIds
					}
				)
				setIsLoading(false)
				if ('age' in data) {
					setStep(4)
				} else {
					setCurrentQuestion(data)
				}
			} catch (e) {
				setIsLoading(false)
				setError('ამ მონაცემებით მომხმარებელი უკვე არსებობს')
				console.log(e)
			}
		},
		[surveyId, currentQuestion]
	)

	const onFirstStepChoice = useCallback(
		(val: 'first' | 'second') => {
			if (val === 'second') {
				if (slug === 'psychiatrist') {
					setForElse(true)
				} else if (slug === 'psychologist') {
					setWithPartner(true)
				}
			}
			setStep(2)
		},
		[slug]
	)

	useEffect(() => {
		;(async () => {
			try {
				if (customer) {
					setIsLoading(true)
					const { data } = await axios.get<any, AxiosResponse<BackendSurvey>>(
						`customer/check-survey/${slug}`
					)
					console.log(data)
					setIsLoading(false)
					setSurveyId(data._id)
					setStep(0)
				}
			} catch (e) {
				setIsLoading(false)
			}
		})()
	}, [customer, slug])

	useEffect(() => {
		if (slug === 'grouptherapy' || slug === 'educational') {
			setStep(2)
		}
	}, [slug])

	const onComment = useCallback(
		async val => {
			try {
				setIsLoading(true)
				await axios.patch('survey/comment', { comment: val, surveyId })
				setIsLoading(false)
				if (query.get('course')) {
					if (customer) {
						setStep(8)
					} else {
						setStep(6)
					}
				} else {

					setStep(5)
				}
			} catch (e) {
				setIsLoading(false)
				console.log('err')
			}
		},
		[surveyId]
	)

	const onDateChoose = useCallback(
		async ({ therapistId, ...rest }: { therapistId: string; date: string; hour: string }) => {
			try {
				setIsLoading(true)
				const { data } = await axios.put(`user/reserve/${therapistId}`, {
					...rest,
					surveyId,
					customerId: customer ? customer._id : undefined
				})
				setIsLoading(false)
				setAppointmentId(data)
				if (customer) {
					setStep(8)
				} else {
					setStep(6)
				}
			} catch (e) {
				setIsLoading(false)
				console.log(e, 'errrrr')
			}
		},
		[surveyId, customer]
	)

	const onCreateAccountChoose = useCallback((guest?: boolean) => {
		if (guest) {
			setStep(7)
		} else {
			setStep(10)
		}
	}, [])

	const onCustomerNameChange = useCallback(
		({ firstName, lastName }: { firstName: string; lastName: string }) => {
			setCustomerFirstName(firstName)
			setCustomerLastName(lastName)
			setStep(7)
		},
		[]
	)

	const onCustomerPassword = useCallback(
		async (val: string) => {
			try {
				setIsLoading(true)
				const { data } = await axios.put('customer/password', {
					password: val,
					customerId: savedCustomerId
				})
				setIsLoading(false)
				localStorage.setItem('customer-token', data.token)
				setStep(12)
			} catch (e) {
				setIsLoading(false)
				console.log(e)
			}
		},
		[savedCustomerId]
	)

	const onContactSubmit = useCallback(
		async (val: { email: string; phone: string }) => {
			try {
				setCustomerEmail(val.email)
				setCustomerPhone(val.phone)
				setIsLoading(true)
				await axios.patch('survey/contact', {
					surveyId,
					...val
				})
				if (customerFirstName) {
					const { data } = await axios.post('customer', {
						firstName: customerFirstName,
						lastName: customerLastName,
						phone: val.phone,
						email: val.email,
						surveyId,
						appointmentId
					})
					setSavedCustomerId(data._id)
					setShowValidation(val.phone.slice(-3))
				} else {
					setStep(8)
				}
				setIsLoading(false)
			} catch (e) {
				setIsLoading(false)
				console.log(e)
			}
		},
		[surveyId, customerFirstName, customerLastName, appointmentId]
	)

	const onAccountSuccessContinue = useCallback(() => {
		setStep(8)
	}, [])

	const onPaymentChoose = useCallback(
		async (cash?: boolean) => {
			try {
				setIsLoading(true)
				await axios.patch('appointment/payment-method', {
					appointmentId,
					paymentMethod: cash ? 'cash' : 'card'
				})
				setIsLoading(false)
				if (cash) {
					setStep(9)
				}
			} catch (e) {
				setIsLoading(false)
				console.log(e)
			}
		},
		[appointmentId]
	)

	const onRepeatSurvey = useCallback((val?: boolean) => {
		if (val) {
			setStep(1)
		} else {
			setStep(5)
		}
	}, [])

	useEffect(() => {
		;(async () => {
			try {
				if (step === 9) {
					setIsLoading(true)
					await axios.get(`appointment/success/${appointmentId}`)
					setIsLoading(false)
				}
			} catch (e) {
				setIsLoading(false)
				console.log(e)
			}
		})()
	}, [slug, step, appointmentId])

	const renderContent = () => {
		switch (step) {
			case 1:
				return (
					<FirstStep
						psychiatrist={isPsychiatrist}
						isGroup={isGroup}
						isEdu={isEdu}
						onChoose={onFirstStepChoice}
					/>
				)
			case 2:
				return (
					<SecondStep
						onSubmit={startQuiz}
						forMe={slug === 'psychiatrist' && forElse === false}
						withPartner={withPartner}
						isPsychiatrist={isPsychiatrist}
						isGroup={isGroup}
						isEdu={isEdu}
						forElse={forElse}
						setAge={setAge}
						setPartner={setPartner}
						age={age}
						partner={partner}
					/>
				)
			case 3:
				return (
					<QuizItem
						question={currentQuestion}
						withPartner={withPartner}
						onSubmit={resumeQuiz}
						isPsychiatrist={isPsychiatrist}
						isEdu={isEdu}
						isGroup={isGroup}
					/>
				)
			case 4:
				return (
					<Comment
						onSubmit={onComment}
						withPartner={withPartner}
						isPsychiatrist={isPsychiatrist}
						isEdu={isEdu}
						isGroup={isGroup}
					/>
				)
			case 5:
				return (
					<Calendar
						onSubmit={onDateChoose}
						type={slug}
						withPartner={withPartner}
						isPsychiatrist={isPsychiatrist}
						isEdu={isEdu}
						isGroup={isGroup}
					/>
				)
			case 6:
				return (
					<CreateOrNotQuestion
						onSubmit={onCreateAccountChoose}
						withPartner={withPartner}
						isPsychiatrist={isPsychiatrist}
						isEdu={isEdu}
						isGroup={isGroup}
					/>
				)
			case 7:
				return (
					<Contact
						onSubmit={onContactSubmit}
						withPartner={withPartner}
						isPsychiatrist={isPsychiatrist}
						isEdu={isEdu}
						isGroup={isGroup}
						error={error}
					/>
				)
			case 8:
				return (
					<ChoosePaymentMethod
						onSubmit={onPaymentChoose}
						withPartner={withPartner}
						isPsychiatrist={isPsychiatrist}
						isEdu={isEdu}
						isGroup={isGroup}
					/>
				)
			case 9:
				return <Success />
			case 10:
				return (
					<CustomerName
						onSubmit={onCustomerNameChange}
						withPartner={withPartner}
						isPsychiatrist={isPsychiatrist}
						isEdu={isEdu}
						isGroup={isGroup}
					/>
				)
			case 11:
				return (
					<CustomerPassword
						onSubmit={onCustomerPassword}
						withPartner={withPartner}
						isPsychiatrist={isPsychiatrist}
						isEdu={isEdu}
						isGroup={isGroup}
					/>
				)
			case 12:
				return (
					<AccountSuccess
						onSubmit={onAccountSuccessContinue}
						withPartner={withPartner}
						isPsychiatrist={isPsychiatrist}
						isEdu={isEdu}
						isGroup={isGroup}
					/>
				)
			default:
				return (
					<RepeatSurvey
						onSubmit={onRepeatSurvey}
						withPartner={withPartner}
						isPsychiatrist={isPsychiatrist}
						isEdu={isEdu}
						isGroup={isGroup}
					/>
				)
		}
	}

	const title = useMemo(() => {
		switch (slug) {
			case 'educational':
				return '☂️ ახალი ხედვა განათლებაში'
			case 'grouptherapy':
				return '☂️ გაუზიარე და გაიზიარე'
			case 'psychiatrist':
				return '☂️ პირველი ახალი ნაბიჯი'
			default:
				return '☂️ პირველი ახალი ნაბიჯი'
		}
	}, [slug])

	const description = useMemo(() => {
		switch (slug) {
			case 'educational':
				return 'დღეს ვიცი, რომ მსურს ვიცოდე მეტი ხვალ, ვიდრე ვიცოდი გუშინ.'
			case 'grouptherapy':
				return 'შექმენი შენი კომუნიაცია ჯგუფში და დარჩი სოციალურად აქტიური.'
			case 'psychiatrist':
				return 'რომელიც ვფიქრობთ დაგეხმარება და უკეთ გაგრძნობინებს თავს.'
			default:
				return 'რომელიც ვფიქრობთ დაგეხმარება და უკეთ გაგრძნობინებს თავს.'
		}
	}, [slug])

	return (
		<>
			<Helmet>
				<meta
					property='og:title'
					content={`ანიმუსი - ${
						slug === 'educational'
							? 'საგანმანათლებლო პროგრამები'
							: slug === 'grouptherapy'
							? 'ჯგუფური შეხვედრები'
							: slug === 'psychiatrist'
							? 'ფსიქიატრთან კონსულტაცია'
							: 'ფსიქოლოგთან ვიზიტი'
					}`}
				/>
				<meta
					property='og:description'
					content={`${
						slug === 'educational'
							? 'მიიღეთ მონაწილეობა საგანმანათლებლო პროგრამებში.'
							: slug === 'grouptherapy'
							? 'მიიღეთ მონაწილეობა თერაპიულ ჯგუფებში.'
							: slug === 'psychiatrist'
							? 'გაიარეთ კონსულტაცია ემოციის ექიმთან.'
							: 'ჩანიშნეთ იდნვიდუალური ვიზიტი სპეციალისტთან.'
					}`}
				/>
				<meta
					property='og:image'
					content={`https://animuscontent.s3.eu-central-1.amazonaws.com/${
						slug[0].toUpperCase() + slug.slice(1)
					}-Appointment-OG.png`}
				/>
				<meta content='image/*' property='og:image:type' />
				<meta property='og:url' content={`https://animus.ge/survey/${slug}`} />
			</Helmet>
			<div className='min-h-screen bg-primary-100 dark:bg-neutral-800 bg-opacity-25'>
				<div className='grid justify-content-center grid-cols-1 xl:grid-cols-4 md:grid-cols-1 lg:grid-cols-1'>
					<div className='grid col-start-2 col-span-4 col-end-4 row-start-2 row-end-4'>
						{step !== 9 ? (
							<header className='text-center mt-24 mb-10'>
								<h1 className='text-4xl font-semibold'>{title}</h1>
								<span className='block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200 mb-10'>
									{description}
								</span>
							</header>
						) : null}

						{isLoading ? (
							<div className='bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 mt-24'>
								<Loader />
							</div>
						) : (
							renderContent()
						)}
						<PhoneValidation
							show={showValidation}
							onCloseModalDeleteComment={() => {
								setShowValidation('')
							}}
							customerId={savedCustomerId}
							next={() => setStep(11)}
						></PhoneValidation>
					</div>
				</div>
			</div>
		</>
	)
}

export default Quizz
