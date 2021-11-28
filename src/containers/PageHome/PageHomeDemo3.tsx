import React, { useEffect, useState } from 'react'
import axios from 'utils/axios'
import { BackendCategory, BackendPost, BackendUser } from 'types'
import SectionVideos from './SectionVideos'
import SectionSliderPosts from './SectionSliderPosts'
import { DEMO_CATEGORIES, DEMO_TRENDS } from 'data/taxonomies'
import { DEMO_POSTS, DEMO_POSTS_AUDIO } from 'data/posts'
import SectionHero from 'components/SectionHero/SectionHero'
import rightImg from 'images/hero-right.png'
import Vector1 from 'images/Vector1.png'
import BecomeAnAuthorImg from 'images/BecomeAnAuthorImg.png'
import { Helmet } from 'react-helmet'
import SectionAds from './SectionAds'
import SectionSubscribe2 from 'components/SectionSubscribe2/SectionSubscribe2'
import BackgroundSection from 'components/BackgroundSection/BackgroundSection'
import SectionSliderNewAuthors from 'components/SectionSliderNewAthors/SectionSliderNewAuthors'
import { DEMO_AUTHORS } from 'data/authors'
import SectionMagazine5 from './SectionMagazine5'
import SectionBecomeAnAuthor from 'components/SectionBecomeAnAuthor/SectionBecomeAnAuthor'
import SectionLatestPosts from './SectionLatestPosts'
import SectionGridCategoryBox from 'components/SectionGridCategoryBox/SectionGridCategoryBox'
import SectionMagazine8 from './SectionMagazine8'
import SectionMagazine9 from './SectionMagazine9'
import BgGlassmorphism from 'components/BgGlassmorphism/BgGlassmorphism'
import SectionSubscribe from 'components/SectionSubscribe/SectionSubscribe'
import CourseCard from 'components/CourseCard/CourseCard'
import { AxiosResponse } from 'axios'
import Loader from 'components/Loader/Loader'

// DEMO DATA
const POSTS = DEMO_POSTS

// DEMO POST FOR MAGAZINE SECTION
const MAGAZINE1_TABS = ['all', 'Garden', 'Fitness', 'Design']
const MAGAZINE1_POSTS = POSTS.filter((_, i) => i >= 0 && i < 8)
//

const PageHomeDemo3: React.FC = () => {
	const [posts, setPosts] = useState<BackendPost[]>([])
	const [authors, setAuthors] = useState<BackendUser[]>([])
	const [cateogries, setCategories] = useState<BackendCategory[]>([])
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		const $body = document.querySelector('body')
		if ($body) {
			$body.className = 'theme-fuchsia-blueGrey'
		}
		return () => {
			if ($body) {
				$body.className = ''
			}
		}
	}, [])

	useEffect(() => {
		;(async () => {
			try {
				setTimeout(() => {
					setIsLoading(false)
				}, 1000)
				await axios.get<any, AxiosResponse<BackendPost[]>>('post').then(({ data }) => {
					setPosts(data)
				})
				await axios.get<any, AxiosResponse<BackendUser[]>>('user/all').then(({ data }) => {
					setAuthors(data)
				})
				await axios.get<any, AxiosResponse<BackendCategory[]>>('category').then(({ data }) => {
					setCategories(data)
				})
			} catch (e) {
				console.log(e)
			}
		})()
	}, [])
	return (
		<div className='nc-PageHomeDemo3 overflow-hidden relative'>
			<Helmet>
				<title>ანიმუსი - ინტელექტი ადამიანს მიღმა</title>
			</Helmet>
			{isLoading ? <Loader absolute /> : null}
			{/* ======== BG GLASS ======== */}
			<BgGlassmorphism />
			{/* ======== ALL SECTIONS ======== */}
			{/* ======= START CONTAINER ============= */}
			<div className='container relative'>
				{/* === SECTION HERO === */}
				<SectionHero
					rightImg={'https://animuscontent.s3.eu-central-1.amazonaws.com/five-emotions.png'}
					className='pt-10 pb-16 md:py-16 lg:py-28'
					heading={
						<span>
							ადამიანის ხუთი <br /> ძირითადი {` `}
							<span className='relative pr-3'>
								<img
									className='w-full absolute top-1/2 -left-1 transform -translate-y-1/2'
									src={Vector1}
									alt=''
								/>
								<span className='relative'>ემოცია</span>
							</span>
						</span>
					}
					btnText='განაგრძე კითხვა'
					subHeading='ანიმუსის პირველი სტატია, ცოტა არ იყოს, ვრცელი გამოგვივიდა. თუმცა ვიმედოვნებთ, მკითხვ...🎈'
				/>

				<SectionGridCategoryBox
					headingCenter={false}
					headingDisplay={true}
					categoryCardType='card2'
					className='pb-16 lg:pb-28'
					categories={DEMO_TRENDS.filter((_, i) => i < 5)}
				/>

				{/* === SECTION 8 === */}
				<SectionLatestPosts
					backendPosts={posts}
					posts={DEMO_POSTS.filter((_, i) => i > 8 && i < 14)}
					widgetPosts={DEMO_POSTS.filter((_, i) => i > 2 && i < 7)}
					categories={cateogries}
					tags={DEMO_CATEGORIES}
					// postCardName="card7"
					// gridClass="sm:grid-cols-2"
					className='pb-16 lg:pb-28'
					authors={authors}
				/>

				{/* === SECTION 1 === */}
				{/* <div className="relative py-16">
          <BackgroundSection />
          <SectionMagazine5
            heading="🧩 Editor Picks"
            posts={MAGAZINE1_POSTS}
            tabs={MAGAZINE1_TABS}
          />
        </div> */}

				{/* === SECTION 8 === */}
				{/* <SectionSliderPosts
          className="py-16 lg:py-28"
          postCardName="card10"
          heading="Sea travel enthusiast"
          subHeading="Over 218 articles about sea travel"
          posts={POSTS.filter((_, i) => i < 8)}
        /> */}

				{/* === SECTION 1 === */}
				{/* <SectionAds /> */}

				{/* === SECTION 9 === */}

				{/* <SectionMagazine8
          className="py-16"
          posts={DEMO_POSTS_AUDIO.filter((_, i) => i < 6)}
        /> */}

				{/* === SECTION 1 === */}
				<SectionSubscribe2 className='pb-16 mt-10 lg:pb-28' />

				{/* === SECTION 9 === */}
				{/* <div className="relative py-16">
          <BackgroundSection />
          <SectionMagazine9
            posts={DEMO_POSTS_AUDIO.filter((_, i) => i >= 6 && i < 16)}
          />
        </div> */}

				{/* === SECTION 1 === */}
				{/* <SectionVideos className="py-16 lg:py-28" /> */}

				{/* === SECTION 7 === */}
				{/* <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewAuthors
            heading="Newest authors"
            subHeading="Say hello to future creator potentials"
            authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
          />
        </div> */}

				{/* SECTION 3 */}
				{/* <SectionBecomeAnAuthor
          className="py-16 lg:py-28"
          rightImg={BecomeAnAuthorImg}
        /> */}

				{/* SECTION 4 */}
				{/* <div className="relative py-16">
            <BackgroundSection />
            <CourseCard /></div> */}
			</div>
		</div>
	)
}

export default PageHomeDemo3
