import React, { FC, useEffect, useState } from 'react'
import ButtonPrimary from 'components/Button/ButtonPrimary'
import Input from 'components/Input/Input'
import Label from 'components/Label/Label'
import LayoutPage from 'components/LayoutPage/LayoutPage'
import SocialsList from 'components/SocialsList/SocialsList'
import Textarea from 'components/Textarea/Textarea'
import { Helmet } from 'react-helmet'
import SectionSubscribe2 from 'components/SectionSubscribe2/SectionSubscribe2'
import Loader from 'components/Loader/Loader'

export interface PageContactProps {
	className?: string
}

const info = [
	{
		title: '🗺 მისამართი',
		desc: 'მცხეთის ქუჩა 48/50 (ვაკე)'
	},
	{
		title: '💌 ელ.ფოსტა',
		desc: 'support@animus.ge'
	},
	{
		title: '☎ ტელეფონი',
		desc: '+995 32 2112 144'
	}
]

const PageContact: FC<PageContactProps> = ({ className = '' }) => {
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 1000)
	}, [])
	return (
		<div className={`nc-PageContact ${className}`} data-nc-id='PageContact'>
			<Helmet>
				<title>ანიმუსი - კონტაქტი</title>
			</Helmet>
			{isLoading ? <Loader absolute /> : null}
			<LayoutPage
				subHeading='მოგვწერეთ თქვენთვის სასურველ თემაზე და ჩვენ აუცილებლად გიპასუხებთ.'
				headingEmoji=''
				heading='დაგვეკონტაქტეთ 👋'
			>
				<div className='grid gap-8 lg:grid-cols-2'>
					<div className='max-w-sm space-y-6'>
						{info.map((item, index) => (
							<div key={index}>
								<h3 className='uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider'>
									{item.title}
								</h3>
								<span className='block mt-2 text-neutral-500 dark:text-neutral-400'>
									{item.desc}
								</span>
							</div>
						))}
						<div>
							<h3 className='uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider'>
								🌏 სოც. ქსელები
							</h3>
							<SocialsList className='mt-2' />
						</div>
					</div>
					<div className='border border-neutral-100 dark:border-neutral-700 lg:hidden'></div>
					<div>
						<form className='grid grid-cols-1 gap-6' action='#' method='post'>
							<label className='block'>
								<Label>შეტყობინების ავტორი</Label>

								<Input placeholder='სახელი გვარი' type='text' className='mt-1' />
							</label>
							<label className='block'>
								<Label>ელ.ფოსტა</Label>

								<Input type='email' placeholder='example@animus.ge' className='mt-1' />
							</label>
							<label className='block'>
								<Label>შეტყობინება</Label>

								<Textarea className='mt-1' rows={6} />
							</label>
							<ButtonPrimary type='submit'>გაგზავნე</ButtonPrimary>
						</form>
					</div>
				</div>
			</LayoutPage>

			{/* OTHER SECTIONS */}
			<div className='container pb-16 lg:pb-28'>{/* <SectionSubscribe2 /> */}</div>
		</div>
	)
}

export default PageContact
