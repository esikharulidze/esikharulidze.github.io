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
	const [showValidation, setShowValidation] = useState(false)
	const [savedCustomerId, setSavedCustomerId] = useState('')

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
			const { data } = await axios.get<any, AxiosResponse<{ question: any; surveyId: string }>>(
				`survey/start/${slug}?age=${age}&forElse=${forElse}${partner ? '&partner=' + partner : ''}${
					query.get('course') ? '&course=' + query.get('course') : ''
				}`
			)
			setSurveyId(data.surveyId)
			setCurrentQuestion(data.question)
		} catch (e) {
			console.log(e)
		}
	}, [age, slug, partner])

	const resumeQuiz = useCallback(
		async (answerIds: string[]) => {
			try {
				const { data } = await axios.patch<any, AxiosResponse<Question | { age: number }>>(
					`survey/continue/${surveyId}`,
					{
						questionId: currentQuestion!._id,
						answerIds: answerIds
					}
				)
				if ('age' in data) {
					setStep(4)
				} else {
					setCurrentQuestion(data)
				}
			} catch (e) {
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
					const { data } = await axios.get<any, AxiosResponse<BackendSurvey>>(
						`customer/check-survey/${slug}`
					)
					console.log(data)
					setSurveyId(data._id)
					setStep(0)
				}
			} catch (e) {}
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
				await axios.patch('survey/comment', { comment: val, surveyId })
				setStep(5)
			} catch (e) {
				console.log('err')
			}
		},
		[surveyId]
	)

	const onDateChoose = useCallback(
		async ({ therapistId, ...rest }: { therapistId: string; date: string; hour: string }) => {
			try {
				const { data } = await axios.put(`user/reserve/${therapistId}`, {
					...rest,
					surveyId,
					customerId: customer ? customer._id : undefined
				})
				setAppointmentId(data)
				if (customer) {
					setStep(8)
				} else {
					setStep(6)
				}
			} catch (e) {
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
				const { data } = await axios.put('customer/password', {
					password: val,
					customerId: savedCustomerId
				})
				localStorage.setItem('customer-token', data.token)
				setStep(12)
			} catch (e) {
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
					setShowValidation(true)
				} else {
					setStep(8)
				}
			} catch (e) {
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
				await axios.patch('appointment/payment-method', {
					appointmentId,
					paymentMethod: cash ? 'cash' : 'card'
				})
				if (cash) {
					setStep(9)
				}
			} catch (e) {
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
					await axios.get(`appointment/success/${appointmentId}`)
				}
			} catch (e) {
				console.log(e)
			}
		})()
	}, [slug, step, appointmentId])

	const renderContent = () => {
		switch (step) {
			case 1:
				return <FirstStep psychiatrist={slug === 'psychiatrist'} onChoose={onFirstStepChoice} />
			case 2:
				return (
					<SecondStep
						onSubmit={startQuiz}
						forMe={slug === 'psychiatrist' && forElse === false}
						withPartner={withPartner}
						forElse={forElse}
						setAge={setAge}
						setPartner={setPartner}
						age={age}
						partner={partner}
					/>
				)
			case 3:
				return <QuizItem question={currentQuestion} withPartner={withPartner} onSubmit={resumeQuiz} />
			case 4:
				return <Comment onSubmit={onComment} />
			case 5:
				return <Calendar onSubmit={onDateChoose} type={slug} />
			case 6:
				return <CreateOrNotQuestion onSubmit={onCreateAccountChoose} />
			case 7:
				return <Contact onSubmit={onContactSubmit} />
			case 8:
				return <ChoosePaymentMethod onSubmit={onPaymentChoose} />
			case 9:
				return <Success />
			case 10:
				return <CustomerName onSubmit={onCustomerNameChange} />
			case 11:
				return <CustomerPassword onSubmit={onCustomerPassword} />
			case 12:
				return <AccountSuccess onSubmit={onAccountSuccessContinue} />
			default:
				return <RepeatSurvey onSubmit={onRepeatSurvey} />
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

					{renderContent()}
					<PhoneValidation
						show={showValidation}
						onCloseModalDeleteComment={() => {
							setShowValidation(false)
						}}
						customerId={savedCustomerId}
						next={() => setStep(11)}
					></PhoneValidation>
				</div>
			</div>
		</div>
	)
}

export default Quizz
