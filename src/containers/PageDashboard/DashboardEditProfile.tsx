import ButtonPrimary from "components/Button/ButtonPrimary";
import Input from "components/Input/Input";
import Label from "components/Label/Label";
import React from "react";

const DashboardEditProfile = () => {
  return (
    <div className="rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6">
      <form className="grid md:grid-cols-2 gap-6" action="#" method="post">
        <label className="block">
          <Label>როგორ მოგმართოთ?</Label>
          <Input placeholder="ლაშა მირზელაშვილი" type="text" className="mt-1" />
        </label>
        <label className="block">
          <Label>ელ.ფოსტა</Label>
          <Input placeholder="example@animus.ge" type="email" className="mt-1" />
        </label>
        <label className="block">
          <Label>ტელეფონი</Label>
          <Input placeholder="555816622" type="tel" className="mt-1" />
        </label>
        <label className="block">
          <Label>ახალი პაროლი</Label>
          <Input placeholder="••••••••" type="password" className="mt-1" />
        </label>
        <ButtonPrimary className="md:col-span-2" type="submit">
          Update profile
        </ButtonPrimary>
      </form>
    </div>
  );
};

export default DashboardEditProfile;
