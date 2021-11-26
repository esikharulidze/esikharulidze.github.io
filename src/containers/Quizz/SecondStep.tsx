import { AxiosResponse } from "axios";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import LayoutPage from "components/LayoutPage/LayoutPage";
import ModalCourse from "components/ModalCourse/ModalCourse";
import React, { FC, useEffect, useState, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BackendCourse } from "types";
import axios from 'utils/axios'
import {DropDown} from "./components";
import Label from "components/Label/Label";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Heading2 from "components/Heading/Heading2";
import ButtonQuizz from "components/Button/ButtonQuizz";

export interface ServiceInnerProps {
  withPartner?: boolean
  isPsychiatrist?: Boolean
  forElse?: boolean
  setAge: (val: number) => void
  age?: number
  partner?: number
  setPartner?: (val: number) => void
  onSubmit: () => void
  forMe?: boolean
}

const services = {
  'individual': 0,
  'adults': 1,
  'teens': 2,
  'kids': 3
}

const Quizz: FC<ServiceInnerProps> = ({ onSubmit, setAge, setPartner, age, partner, withPartner = false, forElse = false, forMe = false, isPsychiatrist=false }) => {
  const [course, setCourse] = useState<BackendCourse>()
  const {slug} = useParams<{slug: 'psychologist' | 'psychiatrist' | 'grouptherapy' | 'educational'}>()
  const [isReporting, setIsReporting] = useState(false);
  const openModalReportComment = () => setIsReporting(true);
const closeModalReportComment = () => setIsReporting(false);

const [selectedAge, setSelectedAge] = useState<number>()
const history = useHistory();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await axios.get<any, AxiosResponse<BackendCourse>>(`course/${slag}`).then(({data}) => {
  //         setCourse(data)
  //       })
  //     } catch(e) {
  //       console.log(e)
  //     }
  //   })()
  // }, [])

  const startQuiz = useCallback(async () => {
    try {

    } catch(e) {
      console.log(e)
    }
  }, [selectedAge, slug])

  return (
    
    
        
//     <div className="min-h-screen bg-primary-100 dark:bg-neutral-800 bg-opacity-25">
//     <div className="grid justify-content-center grid-cols-4">
//       <div className="grid col-start-2 col-span-4 col-end-4 row-start-2 row-end-4">
        
//       <header className="text-center mt-24 mb-10">
//           <h1 className="text-4xl font-semibold">☂️ პირველი ახალი ნაბიჯი
// </h1>
          
//             <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200 mb-10">
//             რომელიც ვფიქრობთ დაგეხმარება და უკეთ გაგრძნობინებს თავს.
//             </span>
          
//         </header>

        <div className=" bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 ">
        <h2 className="font-semibold text-2xl">{forElse ? 'პაციენტის ასაკი' : withPartner ? "ასაკი" : 'თქვენი ასაკი'}</h2>
        <label className='block mt-4'>
			{withPartner ? 'თქვენი ასაკი': null}
                <DropDown className={`cursor-pointer  form-select block w-full mt-1 border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 rounded-md h-11 px-4 py-3 text-sm font-normal border`} placeholder="აირჩიეთ ასაკი" 
                  selected={age}
                  data={Array.from(Array((withPartner || forMe || forElse) ? 83: 95).keys()).slice(0).map((item) => item + ((withPartner || forMe || forElse) ? 18: 6))}
                  setSelected={setAge}
                />
                 
        </label>
		{withPartner ? <label className='block mt-4'>
			თქვენი პარტნიორის ასაკი
                <DropDown className={`cursor-pointer  form-select block w-full mt-1 border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 rounded-md h-11 px-4 py-3 text-sm font-normal border`} placeholder="აირჩიეთ ასაკი" 
                  selected={partner}
                  data={Array.from(Array(83).keys()).slice(0).map((item) => item + 18)}
                  setSelected={setPartner!}
                />
                 
        </label>: null}
        <div>
        { age && (withPartner ? partner : true) ?
        <ButtonQuizz onClick={onSubmit} className={"w-full rounded-lg mb-4 mt-4"} 
        bgColor={withPartner ? "bg-red-500 hover:bg-red-600" : isPsychiatrist ? "bg-yellow-600 hover:bg-yellow-700" :"bg-primary-6000 hover:bg-primary-700"}
        ringColor={withPartner ? "focus:ring-red-500" : isPsychiatrist ? "focus:ring-yellow-600": "focus:ring-primary-6000"}
        >
        შემდეგი ნაბიჯი
        </ButtonQuizz>
        : null
        }
        </div>
        <div className='mt-5'>
				<div className={isPsychiatrist ? 'flex flex-row gap-4 block bg-red-500 mb-2 w-full rounded-md p-5':'flex flex-row gap-4 block bg-yellow-600 mb-2 w-full rounded-md p-5'}>
					<div>
						<svg
							width='40'
							height='40'
							viewBox='0 0 48 48'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z'
								fill={isPsychiatrist ? '#dc3c3c': '#BA7F02'}
							/>
							<path
								d='M24 32V24'
								stroke='white'
								stroke-width='4'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
							<path
								d='M24 16H24.0204'
								stroke='white'
								stroke-width='4'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</div>
					<p className='text-white md:text-sm lg:text-sm'>
						კითხვარს გაეცნობა მხოლოდ თქვენ მიერ არჩეული სპეციალისტი, რათა შემოგთავაზოთ თქვენზე მორგებული თერაპია ან მკურნალობა. კონფიდენციალურობის პოლიტიკა <a className="font-semibold" target="_blank" href="https://animus.ge/privacy-policy">იხილეთ ბმულზე.</a>
					</p>
				</div>
			</div>
        </div>
    //   </div>
    // </div>
    // </div>
   
  );
};

export default Quizz;
