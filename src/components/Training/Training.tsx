import { AxiosResponse } from "axios";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import LayoutPage from "components/LayoutPage/LayoutPage";
import ModalCourse from "components/ModalCourse/ModalCourse";
import React, { FC, FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackendCourse, TrainingInput } from "types";
import axios from "utils/axios";
import { Redirect, useHistory } from "react-router-dom";
import Heading from "components/Heading/Heading";
import Input from "components/Input/Input";
import DropDown from "components/DropDown";


export interface ServiceInnerProps {
  className?: string;
}



const Training: FC<ServiceInnerProps> = ({ className = "" }) => {
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
  const [success, setSuccess] = useState(false)
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
  })()
    setSuccess(true)};
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

      <header className="text-left mb-10">
          <h1 className="text-3xl font-semibold"> ქართული ენის ტრენინგკურსზე რეგისტრაცია 📜
</h1>
          
           
          
        </header>
        
        <form className="grid grid-cols-1 gap-6" action="#" method="post" onSubmit={handleClickSubmitForm}>
          <label className="form">
            <span className="text-neutral-800 dark:text-neutral-200">
              როგორ მოგმართოთ?
            </span>
            <Input
              required
              type="text"
              placeholder="სახელი და გვარი ან ზედმეტსახელი"
              className="mt-1"
              name="Name"
              value={name}
              onChange={({target: { value }}) => setName(value)}
            />
          </label>
          <label className="form">
            <span className="text-neutral-800 dark:text-neutral-200">
              თქვენი სტატუსი
            </span>
            <select required className="cursor-pointer  form-select block w-full mt-1 border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 rounded-full h-11 px-4 py-3 text-sm font-normal border"
            name="Status"
            value={status}
            onChange={({target: { value }}) => setStatus(value)}
            >
              <option value="" disabled selected hidden className="text-neutral-800 dark:text-neutral-200">აირჩიეთ სტატუსი</option>
              <option value="მასწავლებელი">მასწავლებელი</option>
              <option value="სტუდენტი">სტუდენტი</option>
              <option value="აბიტურიენტი">აბიტურიენტი</option>
              <option value="უბრალოდ დაინტერესებული">უბრალოდ დაინტერესებული</option>
            </select>
          </label>

          <label className="form">
            <span className="text-neutral-800 dark:text-neutral-200">
              თქვენი ასაკი
            </span>
            <Input
              required
              type="text"
              placeholder="შეიყვანეთ თქვენი ასაკი"
              className="mt-1"
              name="Age"
              value={age}
              onChange={({target: { value }}) => setAge(value)}
            />
          </label>
          <label className="form">
            <span className="text-neutral-800 dark:text-neutral-200">
              ტელეფონის ნომერი
            </span>
            <Input
              required
              type="tel"
              placeholder="5--------"
              className="mt-1 tracking-widest"
              name="Phone"
              value={phone}
              onChange={({target: { value }}) => setPhone(value)}
            />
          </label>
          <label className="form">
            <span className="text-neutral-800 dark:text-neutral-200">
              ელ.ფოსტა
            </span>
            <Input
              required
              type="email"
              placeholder="example@animus.ge"
              className="mt-1"
              name="Email"
              value={email}
              onChange={({target: { value }}) => setEmail(value)}
            />
          </label>
          
          <ButtonPrimary type="submit">რეგისტრაცია</ButtonPrimary>
        </form>
      </LayoutPage>
      {success && <Redirect to="/trainingsuccess"/>}
    </div>
  );
};

export default Training;
