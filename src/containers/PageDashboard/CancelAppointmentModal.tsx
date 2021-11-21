import React, { useCallback, useMemo } from 'react'
import NcImage from 'components/NcImage/NcImage'
import Pagination from 'components/Pagination/Pagination'
import NcModal from 'components/NcModal/NcModal'
import ButtonPrimary from 'components/Button/ButtonPrimary'
import ButtonSecondary from 'components/Button/ButtonSecondary'
import { BackendAppointment } from 'types'
import { format } from 'date-fns'
import { ka } from 'date-fns/locale'
import axios from 'utils/axios'

interface Props {
	onClose?: () => void
	cancel?: () => void
}

const CancelAppointmentModal = ({ onClose, cancel }: Props) => {
    
	const renderContent = () => {
		return (
			<div>
				<form onSubmit={e => e.preventDefault()}>
					<h3 className='text-2xl font-semibold text-neutral-900 dark:text-neutral-200'>
						ნამდვილად გსრუთ ვიზიტის გაუქმება?
					</h3>
					{/* <div className="px-4 py-5 sm:px-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl"> */}
					<div className=''>
						<p className='mb-8 mt-1 text-lg leading-5 text-neutral-700'>
							თქვენი ვიზიტი გაუქმდება და თანხა დაგიბრუნდებათ ანგარიშზე.
						</p>
					</div>
					<div className='border-neutral-200 dark:border-neutral-900'>
						
					</div>
					<div className='mt-4 grid grid-cols-2 gap-4'>
						<ButtonPrimary className="bg-red-500 hover:bg-red-600" type='submit' onClick={cancel}>ვიზიტის გაუქმება</ButtonPrimary>
						<ButtonSecondary type='submit' onClick={() => onClose && onClose()}>
							უკან დაბრუნება
						</ButtonSecondary>
					</div>
				</form>
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
        contentExtraClass='max-w-screen-md'
        renderContent={renderContent}
        renderTrigger={renderTrigger}
        modalTitle=''
    />
	)
}

export default CancelAppointmentModal
