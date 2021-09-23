import React, { FC, useEffect, useRef, useState } from "react";
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
  }[]
}

export interface ModalReportItemProps {
  id: number | string;
  show: boolean;
  problemPlans?: ProblemPlan[];
  onCloseModalReportItem: () => void;
  selectedPlanIndex?: number  
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
  { name: "ზრდასრულებისთვის", id: "adults", label: "ზრდასრულებისთვის" },
  { name: "მოზარდები‏‏‎სთვის‏‎‏‏", id: "teens", label: "მოზარდებისთვის‏‏‎‎", select:{
    label: "კურსი",
    default: "აირჩიეთ კურსი",
    data: [
      {
        id: 1,
        label: "კურსი 1",
        value: "kursi_1"
      },
      {
        id: 2,
        label: "კურსი 2",
        value: "kursi_2"
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
        value: "kursi_1"
      },
      {
        id: 2,
        label: "კურსი 2",
        value: "kursi_2"
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
  selectedPlanIndex = 0
}) => {
  const textareaRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null)

  const [problemSelected, setProblemSelected] = useState(problemPlans[selectedPlanIndex]);

  useEffect(() => {
    if (selectedPlanIndex !== null) {
      setProblemSelected(problemPlans[selectedPlanIndex])
    }
  }, [selectedPlanIndex])

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

  const renderContent = () => {
    return (
      <form action="#">
        {/* RADIO PROBLEM PLANS */}
        <RadioGroup value={problemSelected} onChange={setProblemSelected}>
          <RadioGroup.Label className="sr-only">Problem Plans</RadioGroup.Label>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
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
        </RadioGroup>

        {/* FIELDS */}

        <form className="grid grid-cols-1 gap-6" action="#" method="post">
          <div className="mt-8">
            <label className="block">
              <Label>სახელი და გვარი</Label>

              <Input
                placeholder="შეიყვანეთ სახელი და გვარი"
                type="text"
                className="mt-1 mb-4"
                required={true}
                ref={inputRef}
              />
            </label>

            {problemSelected.id === "couple" ? <label className="block">
              <Label>სახელი და გვარი</Label>

              <Input
                placeholder="შეიყვანეთ სახელი და გვარი"
                type="text"
                className="mt-1 mb-4"
                required={true}
                ref={inputRef}
              />
            </label> : <></>}

            <label className="block">
              <Label>ელ.ფოსტა</Label>

              <Input
                type="email"
                placeholder="example@animus.ge"
                className="mt-1 mb-4"
                required={true}
              />
            </label>

            <label className="block">
              <Label>ტელეფონი</Label>

              <Input
                type="tel"
                placeholder="5xx xxx xxx"
                className="mt-1"
                required={true}
              />
            </label> 

            {
              problemSelected.select ? <label className='block mt-4'>
                <Label>{problemSelected.select.label}</Label>
                <DropDown className='cursor-pointer form-select block w-full mt-1  border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-full h-11 px-4 py-3 text-sm font-normal border' placeholder={problemSelected.select.default} data={problemSelected.select.data} />
              </label> : (<></>)
            }
            </div>
        </form>

        

        {/* TEXAREA MESSAGER */}
        <div className="my-5">
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
            required={true}
            rows={4}
            id="report-message"
          />
        </div>
        <div className="mt-4 space-x-3">
          <ButtonPrimary onClick={handleClickSubmitForm} type="submit">
            დაჯავშნა
          </ButtonPrimary>
          <ButtonSecondary type="button" onClick={onCloseModalReportItem}>
            გაუქმება
          </ButtonSecondary>
        </div>
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
