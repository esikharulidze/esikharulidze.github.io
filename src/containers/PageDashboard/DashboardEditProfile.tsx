import { AxiosResponse } from "axios";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Input from "components/Input/Input";
import Label from "components/Label/Label";
import React, { useEffect, useState } from "react";
import { BackendCustomer } from "types";
import axios from "utils/axios";

const DashboardEditProfile = () => {
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
  return (
    <div className="rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6">
      <form className="grid md:grid-cols-2 gap-6" action="#" method="post">
        <label className="block">
          <Label>როგორ მოგმართოთ?</Label>
          <Input placeholder={`${customer?.firstName} ${customer?.lastName}`} type="text" className="mt-1" />
        </label>
        <label className="block">
          <Label>ელ.ფოსტა</Label>
          <Input placeholder={customer?.email} type="email" className="mt-1" />
        </label>
        <label className="block">
          <Label>ტელეფონი</Label>
          <Input placeholder={customer?.phone} type="tel" className="mt-1" />
        </label>
        <label className="block">
          <Label>ახალი პაროლი</Label>
          <Input placeholder="••••••••" type="password" className="mt-1" />
        </label>
        <ButtonPrimary className="md:col-span-2" type="submit">
          ცვლილებების შენახვა
        </ButtonPrimary>
      </form>
    </div>
  );
};

export default DashboardEditProfile;
