import { AxiosResponse } from 'axios'
import ButtonPrimary from 'components/Button/ButtonPrimary'
import ButtonSecondary from 'components/Button/ButtonSecondary'
import LayoutPage from 'components/LayoutPage/LayoutPage'
import ModalCourse from 'components/ModalCourse/ModalCourse'
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BackendCourse } from 'types'
import axios from 'utils/axios'
import { useHistory, useLocation } from 'react-router-dom'
import Loader from 'components/Loader/Loader'

export interface ServiceInnerProps {
	className?: string
}

const services = {
	individual: 0,
	adults: 1,
	teens: 2,
	kids: 3
}

const ServiceInner: FC<ServiceInnerProps> = ({ className = '' }) => {
	const [course, setCourse] = useState<BackendCourse>()
	// const {slag, slug} = useParams<{slag: string, slug: 'individual'|
	// 'adults'|
	// 'teens'|
	// 'kids'}>()
	const { slug } = useParams<{ slug: string }>()
	const [isReporting, setIsReporting] = useState(false)
	const openModalReportComment = () => setIsReporting(true)
	const closeModalReportComment = () => setIsReporting(false)
	const [isLoading, setIsLoading] = useState(true)

	const history = useHistory()
	const location = useLocation()

	console.log(location.pathname)

	useEffect(() => {
		;(async () => {
			try {
				setIsLoading(true)
				await axios.get<any, AxiosResponse<BackendCourse>>(`course/${slug}`).then(({ data }) => {
					setCourse(data)
				})
				setTimeout(() => setIsLoading(false), 1000)
			} catch (e) {
				console.log(e)
				setTimeout(() => setIsLoading(false), 1000)
			}
		})()
	}, [slug])
	return (
		<div>
			{isLoading ? <Loader absolute /> : null}
			<LayoutPage isInner={true} heading='' cover={course?.cover}>
				<h2
					className={`flex items-center text-3xl leading-[115%] md:text-3xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 mb-4`}
				>
					{course ? course.title : <></>}
				</h2>
				{/* <p>
          {course ? course.description : <></>}
        </p> */}

				<div className=''>
					<h3 className='block text-xs uppercase tracking-widest text-neutral-900 dark:text-neutral-100 mb-2 font-medium'>
						ფასი
					</h3>
					<h2 className='font-bold text-purple-500 dark:text-purple-200 text-3xl leading-none  flex items-center'>
						<span>{course?.cost}₾</span>
						<span className='text-sm ml-1 font-medium text-neutral-500'>/ {course?.period}</span>
					</h2>
					<hr className='mt-6 mb-6'></hr>
				</div>

				{course?.content ? (
					<div
						className="ml-1"
						style={{ marginTop: 20 }}
						dangerouslySetInnerHTML={{ __html: course.content! }}
					></div>
				) : (
					<></>
				)}
				<div className="grid justify-items-center absolute sticky z-10 bottom-0 bg-white drop-shadow-2xl dark:bg-neutral-900 ">
				<div className='grid my-8 gap-4 grid-cols-1 md:grid-cols-2'>
					<ButtonPrimary
						className=''
						sizeClass = "px-10 py-4 sm:px-10"
						bgColor="bg-yellow-600"
						onClick={() =>
							history.push(`/survey/${location.pathname.split('/')[1]}?course=${course?._id}`)
						}
					>
						ცოცხალ ჯგუფში ჩაწერა
					</ButtonPrimary>
					<ButtonPrimary
						className=''
						sizeClass = "px-10 py-4 sm:px-10"
						onClick={() =>
							history.push(`/survey/${location.pathname.split('/')[1]}?course=${course?._id}`)
						}
					>
						ონლაინ ჯგუფში ჩაწერა
					</ButtonPrimary>
					{/* <div>
						<ButtonSecondary className=' opacity-100' onClick={() => history.goBack()}>
							უკან დაბრუნება
						</ButtonSecondary>
					</div> */}
					</div>
				</div>
			</LayoutPage>
		</div>
	)
}

export default ServiceInner
