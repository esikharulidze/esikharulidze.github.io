import LayoutPage from "components/LayoutPage/LayoutPage";
import { CheckIcon } from "@heroicons/react/solid";
import React, { FC, useEffect, useState  } from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import NcImage from "components/NcImage/NcImage";
import axios from 'utils/axios'
import { BackendCourse, BackendService } from "types";
import { AxiosResponse } from "axios";
import { useHistory, useLocation, useParams } from "react-router-dom";
import NavItem from "components/NavItem/NavItem";
import Nav from "components/Nav/Nav";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
// @ts-ignore
import MessengerCustomerChat from 'react-messenger-customer-chat';

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
const TABS = [
  {
    value: 'all',
    label: 'ყველა'
  },
  {
    value: 'individual',
    label: 'ინდივიდუალური'
  },
  {
    value: 'adults',
    label: 'ზრდასრულებისთვის'
  },
  {
    value: 'teens',
    label: 'მოზარდებისთვის'
  },
  {
    value: 'kids',
    label: 'ბავშვებისთვის'
  },
]
const PageSubcription: FC<PageSubcriptionProps> = ({ className = "" }) => {
  let timeOut: NodeJS.Timeout | null = null;
  const [courses, setCourses] = useState<BackendCourse[]>([])
  const [services, setServices] = useState<BackendService[]>([])
  const [selectedService, setSelectedService] = useState<BackendService>()
  const history = useHistory()
  const {slug} = useParams<{slug: string}>()
  const [tabActive, setTabActive] = useState<{value: string, label: string}>(TABS[0]);

  const handleClickTab = (item: {value: string, label: string}) => {
    if (item === tabActive) {
      return;
    }
    // setIsLoading(true);
    // setTabActive(item);
    history.push(`/services${item.value === 'all' ? '': '/' + item.value}`)
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      // setIsLoading(false);
    }, 600);
  };

  const selectInitialTab = () => {
    if (slug) {
      const item = TABS.filter(a => a.value === slug)
      setTabActive(item[0])
    }
  }


  useEffect(() => {
    (async () => {
      try {
        await axios.get<any, AxiosResponse<BackendService[]>>('service').then(({data}) => {
          setServices(data)
        })
        await axios.get<any, AxiosResponse<BackendCourse[]>>('course').then(({data}) => {
          setCourses(data)
        })
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])
  
  useEffect(() => {
    (async () => {
      try {
        selectInitialTab()
        await axios.get<any, AxiosResponse<BackendService>>(`service/${slug}`).then(({data}) => {
          setSelectedService(data)
        })
      } catch (e) {
        console.log(e)
      }
    })()
  }, [slug])

  const renderPricingItem = (pricing: BackendCourse, index: number) => {
    return (
      <div
        key={index}
        className={`h-full px-6 py-8 rounded-3xl border flex flex-col overflow-visible [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${
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
        
        <nav className="space-y-2 mt-4">
        <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">{pricing.title}</h3>
          {/* {pricing.description?.map((item, index) => ( */}
            <li className="flex items-center" >
              {/* <span className="inline-flex flex-shrink-0 text-primary-6000">
                <CheckIcon className="w-5 h-5" aria-hidden="true" />
              </span> */}
              <span className="mb-2 text-neutral-500 dark:text-neutral-400">
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
          <h3 className="block text-xs uppercase tracking-widest text-neutral-6000 dark:text-neutral-300 mb-2 font-medium">
            ფასი
          </h3>
          <h2 className="font-medium text-3xl leading-none  flex items-center">
            <span>{pricing.cost}₾/</span>
            <span className="text-sm ml-1 font-normal text-neutral-500">
              {pricing.period}
            </span>
          </h2>
        </div>
        <div className="flex flex-col mt-4">
          {/* {pricing.isPopular ? (
            <ButtonPrimary>Submit</ButtonPrimary>
          ) : ( */}
          
            <ButtonPrimary onClick={() => history.push(`/services/${pricing.service.slug || selectedService?.slug}/${pricing.slug}`)}>
              <h2 className="font-medium mt-1">გაიგეთ მეტი</h2>
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
        subHeading={selectedService ? selectedService.description : "აირჩიეთ თქვენთვის სასურველი კურსი, შეხვედრა ან შეთავაზება."}
        // headingEmoji="💎"
        heading={selectedService ? selectedService.title: "სერვისები"}
        isInner={false}
      >
        {/* <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row mb-10"> */}
            <Nav className="sm:space-x-2 mb-10 flex flex-wrap">
              {TABS.map((item, index) => (
                <NavItem
                  key={index}
                  isActive={tabActive === item}
                  onClick={() => handleClickTab(item)}
                >
                  {item.label}
                </NavItem>
              ))}
            </Nav>
            {/* <div className="block my-4 border-b w-full border-neutral-100 sm:hidden"></div> */}
            {/* <div className="flex justify-end">
              <ArchiveFilterListBox lists={FILTERS} />
            </div> */}
          {/* </div> */}

        <section className="text-neutral-600 text-sm md:text-base overflow-visible">
          <div className="grid lg:grid-cols-3 gap-5 xl:gap-8">
            {slug ? selectedService?.courses.map(renderPricingItem) : courses.map(renderPricingItem)}
          </div>
          

        </section>
      </LayoutPage>
    </div>
  );
};

export default PageSubcription;
