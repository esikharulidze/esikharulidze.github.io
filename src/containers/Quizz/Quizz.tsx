import { AxiosResponse } from "axios";
import ButtonPrimary from "components/Button/ButtonPrimary";
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
  className?: string;
}

const services = {
  'individual': 0,
  'adults': 1,
  'teens': 2,
  'kids': 3
}

const Quizz: FC<ServiceInnerProps> = ({ className = "" }) => {
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
    
    
        
    <div className="min-h-screen bg-primary-100 dark:bg-neutral-800 bg-opacity-25">
    <div className="grid justify-content-center grid-cols-4">
      <div className="grid col-start-2 col-span-4 col-end-4 row-start-2 row-end-4">
        
      <header className="text-center mt-24 mb-10">
          <h1 className="text-4xl font-semibold">☂️ პირველი ახალი ნაბიჯი
</h1>
          
            <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200 mb-10">
            რომელიც ვფიქრობთ დაგეხმარება და უკეთ გაგრძნობინებს თავს.
            </span>
          
        </header>

        <div className=" bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 ">
        <h2 className="font-semibold text-2xl">თქვენი ასაკი</h2>
        <label className='block mt-4'>
                <DropDown className={`cursor-pointer  form-select block w-full mt-1 border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 rounded-md h-11 px-4 py-3 text-sm font-normal border`} placeholder="აირჩიეთ ასაკი" 
                  // selectedCourse="test"
                  setSelectedCourse={setSelectedCourse}
                  onShowMore={closeModalReportComment}
                  
                />
                 
        </label>
        <div>
        <ButtonQuizz className="w-full rounded-lg mb-4 mt-4">გაგრძელება</ButtonQuizz>
        </div>
        <div className="">
        <div className="flex flex-row gap-4 block bg-yellow-600	 mb-2 w-full rounded-md p-5">
        <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#BA7F02"/>
<path d="M24 32V24" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 16H24.0204" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
        <p className="text-white">კითხვარი გამოიყენება პროფესიონალი ფსიქოლოგის მიერ,
        რათა მას წინასწარი ზოგადი ინფორმაცია ჰქონდეს თქვენ შესახებ, რაც დაეხმარება თერაპიის უკეთესად წარმართვაში.</p>
        </div>
        </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Quizz;
