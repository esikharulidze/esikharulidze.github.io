import React, { FC, useEffect, useState } from "react";
import ModalCategories from "./ModalCategories";
import ModalTags from "./ModalTags";
import { DEMO_POSTS } from "data/posts";
import { PostDataType, TaxonomyType } from "data/types";
import { DEMO_CATEGORIES, DEMO_TAGS, DEMO_TRENDS } from "data/taxonomies";
import Pagination from "components/Pagination/Pagination";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import NcImage from "components/NcImage/NcImage";
import Card11 from "components/Card11/Card11";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import ButtonSecondary from "components/Button/ButtonSecondary";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import { DEMO_AUTHORS } from "data/authors";
import { useParams } from "react-router-dom";
import axios from "utils/axios";
import { AxiosResponse } from "axios";
import { BackendCategory } from "types";

export interface PageArchiveProps {
  className?: string;
}

// Tag and category have same data type - we will use one demo data
const posts: PostDataType[] = DEMO_POSTS.filter((_, i) => i < 16);

const PageArchive: FC<PageArchiveProps> = ({ className = "" }) => {
  const PAGE_DATA: TaxonomyType = DEMO_CATEGORIES[0];

  const [category, setCategory] = useState<BackendCategory>()

  const FILTERS = [
    { name: "Most Recent" },
    { name: "Curated by Admin" },
    { name: "Most Appreciated" },
    { name: "Most Discussed" },
    { name: "Most Viewed" },
  ];
  const {slug} = useParams<{slug: string}>()

  useEffect(() => {
    (async () => {
      try {
        await axios.get<any, AxiosResponse<BackendCategory>>(`category/${slug}`).then(({ data }) => {
          setCategory(data)
        })
      } catch (e) {
        console.log(e)
      }
    })()
  }, [slug])

  return (
    <div className={`nc-PageArchive ${className}`} data-nc-id="PageArchive">
      <Helmet>
        <title>Animus.ge - ინტელექტი ადამიანს მიღმა</title>
      </Helmet>



      {/* HEADER */}
      
        
      
          <div className="flex flex-col w-full items-center mt-20">
            <h2 className="inline-block align-middle text-5xl font-semibold md:text-5xl ">
              {category?.title}
            </h2>
            
              {category?.posts.length 

              ? <span className="block mt-2 text-neutral-6000 dark:text-neutral-400">`${category?.posts.length} სტატია` 
              </span>
              : null
              }

            </div>
          
      
      {/* ====================== END HEADER ====================== */}
      

      <div className="container py-14 lg:py-26 space-y-14 lg:space-y-26">
        <div>
          <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
            {/* <div className="flex space-x-2.5">
              <ModalCategories categories={DEMO_CATEGORIES} />
              <ModalTags tags={DEMO_TAGS} />
            </div>
            <div className="block my-4 border-b w-full border-neutral-100 sm:hidden"></div>
            <div className="flex justify-end">
              <ArchiveFilterListBox lists={FILTERS} />
            </div> */}
          </div>

          {/* LOOP ITEMS */}
          {category?.posts.length? <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10">
            {category?.posts.map((post) => (
              <Card11 key={post.id} post={post} />
            ))}
          </div>: <div className="text-center font-medium text-neutral-6000 dark:text-neutral-400">სამწუხაროდ ამ კატეგორიაში სტატია ვერ მოიძებნა</div>}
          

          {/* PAGINATIONS */}
          {/* <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination posts={category?.posts}/>
            <ButtonPrimary>მაჩვენე მეტი</ButtonPrimary>
          </div> */}
        </div>

        {/* MORE SECTIONS */}
        {/* === SECTION 5 === */}
        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionGridCategoryBox
            categories={DEMO_TRENDS.filter((_, i) => i < 10)}
          />
          <div className="text-center mx-auto mt-10 md:mt-16">
            <ButtonSecondary>მაჩვენე მეტი</ButtonSecondary>
          </div>
        </div> */}

        {/* === SECTION 5 === */}
        {/* <SectionSliderNewAuthors
          heading="Top elite authors"
          subHeading="Discover our elite writers"
          authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
        /> */}

        {/* SUBCRIBES */}
        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageArchive;
