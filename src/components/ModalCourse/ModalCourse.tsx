import React, { FC, useEffect, useRef, useState, useReducer, FormEvent } from "react";
import NcModal from "components/NcModal/NcModal";
import Textarea from "components/Textarea/Textarea";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import { RadioGroup } from "@headlessui/react";
import twFocusClass from "utils/twFocusClass";
import Label from "components/Label/Label";
import Input from "components/Input/Input";
import Select from "components/Select/Select";
import DropDown from 'components/DropDown'
import debounce from 'lodash.debounce'
import axios from 'utils/axios'
import { AxiosResponse } from "axios";
import { BackendCourse, BackendService, CustomerInput } from "types";
import {showToast} from 'utils/toast'
import ButtonQuizz from "components/Button/ButtonQuizz";

export interface ProblemPlan {
  name: string;
  id: string;
  label: string;
  select?: Select
}

export interface Select {
  label: string
  default: string
  data: {
    id: number
    label: string
    value: string
    slug: string
  }[]
}

export interface ModalReportItemProps {
  id: number | string;
  show: boolean;
  problemPlans?: ProblemPlan[];
  onCloseModalReportItem: () => void;
  selectedPlanIndex?: number  
  initialSelectedCourse?: BackendCourse
}


const problemPlansDemo = [
  {
    name: "ინდივიდუალური‎‏‏‎‎‎",
    id: "individual",
    label: "ინდივიდუალური‏‏‎",
    // select: {
    //   default: "აირჩიეთ თერაპევტი",
    //   label: 'თერაპევტი',
    //   data: [
    //     {
    //       id: 1,
    //       label: 'ელენე სიხარულიძე',
    //       value: 'elene_sikharulidze'
    //     },
    //     {
    //       id: 2,
    //       label: 'ხატია მარჯანიძე',
    //       value: 'khatia_marjanidze'
    //     },
    //     {
    //       id: 3,
    //       label: 'ეკატერინე ჩიქოვანი',
    //       value: 'ekaterine_chikhovani'
    //     },
    //     {
    //       id: 4,
    //       label: 'ლევან ბეჟანიძე',
    //       value: 'levan_bezhanidze'
    //     },
    //   ]
    // }
  },
  { name: "ზრდასრულებისთვის", id: "adults", label: "ზრდასრულებისთვის", select: {
    label: "კურსი",
    default: "აირჩიეთ კურსი",
    data: [
      {
        id: 1,
        label: "კურსი 1",
        value: "kursi_1",
        slug: 'emotional-intelligence-course'
      },
      {
        id: 2,
        label: "კურსი 2",
        value: "kursi_2",
        slug: "emotional-intelligence-course"
      }
    ]  
  }  },
  { name: "მოზარდები‏‏‎სთვის‏‎‏‏", id: "teens", label: "მოზარდებისთვის‏‏‎‎", select:{
    label: "კურსი",
    default: "აირჩიეთ კურსი",
    data: [
      {
        id: 1,
        label: "კურსი 1",
        value: "kursi_1",
        slug: "emotional-intelligence-course"
      },
      {
        id: 2,
        label: "კურსი 2",
        value: "kursi_2",
        slug: "emotional-intelligence-course"
      },
      {
        id: 3,
        label: "კურსი 1",
        value: "kursi_1",
        slug: "emotional-intelligence-course"
      },
      {
        id: 4,
        label: "კურსი 2",
        value: "kursi_2",
        slug: "emotional-intelligence-course"
      },
      {
        id: 5,
        label: "კურსი 1",
        value: "kursi_1",
        slug: "emotional-intelligence-course"
      },
      {
        id: 6,
        label: "კურსი 2",
        value: "kursi_2",
        slug: "emotional-intelligence-course"
      },
      {
        id: 7,
        label: "კურსი 1",
        value: "kursi_1",
        slug: "emotional-intelligence-course"
      },
      {
        id: 8,
        label: "კურსი 2",
        value: "kursi_2",
        slug: "emotional-intelligence-course"
      }
    ]
  } },
  { name: "ბავშვებისთვის‏‏‎", id: "kids", label: "ბავშვებისთვის", select: {
    label: "კურსი",
    default: "აირჩიეთ კურსი",
    data: [
      {
        id: 1,
        label: "კურსი 1",
        value: "kursi_1",
        slug: "emotional-intelligence-course"
      },
      {
        id: 2,
        label: "კურსი 2",
        value: "kursi_2",
        slug: "emotional-intelligence-course"
      }
    ]  
  } 
  },
  // { name: "ჯგუფური შეხვედრა", id: "group", label: "ჯგუფური შეხვედრა", select: {
  //   label: "კურსი",
  //   default: "აირჩიეთ კურსი",
  //   data: [
  //     {
  //       id: 1,
  //       label: "კურსი 1",
  //       value: "kursi_1"
  //     },
  //     {
  //       id: 2,
  //       label: "კურსი 2",
  //       value: "kursi_2"
  //     }
  //   ]  
  // } },
];

const ModalCourse: FC<ModalReportItemProps> = ({
  problemPlans = problemPlansDemo,
  id,
  show,
  onCloseModalReportItem,
  selectedPlanIndex = 0,
  initialSelectedCourse
}) => {
  const textareaRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null)
  const [problemSelected, setProblemSelected] = useState(problemPlans[selectedPlanIndex]);
  const [courseWrapper, setCourseWrapper] = useState<BackendService>()
  const [selectedCourse, setSelectedCourse] = useState<BackendCourse>()
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [problem, setProblem] = useState('')
  const [parent, setParent] = useState('')

  useEffect(() => {
    if (selectedPlanIndex !== null) {
      setProblemSelected(problemPlans[selectedPlanIndex])
    }
  }, [selectedPlanIndex])

  useEffect(() => {
    if (initialSelectedCourse) {
      setSelectedCourse(initialSelectedCourse)
    }
  }, [initialSelectedCourse])

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        const element: HTMLInputElement | null = inputRef.current;
        if (element) {
          (element as HTMLInputElement).focus();
        }
      }, 400);
    }
  }, [show]);

  const emptyState = () => {
    setName('')
    setAge('')
    setEmail('')
    setPhone('')
    setProblem('')
    setParent('')
  }

  useEffect(() => {
    (async () => {
      try {
        emptyState()
        if (!initialSelectedCourse) {
          if (problemSelected.select) {
            setSelectedCourse(undefined)
            await axios.get<any, AxiosResponse<BackendService>>(`service/${problemSelected.id}`).then(({data}) => {
              setCourseWrapper(data)
            })
          }

        }
      } catch (e) {
        console.log(e)
      }
    })()
  }, [problemSelected])

  const handleClickSubmitForm = () => {
    console.log({
      id,
      problem: problemSelected,
      message: (textareaRef.current as unknown as HTMLTextAreaElement).value,
    });
  };

  const renderCheckIcon = () => {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const onSubmit = (e:FormEvent) => {
    (async () => {
      e.preventDefault()
      const object = {
        name, age, email, phone, problem: problem || undefined, parent: parent || undefined, type: problemSelected.id,
        course: selectedCourse ? selectedCourse._id : undefined
      }
      console.log(object, selectedCourse)
      await axios.post<CustomerInput, any>('customer', object).then(() => {
        showToast()
      })
      onCloseModalReportItem()
    })()
  }

  const renderContent = () => {
    return (
      <form onSubmit={onSubmit}>
        <div className="flex flex-direction-row gap-6 justify-center">
        <ButtonQuizz>ფსიქოლოგთან ვიზიტი</ButtonQuizz>
        <ButtonQuizz>ფსიქიატრთან კონსულტაცია</ButtonQuizz>
        </div>
        {/* {!initialSelectedCourse ? <RadioGroup value={problemSelected} onChange={setProblemSelected}>
          <RadioGroup.Label className="sr-only">Problem Plans</RadioGroup.Label>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {problemPlans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ checked }) => {
                  return (
                    `${
                      checked
                        ? "bg-primary-6000 text-white dark:bg-primary-700"
                        : "bg-white border-t border-neutral-50 "
                    } relative shadow-lg rounded-lg px-3 py-3 cursor-pointer flex sm:px-3 sm:py-3 focus:outline-none ` +
                    twFocusClass(true)
                  );
                }}
              >
                {({ checked }) => (
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <RadioGroup.Label
                          as="p"
                          className={`font-medium line-clamp-1 ${
                            checked ? "text-white" : "text-neutral-900"
                          }`}
                        >
                          {plan.label}
                        </RadioGroup.Label>
                      </div>
                    </div>
                    {checked && (
                      <div className="flex-shrink-0 text-white">
                        {renderCheckIcon()}
                      </div>
                    )}
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup> : <></>} */}

          {/* <div className="mt-8">
            
          {
              problemSelected.select ? <label className='block mb-4'>
                <Label>{problemSelected.select.label}</Label>
                <DropDown className={`cursor-pointer form-select block w-full mt-1 border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 rounded-full h-11 px-4 py-3 text-sm font-normal border`} placeholder={problemSelected.select.default} data={courseWrapper!} 
                  selectedCourse={selectedCourse}
                  setSelectedCourse={setSelectedCourse}
                  onShowMore={(cb) => {cb(); onCloseModalReportItem()}}
                  disabled={!!initialSelectedCourse}
                />
              </label> : (<></>)
            }
            
            {problemSelected.id === "kids" ? <label className="block">
              <Label>მშობლის სახელი და გვარი</Label>

              <Input
                placeholder="შეიყვანეთ სახელი და გვარი"
                type="text"
                className="mt-1 mb-4"
                required={true}
                ref={inputRef}
                value={parent}
                onChange={({target: { value }}) => setParent(value)}
              />
            </label> : <></>}

            <label className="block">
              <Label>{problemSelected.id === 'kids' ? 'ბავშვის ' : ''}სახელი და გვარი</Label>

              <Input
                placeholder="შეიყვანეთ სახელი და გვარი"
                type="text"
                className="mt-1 mb-4"
                required={true}
                ref={inputRef}
                value={name}
                onChange={({target: { value }}) => setName(value)}
              />
            </label>

            <label className="block">
              <Label>ასაკი</Label>

              <Input
                type="number"
                placeholder="შეიყვანეთ ასაკი"
                className="mt-1 mb-4"
                required={true}
                min={3}
                max={100}
                value={age}
                onChange={({target: {value}}) => {
                  setAge(value)
                  
                }}
              />
            </label>

            <label className="block">
              <Label>ელ.ფოსტა</Label>

              <Input
                type="email"
                placeholder="example@animus.ge"
                className="mt-1 mb-4"
                required={true}
                value={email}
                onChange={({target: { value }}) => setEmail(value)}
              />
            </label>

            <label className="block">
              <Label>ტელეფონი</Label>

              <Input
                type="tel"
                placeholder="5xx xxx xxx"
                className="mt-1"
                required={true}
                value={phone}
                onChange={({target: { value }}) => { if (value.length < 10) setPhone(value)}}
              />
            </label> 
            
            </div> */}

        {/* <div className="my-5">
          <h4 className="text-lg font-semibold text-neutral-700 dark:text-neutral-200">
            დამატებითი კომენტარი
          </h4>
          <span className="text-sm text-neutral-6000 dark:text-neutral-400">
            გთხოვთ მოგვწეროთ თქვენი ფსიქოლოგიური გამოწვევების შესახებ
          </span>
          <Textarea
            placeholder="..."
            className="mt-4"
            ref={textareaRef}
            rows={4}
            id="report-message"
            value={problem}
                onChange={({target: { value }}) => setProblem(value)}
          />
        </div>
        <div className="mt-4 space-x-3">
          <ButtonPrimary onClick={handleClickSubmitForm} type="submit">
            დაჯავშნა
          </ButtonPrimary>
          <ButtonSecondary type="button" onClick={onCloseModalReportItem}>
            გაუქმება
          </ButtonSecondary>
        </div> */}
      </form>
    );
  };

  const renderTrigger = () => {
    return null;
  };

  return (
    <NcModal
      isOpenProp={show}
      onCloseModal={onCloseModalReportItem}
      contentExtraClass="max-w-screen-lg"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle="შეხვედრის დაჯავშნა"
    />
  );
};

export default ModalCourse;
