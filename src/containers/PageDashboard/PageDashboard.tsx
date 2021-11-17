import LayoutPage from "components/LayoutPage/LayoutPage";
import React, { ComponentType, FC, useEffect, useState } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import DashboardBillingAddress from "./DashboardBillingAddress";
import DashboardEditProfile from "./DashboardEditProfile";
import DashboardPosts from "./DashboardPosts";
import DashboardRoot from "./DashboardRoot";
import DashboardSubcription from "./DashboardSubcription";
import DashboardSubmitPost from "./DashboardSubmitPost";
import { Helmet } from "react-helmet";
import AppointmentModal from "./AppointmentModal"
import { BackendCustomer } from "types";
import axios from "utils/axios";
import { AxiosResponse } from "axios";

export interface PageDashboardProps {
  className?: string;
}

interface DashboardLocationState {
  "/profile"?: {};
  "/appointments"?: {};
  "/edit-profile"?: {};
  "/subscription"?: {};
  "/billing-address"?: {};
  "/submit-post"?: {};
  "/account"?: {};
}

interface DashboardPage {
  sPath: keyof DashboardLocationState;
  exact?: boolean;
  component: ComponentType<Object>;
  emoij: string;
  pageName: string;
}

const subPages: DashboardPage[] = [
  {
    sPath: "/profile",
    component: DashboardSubcription,
    emoij: "📃",
    pageName: "პროფილი",
  },
  // {
  //   sPath: "/root",
  //   exact: true,
  //   component: DashboardRoot,
  //   emoij: "🕹",
  //   pageName: "პროფილი",
  // },
  {
    sPath: "/appointments",
    component: DashboardPosts,
    emoij: "📃",
    pageName: "შეხვედრები",
  },
  {
    sPath: "/edit-profile",
    component: DashboardEditProfile,
    emoij: "🛠",
    pageName: "პარამეტრები",
  },
  // {
  //   sPath: "/billing-address",
  //   component: DashboardBillingAddress,
  //   emoij: "✈",
  //   pageName: "Billing address",
  // },
  // {
  //   sPath: "/submit-post",
  //   component: DashboardSubmitPost,
  //   emoij: "✍",
  //   pageName: "Submit post",
  // },
];

const PageDashboard: FC<PageDashboardProps> = ({ className = "" }) => {
  let { path, url } = useRouteMatch();

  return (
    <div className={`nc-PageDashboard ${className}`} data-nc-id="PageDashboard">
      <Helmet>
        <title>Dashboard || Blog Magazine React Template</title>
      </Helmet>
      <LayoutPage
        subHeading="იხილეთ თქვენი შეხვედრების ისტორია, მიმდინარე ჯავშანი, შეცვალეთ პარამეტრები ან წაშალეთ ანგარიში"
        headingEmoji="⚙"
        heading="პროფილი"
      >
        <div className="flex flex-col space-y-8 xl:space-y-8 xl:flex-col">
          {/* SIDEBAR */}

          <div className="flex flex-row flex-shrink-0">
            <ul className="grid grid-cols-2 gap-6 text-base text-neutral-6000 dark:text-neutral-400 xl:grid-cols-3 md:grid-cols-3 ">
              {subPages.map(({ sPath, pageName, emoij }, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      className="flex px-6 py-2.5 font-medium rounded-lg hover:text-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                      to={`${url}${sPath}`}
                      activeClassName="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                    >
                      <span className="w-8 mr-1">{emoij}</span>
                      {pageName}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="border border-neutral-100 dark:border-neutral-800 md:hidden"></div>
          <div className="flex-grow">
            <Switch>
              {subPages.map(({ component, sPath, exact }, index) => {
                return (
                  <Route
                    key={index}
                    exact={exact}
                    
                    component={component}
                    path={!!sPath ? `${path}${sPath}` : path}
                    
                  />
                );
              })}
              <Redirect to={path + "/profile"} />
            </Switch>
          </div>
        </div>
      </LayoutPage>
    </div>
  );
};

export default PageDashboard;
