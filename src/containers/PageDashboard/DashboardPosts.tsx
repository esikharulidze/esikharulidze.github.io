import React, { useEffect, useState } from 'react'
import NcImage from 'components/NcImage/NcImage'
import Pagination from 'components/Pagination/Pagination'
import AppointmentModal from './AppointmentModal'
import { BackendAppointment, BackendCustomer } from 'types'
import axios from 'utils/axios'
import { AxiosResponse } from 'axios'
import { format } from 'date-fns'
import { ka } from 'date-fns/locale'
import CancelAppointmentModal from './CancelAppointmentModal'

const people = [
	{
		id: 1,
		title: 'ფსიქოლოგთან ვიზიტი',
		image: 'https://images.unsplash.com/photo-1617059063772-34532796cdb5?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60',
		liveStatus: true,
		payment: 'ელენე სიხარულიძე',
		date: '25 ოქტ, 18:30',
		visitid: '58524'
	},
	{
		id: 2,
		title: 'ემოციური ინტელექტის ონლაინ კურსი',
		image: 'https://images.unsplash.com/photo-1622987437805-5c6f7c2609d7?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60',
		liveStatus: false,
		payment: 'ელენე სიხარულიძე',
		date: '25 ოქტ, 18:30',
		visitid: '11624'
	},
	{
		id: 3,
		title: 'თვითშეფასების კურსი',
		image: 'https://images.unsplash.com/photo-1617201277988-f0efcc14e626?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60',
		liveStatus: false,
		payment: 'ეკატერინე ჩიქოვანი',
		date: '25 ოქტ, 18:30',
		visitid: '22624'
	},
	{
		id: 4,
		title: 'EMDR თერაპია',
		image: 'https://images.unsplash.com/photo-1622960748096-1983e5f17824?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60',
		liveStatus: false,
		payment: 'სოფი კოკოლიშვილი',
		date: '25 ოქტ, 18:30',
		visitid: '44624'
	},
	{
		id: 5,
		title: 'ფსიქიატრთან ვიზიტი',
		image: 'https://images.unsplash.com/photo-1617202227468-7597afc7046d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60',
		liveStatus: false,
		payment: 'სოფო სალია',
		date: '25 ოქტ, 18:30',
		visitid: '73624'
	},
	{
		id: 6,
		title: 'ფსიქოლოგთან ვიზიტი',
		image: 'https://images.unsplash.com/photo-1622978147823-33d5e241e976?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60',
		liveStatus: false,
		payment: 'ელენე სიხარულიძე',
		date: '25 ოქტ, 18:30',
		visitid: '12624'
	}
]

const DashboardPosts = () => {
	const [show, setShow] = useState(false)
	const [appointments, setAppointments] = useState<BackendAppointment[]>()
	const [selectedAppointment, setSelectedAppointment] = useState<BackendAppointment>()

	useEffect(() => {
		;(async () => {
			try {
				const { data } = await axios.get<any, AxiosResponse<BackendAppointment[]>>('appointment')
				setAppointments(data)
			} catch (e) {
				console.log(e)
			}
		})()
	}, [])

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

	return (
		<div className='flex flex-col space-y-8'>
			<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
				<div className='py-2 align-middle inline-block min-w-full px-1 sm:px-6 lg:px-8'>
					<div className='shadow dark:border dark:border-neutral-800 overflow-hidden sm:rounded-lg'>
						<table className='min-w-full divide-y divide-neutral-200 dark:divide-neutral-800'>
							<thead className='bg-neutral-50 dark:bg-neutral-800'>
								<tr className='text-left text-xs font-medium text-neutral-500 dark:text-neutral-300 uppercase tracking-wider'>
									<th scope='col' className='px-6 py-3'>
										შეხვედრის ტიპი
									</th>
									<th scope='col' className='px-6 py-3'>
										კოდი
									</th>
									<th scope='col' className='px-6 py-3'>
										თარიღი
									</th>
									<th scope='col' className='px-6 py-3'>
										სტატუსი
									</th>
									<th scope='col' className='px-6 py-3'>
										თერაპევტი
									</th>

									<th scope='col' className='relative px-6 py-3'>
										<span className='sr-only'>Edit</span>
									</th>
								</tr>
							</thead>
							<tbody className='bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-800'>
								{appointments
									? appointments.map(item => (
											<tr key={item._id}>
												<td className='px-2 py-4'>
													<div className='flex items-center lg:w-auto max-w-md overflow-hidden'>
														{/* <NcImage
                          containerClassName="flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden lg:h-14 lg:w-14"
                          src={item.image}
                        /> */}

														<div className='ml-4 flex-grow'>
															<h2 className='inline-flex line-clamp-2 text-sm font-semibold  dark:text-neutral-300'>
																{getName(item)}
															</h2>
														</div>
													</div>
												</td>{' '}
												<td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-500 font-semibold dark:text-neutral-400'>
													<span> {item.code}</span>
												</td>
												<td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400'>
													<span>
														{' '}
														{format(new Date(item.date), 'dd MMM. ', {
															locale: ka
														})}
														{item.time}
													</span>
												</td>
												<td className='px-6 py-4 whitespace-nowrap'>
													{item.status === 'current' ? (
														<span className='px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-teal-100 text-teal-900 lg:text-sm'>
															მიმდინარე
														</span>
													) : (
														<span className='px-2 inline-flex text-sm text-neutral-500 dark:text-neutral-400 rounded-full'>
															{getStatus(item.status)}
														</span>
													)}
												</td>
												<td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400'>
													<span>
														{item.therapist.firstName} {item.therapist.lastName}
													</span>
												</td>
												<td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-neutral-300'>
													{/* <a
                        href="/#"
                        className="text-primary-800 dark:text-primary-500 hover:text-primary-900"
                      >
                        შეცვლა
                      </a>
                      {` | `} */}
													<div
														className='text-primary-800 dark:text-primary-500 hover:text-primary-900 cursor-pointer'
														onClick={() => {
															setSelectedAppointment(item)
															setShow(true)
														}}
													>
														დეტალები
													</div>
												</td>
											</tr>
									  ))
									: null}
							</tbody>
						</table>
					</div>
				</div>
				{show && selectedAppointment ? (
					<AppointmentModal onClose={() => setShow(false)} data={selectedAppointment} />
				) : null}
			</div>

			<Pagination />
		</div>
	)
}

export default DashboardPosts
