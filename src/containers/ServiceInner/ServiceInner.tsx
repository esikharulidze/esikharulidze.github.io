import { AxiosResponse } from "axios";
import ButtonPrimary from "components/Button/ButtonPrimary";
import LayoutPage from "components/LayoutPage/LayoutPage";
import ModalCourse from "components/ModalCourse/ModalCourse";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackendCourse } from "types";
import axios from 'utils/axios'

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
  const {slag} = useParams<{slag: string}>()
  const [isReporting, setIsReporting] = useState(false);
  const openModalReportComment = () => setIsReporting(true);
const closeModalReportComment = () => setIsReporting(false);  

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
      <LayoutPage isInner={true} heading="">
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
          <h2 className="font-medium text-purple-500 dark:text-purple-200 text-3xl leading-none  flex items-center">
            <span>{course?.cost}₾/</span>
            <span className="text-sm ml-1 font-medium text-neutral-500">
              {course?.period}
            </span>
          </h2>
        </div>

        {course?.content ? (<div style={{marginTop: 20}} dangerouslySetInnerHTML={{__html: course.content!}}></div>) : <></>}
        <ButtonPrimary onClick={openModalReportComment} href="">შეხვედრის დაჯავშნა</ButtonPrimary>
            <ModalCourse
            show={isReporting}
            id={1}
            onCloseModalReportItem={closeModalReportComment}
            selectedPlanIndex={services[course?.service.slug || 'individual']}
            initialSelectedCourse={course}
            />
      </LayoutPage>
    </div>
  );
};

export default ServiceInner;
