import { AxiosResponse } from "axios";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import LayoutPage from "components/LayoutPage/LayoutPage";
import ModalCourse from "components/ModalCourse/ModalCourse";
import React, { FC, FormEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BackendCourse, TrainingInput } from "types";
import axios from "utils/axios";
import { useHistory } from "react-router-dom";
import Heading from "components/Heading/Heading";
import Input from "components/Input/Input";
import DropDown from "components/DropDown";
import NcImage from "components/NcImage/NcImage";

export interface ServiceInnerProps {
  className?: string;
}



const TrainingSuccess: FC<ServiceInnerProps> = ({ className = "" }) => {
  const [course, setCourse] = useState<BackendCourse>();
  const { slag, slug } =
    useParams<{
      slag: string;
      slug: "individual" | "adults" | "teens" | "kids";
    }>();
  const [isReporting, setIsReporting] = useState(false);
  const openModalReportComment = () => setIsReporting(true);
  const closeModalReportComment = () => setIsReporting(false);
  const [selectedCourse, setSelectedCourse] = useState<BackendCourse>();

  const history = useHistory();
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState('')
  const handleClickSubmitForm = (e:FormEvent) => {
    (async () => {
    e.preventDefault()
    console.log({
      name,
      age,
      email,
      phone,
      status
    });
    const object = {
      "Name": name,
      "Age": age,
      "Email": email,
      "Phone": phone,
      "Status": status
    }
    await axios.post<TrainingInput, any>("https://sheet.best/api/sheets/b7a639b8-5d9a-42c4-b3cc-2e6e8e800ab8", object).then(() => {
    })
  })()};
  useEffect(() => {
    (async () => {
      try {
        await axios
          .get<any, AxiosResponse<BackendCourse>>(`course/${slag}`)
          .then(({ data }) => {
            setCourse(data);
          });
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <div>

    

      <LayoutPage isInner={false} heading="" cover={course?.cover}>

     <div className="flex justify-center">
      <div className="max-w-3xl mt-10">
      <NcImage src="https://i.ibb.co/j3F8Gsd/Illustration-ZOOM.png"/>
      </div>
      </div>
      <h1 className="text-3xl text-center mt-20 font-semibold">✨ თქვენ წარმატებით გაიარეთ რეგისტრაცია</h1>
      <p className="text-base text-center mt-5 font-regular">ჩვენი წარმომადგენელი მალე დაგიკავშირდებათ და გაგაცნობთ ტრენინგკურსის დეტალებს</p>
      <div className="flex justify-center">
        <a target="_blank" href="https://www.facebook.com/events/284990526830095">
      <ButtonPrimary className="mt-10">ტრენინგის ივენთზე დაბრუნება</ButtonPrimary>
      </a>
      </div>
      </LayoutPage>
    </div>
  );
};

export default TrainingSuccess;
