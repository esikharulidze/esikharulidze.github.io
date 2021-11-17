import React, { useMemo } from "react";
import NcImage from "components/NcImage/NcImage";
import Pagination from "components/Pagination/Pagination";
import NcModal from "components/NcModal/NcModal";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import { BackendAppointment } from "types";
import { format } from "date-fns";
import { ka } from "date-fns/locale";


interface Props {
    onClose?: () => void
    data: BackendAppointment
}

const AppointmentModal = ({data, onClose} : Props) => {
   const title = useMemo(() => {
     switch (data.type) {
       case 'psychologist':
         return data.survey.partnerAge ? '' : data.survey.parentName ? '': ''
        case 'psychiatrist':
          case 'grouptherapy': 
          case 'educational':
       default: return 'ვიზიტი ფსიქოლოგთან'
     }
   }, [data.type])
    const renderContent = () => {
    return (
        <div>
      <form action="#">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
          ვიზიტის დეტალები
        </h3>
        {/* <div className="px-4 py-5 sm:px-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl"> */}
        <div className="">
            <p className="mb-4 text-sm leading-5 text-neutral-700">თარიღის შეცვლა ან ვიზიტის გაუქმება შესაძლებელია ვიზიტამდე 1 დღით ადრე, წინააღმდეგ შემთხვევაში თანხა არ დაგიბრუნდებათ ან დაგეკისრებათ ჯარიმა.</p>
            </div>
        {/* </div> */}
        {/* <table className="table-auto">
            <thead>
                <tr>
                <th>მისამართი</th>
                <th>თარიღი</th>
                <th>სტატუსი</th>
                <th>თერაპევტი</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>მცხეთის ქუჩა 48/50</td>
                <td>მიმდინარე</td>
                <td>25 ოქტ, 18:30</td>
                <td>ელენე სიხარულიძე</td>
                </tr>
            </tbody>
        </table> */}
        {/* <p className="text-sm mt-4 mb-2">
            მისამართი: მცხეთის ქუჩა 48/50
        </p>
        <hr />
        <p className="text-sm my-2">
        სტატუსი: მიმდინარე
        </p>
        <hr />
        <p className="text-sm my-2">
        თარიღი: 25 ოქტ, 18:30
        </p>
        <hr />
        <p className="text-sm mt-2 mb-6">
        თერაპევტი: ელენე სიხარულიძე
        </p> */}
        <div className="border-neutral-200 dark:border-neutral-900">
        <dl>
              <div
                className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl"
              >
                <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
                  ვიზიტის ტიპი
                </dt>
                <dd className="mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2">
                  {data.type}
                </dd>
              </div>
              <div
                className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-300 rounded-xl">
                  ვიზიტის კოდი
                </dt>
                <dd className="mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2">
                  {data.code}
                </dd>
              </div>
              <div
                className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl"
              >
                <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
                  ვიზიტის თარიღი
                </dt>
                <dd className="mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2">
                {format(new Date(data.date), 'dd MMM. ', {locale: ka})}{data.time}
                </dd>
              </div>
              <div
                className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-xl"
              >
                <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
                  ვიზიტის სტატუსი
                </dt>
                <dd className="mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2">
                  {data.status === 'closed' ? 'დასრულებული' : data.status === 'refunded' ? 'გაუქმებული' : data.status === 'rejected' ? 'გაცდენილი': 'მიმდინარე'}
                </dd>
              </div>
              <div
                className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl"
              >
                <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
                  ვიზიტორი
                </dt>
                <dd className="mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2">
                 {data.survey.fullName}
                </dd>
              </div>
              <div
                className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-xl"
              >
                <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
                  ვიზიტორის ასაკი
                </dt>
                <dd className="mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2">
                  {data.survey.age}
                </dd>
              </div>
              <div
                className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl"
              >
                <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
                  თერაპევტი
                </dt>
                <dd className="mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2">
                  {`${data.therapist.firstName} ${data.therapist.lastName}`}
                </dd>
              </div>
              <div
                className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-xl"
              >
                <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
                  ცენტრის მისამართი
                </dt>
                <dd className="mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2">
                  მცხეთის ქუჩა 48/50
                </dd>
              </div>
              <div
                className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl"
              >
                <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
                  გადახდის მეთოდი
                </dt>
                <dd className="mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2">
                  {data.paymentMethod === 'card' ? 'ბარათით გადახდა': 'ნაღდი ანგარიშსწორებით'}
                </dd>
              </div>
              <div
                className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-xl"
              >
                <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
                  ვიზიტის ღირებულება
                </dt>
                <dd className="mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2">
                  {data.price}	₾
                </dd>
              </div>
        </dl>
      </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <ButtonPrimary type="submit">
          თარიღის შეცვლა
          </ButtonPrimary>
          <ButtonSecondary type="submit">
            ვიზიტის გაუქმება
          </ButtonSecondary>
        </div>
      </form>
      
      </div>
    );
    
  };
  const renderTrigger = () => {
    return null;
  };
  return (
    <NcModal
      isOpenProp={true}
      onCloseModal={onClose}
      contentExtraClass="max-w-screen-md"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle=""
    />
  );
};

export default AppointmentModal;
