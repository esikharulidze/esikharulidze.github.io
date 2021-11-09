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
  onSubmit: (text: string) => void
}

const Quizz: FC<ServiceInnerProps> = ({ onSubmit }) => {
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

	<div className=" bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 ">
		<h2 className="font-semibold text-2xl">დატოვეთ დამატებითი კომენტარი</h2>
		<span>თუ თვლით რომ სპეციალისტმა მეტი უნდა იცოდეს თქვენ შესახებ ან  გაგაჩნიათ რაიმე სპეციფიკური სურვილი, გთოხვთ მიუთითოთ.</span>
		<div>
			<ButtonQuizz onClick={() => onSubmit('')} className="w-full rounded-lg mb-4 mt-4">გაგრძელება</ButtonQuizz>
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
  );
};

export default Quizz;
