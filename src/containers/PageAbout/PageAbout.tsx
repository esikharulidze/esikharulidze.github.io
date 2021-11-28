import SectionHero from 'components/SectionHero/SectionHero'
import rightImg from 'images/about-hero-right.png'
import React, { FC, useEffect, useState } from 'react'
import SectionFounder from './SectionFounder'
import SectionStatistic from './SectionStatistic'
import { Helmet } from 'react-helmet'
import SectionSubscribe2 from 'components/SectionSubscribe2/SectionSubscribe2'
import BgGlassmorphism from 'components/BgGlassmorphism/BgGlassmorphism'
import BackgroundSection from 'components/BackgroundSection/BackgroundSection'
import SectionGridCategoryBox from 'components/SectionGridCategoryBox/SectionGridCategoryBox'
import Loader from 'components/Loader/Loader'

export interface PageAboutProps {
	className?: string
}

const PageAbout: FC<PageAboutProps> = ({ className = '' }) => {
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 1000)
	}, [])
	return (
		<div className={`nc-PageAbout overflow-hidden relative ${className}`} data-nc-id='PageAbout'>
			<Helmet>
				<title>ანიმუსი - ჩვენ შესახებ</title>
			</Helmet>
			{isLoading ? <Loader absolute /> : null}
			{/* ======== BG GLASS ======== */}
			<BgGlassmorphism />

			<div className='container py-16 lg:py-28 space-y-16 lg:space-y-28'>
				<SectionHero
					rightImg={'https://animuscontent.s3.eu-central-1.amazonaws.com/aboutus-hero.png'}
					displayImg={true}
					heading='👋 ჩვენ შესახებ'
					btnText=''
					subHeading='ანიმუსი არის ახალი იდეა ფსიქოთერაპიულ სივრცეში. ჩვენ ვეხმარებით ადამიანს საკუთარი რესურსების აღმოჩენის გზით, ფსიქოლოგიური გამოწვევების გადაჭრაში და თვითგანვითარებაში.'
				/>

				<SectionFounder />

				<div className='relative py-16'>
					<BackgroundSection />
					<SectionGridCategoryBox />
				</div>

				{/* <SectionSubscribe2 /> */}
			</div>
		</div>
	)
}

export default PageAbout
