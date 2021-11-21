import React, { useCallback, useMemo, useState } from 'react'
import NcImage from 'components/NcImage/NcImage'
import Pagination from 'components/Pagination/Pagination'
import NcModal from 'components/NcModal/NcModal'
import ButtonPrimary from 'components/Button/ButtonPrimary'
import ButtonSecondary from 'components/Button/ButtonSecondary'
import { BackendAppointment } from 'types'
import { format } from 'date-fns'
import { ka } from 'date-fns/locale'
import axios from 'utils/axios'
import CancelAppointmentModal from './CancelAppointmentModal'

interface Props {
	onClose?: () => void
	data: BackendAppointment
}

const AppointmentModal = ({ data, onClose }: Props) => {
	const [showCancel, setShowCancel] = useState(false)
	const getName = (item: BackendAppointment) => {
		switch (item.type) {
			case 'grouptherapy':
				return 'ჯგუფური ' + item.survey.course?.title
			case 'educational':
				return 'განათლება ' + item.survey.course?.title
			case 'psychiatrist':
				return 'ფსიქიატრთან ვიზიტი'
			default:
				return item.survey.partnerAge ? 'წყვილების თერაპია' : 'ფსიქოლოგთან ვიზიტი'
		}
	}
	const getStatus = (type: 'closed' | 'current' | 'rejected' | 'refunded') => {
		switch (type) {
			case 'closed':
				return 'დასრულებული'
			case 'current':
				return 'მიმდინარე'
			case 'rejected':
				return 'გაცდენილი'
			default:
				return 'გაუქმებული'
		}
	}
	const cancel = useCallback(async () => {
		try {
			await axios.delete(`appointment/${data._id}`)
			onClose && onClose()
		} catch (e) {
			console.log(e)
		}
	}, [data, onClose])
	const renderContent = () => {
		return (
			<div>
				<form onSubmit={e => e.preventDefault()}>
					<h3 className='text-lg font-semibold text-neutral-900 dark:text-neutral-200'>
						ვიზიტის დეტალები
					</h3>
					{/* <div className="px-4 py-5 sm:px-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl"> */}
					<div className=''>
						<p className='mb-4 text-sm leading-5 text-neutral-700'>
							თარიღის შეცვლა ან ვიზიტის გაუქმება შესაძლებელია ვიზიტამდე 1 დღით ადრე, წინააღმდეგ
							შემთხვევაში თანხა არ დაგიბრუნდებათ ან დაგეკისრებათ ჯარიმა.
						</p>
					</div>

					<div className='border-neutral-200 dark:border-neutral-900'>
						<dl>
							<div className='px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl'>
								<dt className='text-sm font-medium text-neutral-500 dark:text-neutral-300'>
									ვიზიტის ტიპი
								</dt>
								<dd className='mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2'>
									{getName(data)}
								</dd>
							</div>
							<div className='px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
								<dt className='text-sm font-medium text-neutral-500 dark:text-neutral-300 rounded-xl'>
									ვიზიტის კოდი
								</dt>
								<dd className='mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2'>
									{data.code}
								</dd>
							</div>
							<div className='px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl'>
								<dt className='text-sm font-medium text-neutral-500 dark:text-neutral-300'>
									ვიზიტის თარიღი
								</dt>
								<dd className='mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2'>
									{format(new Date(data.date), 'dd MMM. ', { locale: ka })}
									{data.time}
								</dd>
							</div>
							<div className='px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-xl'>
								<dt className='text-sm font-medium text-neutral-500 dark:text-neutral-300'>
									ვიზიტის სტატუსი
								</dt>
								<dd className='mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2'>
									{getStatus(data.status)}
								</dd>
							</div>
							<div className='px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl'>
								<dt className='text-sm font-medium text-neutral-500 dark:text-neutral-300'>
									ვიზიტორი
								</dt>
								<dd className='mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2'>
									{data.survey.fullName}
								</dd>
							</div>
							<div className='px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-xl'>
								<dt className='text-sm font-medium text-neutral-500 dark:text-neutral-300'>
									ვიზიტორის ასაკი
								</dt>
								<dd className='mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2'>
									{data.survey.age}
								</dd>
							</div>
							<div className='px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl'>
								<dt className='text-sm font-medium text-neutral-500 dark:text-neutral-300'>
									თერაპევტი
								</dt>
								<dd className='mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2'>
									{`${data.therapist.firstName} ${data.therapist.lastName}`}
								</dd>
							</div>
							<div className='px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-xl'>
								<dt className='text-sm font-medium text-neutral-500 dark:text-neutral-300'>
									ცენტრის მისამართი
								</dt>
								<dd className='mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2'>
									მცხეთის ქუჩა 48/50
								</dd>
							</div>
							<div className='px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl'>
								<dt className='text-sm font-medium text-neutral-500 dark:text-neutral-300'>
									გადახდის მეთოდი
								</dt>
								<dd className='mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2'>
									{data.paymentMethod === 'card'
										? 'ბარათით გადახდა'
										: 'ნაღდი ანგარიშსწორებით'}
								</dd>
							</div>
							<div className='px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-xl'>
								<dt className='text-sm font-medium text-neutral-500 dark:text-neutral-300'>
									ვიზიტის ღირებულება
								</dt>
								<dd className='mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2'>
									{data.price} ₾
								</dd>
							</div>
						</dl>
					</div>
					<div className='mt-4 grid grid-cols-2 gap-4'>
						<ButtonPrimary type='submit'>თარიღის შეცვლა</ButtonPrimary>
						<ButtonSecondary type='submit' onClick={() => setShowCancel(true)}>
							ვიზიტის გაუქმება
						</ButtonSecondary>
					</div>
				</form>
				{showCancel  ? (
					<CancelAppointmentModal onClose={() => setShowCancel(false)} cancel={cancel}/>
				) : null}
			</div>
		)
	}
	const renderTrigger = () => {
		return null
	}
	return (
		<NcModal
			isOpenProp={true}
			onCloseModal={onClose}
			contentExtraClass={showCancel ? "opacity-0 max-w-screen-md": "max-w-screen-md"}
			renderContent={renderContent}
			renderTrigger={renderTrigger}
			modalTitle=''
		/>
	)
}

export default AppointmentModal
