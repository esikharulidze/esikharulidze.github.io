import { AxiosResponse } from "axios";
import LayoutPage from "components/LayoutPage/LayoutPage";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackendCourse } from "types";
import axios from 'utils/axios'

export interface ServiceInnerProps {
  className?: string;
}

const ServiceInner: FC<ServiceInnerProps> = ({ className = "" }) => {
  const [course, setCourse] = useState<BackendCourse>()
  const {slug} = useParams<{slug: string}>()

  useEffect(() => {
    (async () => {
      try {
        await axios.get<any, AxiosResponse<BackendCourse>>(`course/${slug}`).then(({data}) => {
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
          className={`flex items-center text-3xl leading-[115%] md:text-3xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 mb-8`}
        >
          {course ? course.title : (<></>)}
        </h2>
        <p>
          {course ? course.description : <></>}
        </p>

        {course?.content ? (<div style={{marginTop: 20}} dangerouslySetInnerHTML={{__html: course.content!}}></div>) : <></>}
      </LayoutPage>
    </div>
  );
};

export default ServiceInner;
