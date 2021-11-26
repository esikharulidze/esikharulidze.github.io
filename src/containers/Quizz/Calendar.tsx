import ButtonPrimary from 'components/Button/ButtonPrimary'
import DropDown from './components/DropDown'
import { useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'utils/axios'
import { AxiosResponse } from 'axios'
import { BackendUser, TherapistCalendar, WeekDays } from 'types'
import { format, parseISO } from 'date-fns'
import { ka } from 'date-fns/locale'

interface Props {
	type: 'psychologist' | 'psychiatrist' | 'grouptherapy' | 'educational'
	onSubmit: (val: { therapistId: string; date: string; hour: string }) => void
	withPartner?: Boolean
	isPsychiatrist?: Boolean
}

const Calendar = ({ type, onSubmit, withPartner = false, isPsychiatrist = false }: Props) => {
	const [step, setStep] = useState(1)
	const [therapists, setTherapists] = useState<BackendUser[]>()

	const [selectedTherapist, setSelectedTherapist] = useState<{ id: string; value: string }>()
	const [selectedDate, setSelectedDate] = useState<{ id: string; value: string }>()
	const [therapistCalendar, setTherapistCalendar] = useState<TherapistCalendar>()
	const [selectedTime, setSelectedTime] = useState<string>()

	const therapistsValues = useMemo(
		() => therapists?.map(t => ({ id: t._id, value: `${t.firstName} ${t.lastName}` })),
		[therapists]
	)

	const availableDates = useMemo(
		() =>
			Array.from(Array(7).keys())
				.slice(0)
				.map(key => {
					const usableDate = new Date(
						new Date().setDate(new Date(new Date().setHours(0, 0, 0, 0)).getDate() + key)
					)
					console.log(usableDate)
					return {
						id: usableDate.toISOString(),
						value: format(usableDate, 'dd MMM. - EEEE', {
							locale: ka
						})
					}
				})
				.filter(res => {
					console.log(res)
					return therapistCalendar?.days.includes(res.value.split(' ')[3] as WeekDays)
				}),
		[therapistCalendar]
	)

	const availableHours = useMemo(() => {
		const res = therapistCalendar?.reserved
			.filter(
				reserved =>
					format(parseISO(reserved.date), 'dd/MM') ===
					format(parseISO(selectedDate?.id || new Date().toISOString()), 'dd/MM')
			)
			.map(ui => {
				if (
					format(parseISO(ui.date), 'dd/MM') === format(parseISO(new Date().toISOString()), 'dd/MM')
				) {
					return Number(ui.time.substr(0, 2)) - new Date().getHours() > 0 ? ui.time : ''
				}
				return ui.time
			})
		return therapistCalendar?.hours.filter(hour => !res?.includes(hour))
	}, [therapistCalendar, selectedDate])

	useEffect(() => {
		;(async () => {
			try {
				const { data } = await axios.get<any, AxiosResponse<BackendUser[]>>(`user/available/${type}`)
				setTherapists(data)
			} catch (e) {
				console.log('erroria dzma ui tetaia', e)
			}
		})()
	}, [])

	const onTherapistChoose = useCallback(async () => {
		try {
			const { data } = await axios.get<any, AxiosResponse<BackendUser>>(
				`user/therapist/${selectedTherapist?.id}`
			)
			setTherapistCalendar(data.calendar)
			setStep(2)
		} catch (e) {
			console.log('error', e)
		}
	}, [selectedTherapist])

	if (step === 1) {
		return (
			<div className=' bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 '>
				<h2 className='font-semibold text-2xl mb-4'>აირჩიეთ თერაპევტი</h2>

				<DropDown
					className={`cursor-pointer  form-select block w-full mt-1 border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 rounded-md h-11 px-4 py-3 text-sm font-normal border`}
					placeholder='აირჩიეთ სასურველი თერაპევტი'
					selected={selectedTherapist ? selectedTherapist.value : undefined}
					data={therapistsValues}
					setSelected={setSelectedTherapist}
					dataExtractor={(item: any) => item.value}
				/>
				{
				selectedTherapist ?
				<ButtonPrimary
					className='w-full mt-5'
					bgColor={
						withPartner
							? 'bg-red-500 hover:bg-red-600'
							: isPsychiatrist
							? 'bg-yellow-600 hover:bg-yellow-700'
							: 'bg-primary-6000 hover:bg-primary-700'
					}
					ringColor={withPartner ? "focus:ring-red-500" : isPsychiatrist ? "focus:ring-yellow-600": "focus:ring-primary-6000"}
					textArrangement='text-left'
					onClick={onTherapistChoose}
				>
					შემდეგი ნაბიჯი
				</ButtonPrimary>
				: null
				}
				<div className='mt-5'>
					<div
						className={
							isPsychiatrist
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
									fill={isPsychiatrist ? '#dc3c3c' : '#BA7F02'}
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
			</div>
		)
	}

	return (
		<div className=' bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 '>
			<h2 className='font-semibold text-2xl mb-4'>აირჩიეთ ვიზიტის თარიღი</h2>
			<div className='grid grid-cols-2 gap-4'>
				<DropDown
					className={`cursor-pointer  form-select block  mt-1 border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 rounded-md h-11 px-4 py-3 text-sm font-normal border`}
					placeholder='აირჩიეთ თარიღი'
					selected={selectedDate ? selectedDate.value : undefined}
					data={availableDates}
					setSelected={setSelectedDate}
					dataExtractor={(item: any) => item.value}
				/>
				<DropDown
					className={`cursor-pointer  form-select block  mt-1 border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 rounded-md h-11 px-4 py-3 text-sm font-normal border`}
					placeholder='აიჩიეთ საათი'
					selected={selectedTime ? selectedTime : undefined}
					data={availableHours}
					setSelected={setSelectedTime}
				/>
			</div>
			{
				selectedDate && selectedTime ?
			<ButtonPrimary
				className='w-full mt-5 text-left'
				bgColor={withPartner ? 'bg-red-500 hover:bg-red-600' : 'bg-primary-6000 hover:bg-primary-700'}
				ringColor={withPartner ? "focus:ring-red-500" : isPsychiatrist ? "focus:ring-yellow-600": "focus:ring-primary-6000"}
				textArrangement='text-left'
				onClick={() => {
					onSubmit({
						therapistId: selectedTherapist!.id,
						date: selectedDate!.id,
						hour: selectedTime!
					})
				}}
			>
				შემდეგი ნაბიჯი
			</ButtonPrimary>
			: null
			}
			<div className='mt-5'>
				<div
					className={
						isPsychiatrist
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
								fill={isPsychiatrist ? '#dc3c3c' : '#BA7F02'}
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
						<a className='font-semibold' target='_blank' href='https://animus.ge/privacy-policy'>
							იხილეთ ბმულზე.
						</a>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Calendar
