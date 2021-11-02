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
  question?: Question
  onSubmit?: (val: string[]) => void
}

const services = {
  'individual': 0,
  'adults': 1,
  'teens': 2,
  'kids': 3
}

const QuizzV2: FC<ServiceInnerProps> = ({ question, onSubmit }) => {
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

const [checkedAnswers, setCheckedAnswers] = useState(new Set<string>())


  return (
    
    
        
    <div className="min-h-screen bg-primary-100 dark:bg-neutral-800 bg-opacity-25">
    <div className="grid justify-content-center grid-cols-1 xl:grid-cols-4 md:grid-cols-1 lg:grid-cols-1">
      <div className="grid col-start-2 col-span-4 col-end-4 row-start-2 row-end-4">
        
      <header className="text-center mt-24 mb-10">
          <h1 className="text-4xl font-semibold">☂️ პირველი ახალი ნაბიჯი
</h1>
          
            <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200 mb-10">
            რომელიც ვფიქრობთ დაგეხმარება და უკეთ გაგრძნობინებს თავს.
            </span>
          
        </header>

        <div className=" bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 ">
        <h2 className="font-semibold text-2xl mb-4">{question ? question.question : 'loading'}</h2>
        
		{question && question.multiple ? (<div className="space-y-6">
			{question.answers.map(answer => (

			<div key={answer._id}>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox rounded cursor-pointer" checked={checkedAnswers.has(answer._id)} onClick={ () => checkedAnswers.has(answer._id) ? setCheckedAnswers(prev => new Set([...Array.from(prev)].filter(a => a !== answer._id))): setCheckedAnswers(prev => new Set(checkedAnswers.add(answer._id)))} />
          <span className="ml-2 font-medium text-neutral-700 dark:text-neutral-200">{answer.answer}</span>
        </label>
        </div>
			))}
			<ButtonQuizz className="w-full rounded-lg mt-8" onClick={() => question.multiple && onSubmit && onSubmit(Array.from(checkedAnswers))}>გაგრძელება</ButtonQuizz>
		</div>): (
			<div className={`grid grid-cols-1 gap-2 ${question && question.answers.length > 3 ? 'sm:gird-cols-2': 'sm:gird-cols-1'}`}>
			{question ? question.answers.map(answer => <ButtonQuizz key={answer._id} className="w-full rounded-lg text-left" onClick={() => {
				!question.multiple && onSubmit && onSubmit([answer._id])
			}}>{answer.answer}</ButtonQuizz>): null}</div>
		)}
                
        
        {/* <ButtonQuizz className="w-full rounded-lg text-left" onClick={() => onChoose&& onChoose('first')}>{psychiatrist ? 'მსურს ვიზიტი დავჯავშნო ჩემთვის' : 'ინდივიდუალური ვიზიტი ფსიქოლოგთან'}</ButtonQuizz>
        <ButtonQuizz className="w-full rounded-lg text-left" onClick={() => onChoose&& onChoose('second')}>{psychiatrist ? 'მსურს ვიზიტი დავჯავშნო სხვისთვის' : 'წყვილების თერაპია ფსიქოლოგთან'}</ButtonQuizz> */}
        
        <div className="">
        <div className="flex flex-row mt-6 gap-4 block bg-yellow-600	 mb-2 w-full rounded-md p-5">
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

export default QuizzV2;
