import React, { FC, useState } from "react";
import Logo from "components/Logo/Logo";
import Navigation from "components/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import ButtonPrimary from "components/Button/ButtonPrimary";
import MenuBar from "components/MenuBar/MenuBar";
import DarkModeContainer from "containers/DarkModeContainer/DarkModeContainer";
import NcModal from "components/NcModal/NcModal";
import ModalCourse from "components/ModalCourse/ModalCourse";
import ButtonSecondary from "components/Button/ButtonSecondary";
import NcImage from "components/NcImage/NcImage";
import CardAuthor from "components/CardAuthor/CardAuthor";
import CardUser from "components/CardUser/CardUser";

export interface MainNav1Props {
  isTop: boolean;
}

const MainNav1: FC<MainNav1Props> = ({ isTop }) => {
const [isReporting, setIsReporting] = useState(false);
const openModalReportComment = () => setIsReporting(true);
const closeModalReportComment = () => setIsReporting(false);  
  return (
    <div
      className={`nc-MainNav1 relative z-10 ${
        isTop ? "onTop " : "notOnTop backdrop-filter"
      }`}
    >
      <div className="container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8">
        <div className="flex justify-start flex-grow items-center space-x-4 sm:space-x-10 2xl:space-x-14">
          <Logo />
          <Navigation />
        </div>
        <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
          <div className="hidden items-center xl:flex space-x-1">
            <DarkModeContainer />
            {/* <SearchDropdown /> */}
            <div className="px-1" />
            
            <ButtonPrimary onClick={openModalReportComment} href="">ვიზიტის დაჯავშნა</ButtonPrimary>
            {/* <div className="px-1" /> */}

            {/* <ButtonSecondary href="/signup">ავტორიზაცია</ButtonSecondary> */}
            <div className="px-1" />
            <CardUser className="flex items-center rounded-xl p-2 xl:p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700"></CardUser>
            <ModalCourse
            show={isReporting}
            id={1}
            onCloseModalReportItem={closeModalReportComment}
            />
          </div>
          <div className="flex items-center xl:hidden">
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav1;
