import { AxiosResponse } from "axios";
import ButtonSecondary from "components/Button/ButtonSecondary";
import LayoutPage from "components/LayoutPage/LayoutPage";
import ModalCourse from "components/ModalCourse/ModalCourse";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackendCourse } from "types";
import axios from 'utils/axios'
import {useHistory} from "react-router-dom";
import DropDown from "components/DropDown";
import Label from "components/Label/Label";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Heading2 from "components/Heading/Heading2";
import ButtonQuizz from "components/Button/ButtonQuizz";

export interface ServiceInnerProps {
  psychiatrist?: boolean
  onChoose?: (val: 'first'|'second') => void
}

const services = {
  'individual': 0,
  'adults': 1,
  'teens': 2,
  'kids': 3
}

const QuizzV2: FC<ServiceInnerProps> = ({ psychiatrist = false, onChoose }) => {
  const [course, setCourse] = useState<BackendCourse>()
  const {slag, slug} = useParams<{slag: string, slug: 'individual'|
  'adults'|
  'teens'|
  'kids'}>()
  const [isReporting, setIsReporting] = useState(false);
  const openModalReportComment = () => setIsReporting(true);
const closeModalReportComment = () => setIsReporting(false);

const [selectedCourse, setSelectedCourse] = useState<BackendCourse>()
const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        await axios.get<any, AxiosResponse<BackendCourse>>(`course/${slag}`).then(({data}) => {
          setCourse(data)
        })
      } catch(e) {
        console.log(e)
      }
    })()
  }, [])
  return (
    
    
        
//     <div className="min-h-screen bg-primary-100 dark:bg-neutral-800 bg-opacity-25">
//     <div className="grid justify-content-center grid-cols-1 xl:grid-cols-4 md:grid-cols-1 lg:grid-cols-1">
//       <div className="grid col-start-2 col-span-4 col-end-4 row-start-2 row-end-4">
        
//       <header className="text-center mt-24 mb-10">
//           <h1 className="text-4xl font-semibold">☂️ პირველი ახალი ნაბიჯი
// </h1>
          
//             <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200 mb-10">
//             რომელიც ვფიქრობთ დაგეხმარება და უკეთ გაგრძნობინებს თავს.
//             </span>
          
//         </header>

        <div className=" bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 ">
        <h2 className="font-semibold text-2xl mb-4">{psychiatrist ? 'ფსიქიატრთან ვიზიტის ტიპი' : 'როგორი ტიპის ვიზიტი გსურთ?'}</h2>
        
                 
        <div className="grid grid-cols-1 gap-2">
        <ButtonQuizz className="w-full rounded-lg text-left" bgColor={psychiatrist ? "bg-yellow-600 hover:bg-yellow-700": "bg-primary-6000 hover:bg-primary-700"} ringColor={psychiatrist ? "ring-yellow-600": "ring-primary-6000"} onClick={() => onChoose&& onChoose('first')}>{psychiatrist ? 'მსურს ვიზიტი დავჯავშნო ჩემთვის' : 'ინდივიდუალური ვიზიტი ფსიქოლოგთან'}</ButtonQuizz>
        <ButtonQuizz className={"w-full rounded-lg text-left"} bgColor={psychiatrist ? "bg-yellow-600 hover:bg-yellow-700": "bg-red-500 hover:bg-red-600"} ringColor={psychiatrist ? "ring-yellow-600": "ring-red-500"} onClick={() => onChoose && onChoose('second')}>{psychiatrist ? 'მსურს ვიზიტი დავჯავშნო სხვისთვის' : 'წყვილების თერაპია ფსიქოლოგთან'}</ButtonQuizz>
        </div>
        <div className='mt-5'>
				<div className={psychiatrist ? 'flex flex-row gap-4 block bg-red-500 mb-2 w-full rounded-md p-5':'flex flex-row gap-4 block bg-yellow-600 mb-2 w-full rounded-md p-5'}>
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
								fill={psychiatrist ? '#dc3c3c': '#BA7F02'}
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

export default QuizzV2;
