import { AxiosResponse } from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { BackendCustomer } from "types";
import axios from "utils/axios";

const data = [
  { name: "სახელი", content: " ლაშა მირზელაშვილი" },
  { name: "ასაკი", content: " 18" },
  { name: "ელ.ფოსტა", content: " lasha@mirzelashvili.com" },
  { name: "ტელეფონი", content: " +995 555816622" },
];

const DashboardSubcription = () => {
  const [customer, setCustomer] = useState<BackendCustomer>()

  useEffect(() => {
    (async () => {
      try {
        const {data} = await axios.get<any, AxiosResponse<BackendCustomer>>('customer/profile')
        setCustomer(data)
      } catch(e) {
        console.log(e)
      }
    })()
  }, [])

  const customerData = useMemo(() => ([{ name: "სახელი", content: `${customer?.firstName} ${customer?.lastName}` },
  { name: "ასაკი", content: customer?.age.toString() },
  { name: "ელ.ფოსტა", content: customer?.email },
  { name: "ტელეფონი", content: customer?.phone },]), [customer])
  return (
    <div className="bg-white dark:bg-neutral-900 dark:border dark:border-neutral-800 shadow overflow-hidden sm:rounded-lg">
      {/* <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-neutral-900 dark:text-neutral-200">
          Package Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-neutral-500 dark:text-neutral-400">
          You've subscribed to the following package
        </p>
      </div> */}
      <div className="border-neutral-200 dark:border-neutral-900">
        <dl>
          {customerData.map((item, index) => {
            return (
              <div
                key={index}
                className={`${
                  index % 2 === 0
                    ? "bg-neutral-50 dark:bg-neutral-800"
                    : "bg-white dark:bg-neutral-900"
                } px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
              >
                <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
                  {item.name}
                </dt>
                <dd className="mt-1 text-sm text-neutral-900 dark:text-neutral-200 font-medium sm:mt-0 sm:col-span-2">
                  {item.content}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
};

export default DashboardSubcription;
