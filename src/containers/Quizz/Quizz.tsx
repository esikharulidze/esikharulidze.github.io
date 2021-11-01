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
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import QuizItem from './QuizItem'

export interface ServiceInnerProps {
  className?: string;
}


const Quizz: FC<ServiceInnerProps> = ({ className = "" }) => {
  const [course, setCourse] = useState<BackendCourse>()
  const {slug} = useParams<{slug: 'psychologist' | 'psychiatrist' | 'grouptherapy' | 'educational'}>()
  const [isReporting, setIsReporting] = useState(false);
  const openModalReportComment = () => setIsReporting(true);
const closeModalReportComment = () => setIsReporting(false);
const [withPartner, setWithPartner] = useState(false)
const [partner, setPartner] = useState<number>()
const [age, setAge] = useState<number>()
const [forElse, setForElse] = useState(false)
const [step, setStep] = useState(1)

const [currentQuestion, setCurrentQuestion] = useState<Question>()
const [surveyId, setSurveyId] = useState('')


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
      setStep(3)
      const {data} = await axios.get<any, AxiosResponse<{question: any, surveyId: string}>>(`survey/start/${slug}?age=${age}&forElse=${forElse}${partner ? '&partner='+partner: ''}`)
      setSurveyId(data.surveyId)
      setCurrentQuestion(data.question)
    } catch(e) {
      console.log(e)
    }
  }, [age, slug])

  const resumeQuiz = useCallback(async (answerIds: string[]) => {
    try {
      const {data} = await axios.patch<any, AxiosResponse<Question | {age: number}>>(`survey/continue/${surveyId}`, {
        questionId: currentQuestion!._id,
        answerIds: answerIds
      })
      if ('age' in data) {
      } else {
        setCurrentQuestion(data)
      }
    } catch (e) {
      console.log(e)
    }
  }, [surveyId, currentQuestion])

  const onFirstStepChoice = useCallback((val: 'first'| 'second') => {
    if (val === 'second') {
      if (slug === 'psychiatrist') {
        setForElse(true)
      } else if (slug === 'psychologist') {
        setWithPartner(true)
      }
    }
    setStep(2)
  }, [slug])

  switch(step) {
    case 1:
      return <FirstStep psychiatrist={slug === 'psychiatrist'} onChoose={onFirstStepChoice} />
    case 2:
      return <SecondStep onSubmit={startQuiz} withPartner={withPartner} forElse={forElse} setAge={setAge} setPartner={setPartner} age={age} partner={partner} />
    default:
      return <QuizItem question={currentQuestion} onSubmit={resumeQuiz} />
  }
};

export default Quizz;
