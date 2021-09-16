import React, { FC, useEffect, useRef, useState } from "react";
import NcModal from "components/NcModal/NcModal";
import Textarea from "components/Textarea/Textarea";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import { RadioGroup } from "@headlessui/react";
import twFocusClass from "utils/twFocusClass";
import Label from "components/Label/Label";
import Input from "components/Input/Input";

export interface ProblemPlan {
  name: string;
  id: string;
  label: string;
}

export interface ModalReportItemProps {
  id: number | string;
  show: boolean;
  problemPlans?: ProblemPlan[];
  onCloseModalReportItem: () => void;
}

const problemPlansDemo = [
  {
    name: "ინდივიდუალური‎‏‏‎‎‎",
    id: "individual",
    label: "ინდივიდუალური‏‏‎ ‎",
  },
  { name: "მოზარდები‏‏‎სთვის‏‎‏‏", id: "teens", label: "მოზარდებისთვის‏‏‎ ‎" },
  { name: "მშობლებისთვის‏‏‎", id: "parents", label: "მშობლებისთვის‏‏‎ ‎" },
  { name: "ჯგუფური კურსი", id: "group", label: "ჯგუფური კურსი" },
];

const ModalCourse: FC<ModalReportItemProps> = ({
  problemPlans = problemPlansDemo,
  id,
  show,
  onCloseModalReportItem,
}) => {
  const textareaRef = useRef(null);

  const [problemSelected, setProblemSelected] = useState(problemPlans[0]);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        const element: HTMLTextAreaElement | null = textareaRef.current;
        if (element) {
          (element as HTMLTextAreaElement).focus();
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
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
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
                    } relative shadow-lg rounded-lg px-3 py-3 cursor-pointer flex sm:px-5 sm:py-4 focus:outline-none ` +
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
              />
            </label>

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
      contentExtraClass="max-w-screen-md"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle="შეხვედრის დაჯავშნა"
    />
  );
};

export default ModalCourse;