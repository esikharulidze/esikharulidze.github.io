import LayoutPage from "components/LayoutPage/LayoutPage";
import { CheckIcon } from "@heroicons/react/solid";
import React, { FC, useEffect, useState  } from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import NcImage from "components/NcImage/NcImage";
import axios from 'utils/axios'
import { BackendCourse } from "types";
import { AxiosResponse } from "axios";
import { useHistory } from "react-router-dom";

export interface PageSubcriptionProps {
  className?: string;
}

export interface PricingItem {
  isPopular: boolean;
  name: string;
  pricing: string;
  desc: string;
  per: string;
  // features: string[];
  short?: string[];
}

const pricings: PricingItem[] = [
  {
    isPopular: false,
    name: "ფასი",
    pricing: "180₾",
    per: "/თვე",
    short: ["ემოციური ინტელექტის კურსი 5-17 წლის მოზარდებისთვის."],
    // features: ["🕗 შეხვედრების ინტენსივობა - კვირაში 2 დღე", "🎨 კურსის ხანგრძლივობა – 16 შეხვედრა.", "⏳ შეხვედრის ხანგრძლივობა – 1სთ და 30 წთ "],
    desc: ` Literally you probably haven't heard of them jean shorts.`,
  },
  {
    isPopular: false,
    name: "ფასი",
    pricing: "90₾",
    per: "/3 თვე",
    short: ["ემოციური ინტელექტის კურსი 5-17 წლის მოზარდებისთვის."],
    // features: ["🕗 შეხვედრების ინტენსივობა - კვირაში 2 დღე", "🎨 კურსის ხანგრძლივობა – 16 შეხვედრა.", "⏳ შეხვედრის ხანგრძლივობა – 1სთ და 30 წთ "],
    desc: ` Literally you probably haven't heard of them jean shorts.`,
  },
  {
    isPopular: false,
    name: "ფასი",
    pricing: "250₾",
    per: "/5 შეხვედრა",
    short: ["ემოციური ინტელექტის კურსი 5-17 წლის მოზარდებისთვის."],
    // features: ["🕗 შეხვედრების ინტენსივობა - კვირაში 2 დღე", "🎨 კურსის ხანგრძლივობა – 16 შეხვედრა.", "⏳ შეხვედრის ხანგრძლივობა – 1სთ და 30 წთ "],
    desc: ` Literally you probably haven't heard of them jean shorts.`,
  },
  {
    isPopular: false,
    name: "ფასი",
    pricing: "400₾",
    per: "/თვე",
    short: ["ემოციური ინტელექტის კურსი 5-17 წლის მოზარდებისთვის."],
    // features: ["🕗 შეხვედრების ინტენსივობა - კვირაში 2 დღე", "🎨 კურსის ხანგრძლივობა – 16 შეხვედრა.", "⏳ შეხვედრის ხანგრძლივობა – 1სთ და 30 წთ "],
    desc: ` Literally you probably haven't heard of them jean shorts.`,
  },
  {
    isPopular: false,
    name: "ფასი",
    pricing: "400₾",
    per: "/თვე",
    short: ["ემოციური ინტელექტის კურსი 5-17 წლის მოზარდებისთვის."],
    // features: ["🕗 შეხვედრების ინტენსივობა - კვირაში 2 დღე", "🎨 კურსის ხანგრძლივობა – 16 შეხვედრა.", "⏳ შეხვედრის ხანგრძლივობა – 1სთ და 30 წთ "],
    desc: ` Literally you probably haven't heard of them jean shorts.`,
  },
  {
    isPopular: false,
    name: "ფასი",
    pricing: "400₾",
    per: "/თვე",
    short: ["ემოციური ინტელექტის კურსი 5-17 წლის მოზარდებისთვის."],
    // features: ["🕗 შეხვედრების ინტენსივობა - კვირაში 2 დღე", "🎨 კურსის ხანგრძლივობა – 16 შეხვედრა.", "⏳ შეხვედრის ხანგრძლივობა – 1სთ და 30 წთ "],
    desc: ` Literally you probably haven't heard of them jean shorts.`,
  },
];

const PageSubcription: FC<PageSubcriptionProps> = ({ className = "" }) => {
  const [courses, setCourses] = useState<BackendCourse[]>([])
  const history = useHistory()
  useEffect(() => {
    (async () => {
      try {
        await axios.get<any, AxiosResponse<BackendCourse[]>>('course').then(({data}) => {
          setCourses(data)
        })
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  const renderPricingItem = (pricing: BackendCourse, index: number) => {
    return (
      <div
        key={index}
        className={`h-full relative px-6 py-8 rounded-3xl border-2 flex flex-col overflow-hidden ${
          // pricing.isPopular
          //   ? "border-primary-500"
             "border-neutral-100 dark:border-neutral-700"
        }`}
      >
        {/* {pricing.isPopular && (
          <span className="bg-primary-500 text-white px-3 py-1 tracking-widest text-xs absolute right-3 top-3 rounded-full z-10">
            ინდივიდუალური‎‏‏‎‎‎
          </span>
        )} */}

        <NcImage className="rounded-3xl " src="https://i.ibb.co/svMpTQp/Course-Emotion.png" />
        
        <nav className="space-y-4 mt-8 mb-3">
          {/* {pricing.description?.map((item, index) => ( */}
            <li className="flex items-center" >
              {/* <span className="inline-flex flex-shrink-0 text-primary-6000">
                <CheckIcon className="w-5 h-5" aria-hidden="true" />
              </span> */}
              <span className="text-neutral-700 dark:text-neutral-300">
                {pricing.description}
              </span>
            </li>
          {/* ))} */}
        </nav>
        {/* <nav className="space-y-3 mt-3 mb-3">
          {pricing.features.map((item, index) => (
            <li className="flex items-center" key={index}>
              <span className="inline-flex flex-shrink-0 text-primary-6000">
                <CheckIcon className="w-5 h-5" aria-hidden="true" />
              </span>
              <span className="text-neutral-700 dark:text-neutral-300">
                {item}
              </span>
            </li>
          ))}
        </nav> */}
        <div className="mt-2">
          <h3 className="block text-sm uppercase tracking-widest text-neutral-6000 dark:text-neutral-300 mb-2 font-medium">
            ფასი
          </h3>
          <h2 className="font-medium text-3xl leading-none flex items-center">
            <span>{pricing.cost}₾/</span>
            <span className="text-lg ml-1 font-normal text-neutral-500">
              {pricing.period}
            </span>
          </h2>
        </div>
        <div className="flex flex-col mt-4">
          {/* {pricing.isPopular ? (
            <ButtonPrimary>Submit</ButtonPrimary>
          ) : ( */}
          
            <ButtonPrimary onClick={() => history.push(`/services/${pricing.slug}`)}>
              <h2 className="font-medium mt-1">გაიგე მეტი</h2>
            </ButtonPrimary>
          {/* )} */}
          {/* <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3">
            {pricing.desc}
          </p> */}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-PageSubcription ${className}`}
      data-nc-id="PageSubcription"
    >
      <LayoutPage
        subHeading="აირჩიეთ თქვენთვის სასურველი კურსი, შეხვედრა ან შეთავაზება."
        headingEmoji="💎"
        heading="სერვისები"
        isInner={false}
      >
        <section className="text-neutral-600 text-sm md:text-base overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-5 xl:gap-8">
            {courses.map(renderPricingItem)}
          </div>
        </section>
      </LayoutPage>
    </div>
  );
};

export default PageSubcription;
