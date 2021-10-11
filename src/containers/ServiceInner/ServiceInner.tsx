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

export interface ServiceInnerProps {
  className?: string;
}

const services = {
  'individual': 0,
  'adults': 1,
  'teens': 2,
  'kids': 3
}

const ServiceInner: FC<ServiceInnerProps> = ({ className = "" }) => {
  const [course, setCourse] = useState<BackendCourse>()
  const {slag, slug} = useParams<{slag: string, slug: 'individual'|
  'adults'|
  'teens'|
  'kids'}>()
  const [isReporting, setIsReporting] = useState(false);
  const openModalReportComment = () => setIsReporting(true);
const closeModalReportComment = () => setIsReporting(false);  

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
    <div>
      <LayoutPage isInner={true} heading="" cover={course?.cover}>
        <h2
          className={`flex items-center text-3xl leading-[115%] md:text-3xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 mb-4`}
        >
          {course ? course.title : (<></>)}
        </h2>
        {/* <p>
          {course ? course.description : <></>}
        </p> */}

<div className="">
          <h3 className="block text-xs uppercase tracking-widest text-neutral-900 dark:text-neutral-100 mb-2 font-medium">
            ფასი
          </h3>
          <h2 className="font-bold text-purple-500 dark:text-purple-200 text-3xl leading-none  flex items-center">
            <span>{course?.cost}₾</span>
            <span className="text-sm ml-1 font-medium text-neutral-500">
              / {course?.period}
            </span>
          </h2>
          <hr className="mt-6 mb-6"></hr>
        </div>
        
        {course?.content ? (<div style={{marginTop: 20}} dangerouslySetInnerHTML={{__html: course.content!}}></div>) : <></>}
        
        <div className="flex flex-row gap-2 align-center justify-items-center">
        <ButtonPrimary className="mt-6" onClick={openModalReportComment} href="">შეხვედრის დაჯავშნა</ButtonPrimary>
        
            <ModalCourse
            show={isReporting}
            id={1}
            onCloseModalReportItem={closeModalReportComment}
            selectedPlanIndex={services[slug || 'individual']}
            initialSelectedCourse={course}
            />
            <div>
            <ButtonSecondary className="mt-6" onClick={() => history.goBack()}>უკან დაბრუნება</ButtonSecondary></div>
            </div>
      </LayoutPage>
    </div>
  );
};

export default ServiceInner;
