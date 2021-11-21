import { AxiosResponse } from "axios";
import ButtonSecondary from "components/Button/ButtonSecondary";
import LayoutPage from "components/LayoutPage/LayoutPage";
import ModalCourse from "components/ModalCourse/ModalCourse";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackendCourse } from "types";
import axios from 'utils/axios'
import {useHistory} from "react-router-dom";
import {DropDown} from "./components";
import Label from "components/Label/Label";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Heading2 from "components/Heading/Heading2";
import ButtonQuizz from "components/Button/ButtonQuizz";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Input from "components/Input/Input";
import NcImage from "components/NcImage/NcImage";

export interface ServiceInnerProps {

}

const QuizzItemTest: FC<ServiceInnerProps> = () => {
  const [selectedTherapist, setSelectedTherapist] = useState<number>()
  const [therapist, setTherapist] = useState<number>()
  return (


    <div className="min-h-screen bg-primary-100 dark:bg-neutral-800 bg-opacity-25">
      <div className="grid justify-content-center grid-cols-1 xl:grid-cols-4 md:grid-cols-1 lg:grid-cols-1">
        <div className="grid col-start-2 col-span-4 col-end-4 row-start-2 row-end-4">
        <header className="text-center mt-24 mb-10">
          <h1 className="text-4xl font-semibold"></h1>  
          <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200 mb-10">
            test
          </span>
        </header>
        <div className=" bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 ">
          <h2 className="font-semibold text-2xl mb-4">გსურთ შეავსოთ კითხვარი თავიდან?</h2>
          <div className="grid grid-cols-2 gap-4">
        </div>
          <div className="grid grid-cols-1">
          <ButtonPrimary className="w-full" textArrangement="text-left">დიახ, კითხვარს შევავსებ თავიდან</ButtonPrimary>
          <ButtonSecondary className="w-full mt-4" textArrangement="text-left">არა, გამოვიყენებ აქამდე შევსებულ კითხვარს</ButtonSecondary>
          </div>
          <div className="mt-5">
          <div className="flex flex-row gap-4 block bg-yellow-600	 mb-2 w-full rounded-md p-5">
          <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#BA7F02"/>
            <path d="M24 32V24" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24 16H24.0204" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
          <p className="text-white">კითხვარი გამოიყენება პროფესიონალი ფსიქოლოგის მიერ,
          რათა მას წინასწარი ზოგადი ინფორმაცია ჰქონდეს თქვენ შესახებ, რაც დაეხმარება თერაპიის უკეთესად წარმართვაში.</p>
          </div>
          </div>
        </div>
        </div>
        </div>
    </div>

    
    // ========== რომელი დაგახდის მეთოდი გსურთ? =========
    // <div className="min-h-screen bg-primary-100 dark:bg-neutral-800 bg-opacity-25">
    //   <div className="grid justify-content-center grid-cols-1 xl:grid-cols-4 md:grid-cols-1 lg:grid-cols-1">
    //     <div className="grid col-start-2 col-span-4 col-end-4 row-start-2 row-end-4">
    //     <header className="text-center mt-24 mb-10">
    //       <h1 className="text-4xl font-semibold"></h1>  
    //       <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200 mb-10">
    //         test
    //       </span>
    //     </header>
    //     <div className=" bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 ">
    //       <h2 className="font-semibold text-2xl mb-4">რომელი გადახდის მეთოდი გსურთ?</h2>
    //       <h3>ფსიქოლოგთან ვიზიტის საფასურია <span className="text-successgreen-500">70₾</span></h3>
    //       <div className="grid grid-cols-2 gap-4">
    //     </div>
    //       <ButtonPrimary className="w-full mt-4" textArrangement="text-left">ბარათით</ButtonPrimary>
    //       <ButtonPrimary className="w-full mt-4 bg-successgreen-500" textArrangement="text-left">ნაღდი ანგარიშსწორებით</ButtonPrimary>
    //       <div className="mt-5">
    //       <div className="flex flex-row gap-4 block bg-yellow-600	 mb-2 w-full rounded-md p-5">
    //       <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#BA7F02"/>
    //         <path d="M24 32V24" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    //         <path d="M24 16H24.0204" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    //         </svg>
    //         </div>
    //       <p className="text-white">კითხვარი გამოიყენება პროფესიონალი ფსიქოლოგის მიერ,
    //       რათა მას წინასწარი ზოგადი ინფორმაცია ჰქონდეს თქვენ შესახებ, რაც დაეხმარება თერაპიის უკეთესად წარმართვაში.</p>
    //       </div>
    //       </div>
    //     </div>

    //     </div>
    //     </div>
    // </div>



    // ========== თქვენი ანგარიში წარმატებით შეიქმნა ==========
    // <div className="min-h-screen bg-primary-100 dark:bg-neutral-800 bg-opacity-25">
    //   <div className="grid justify-content-center grid-cols-1 xl:grid-cols-4 md:grid-cols-1 lg:grid-cols-1">
    //     <div className="grid col-start-2 col-span-4 col-end-4 row-start-2 row-end-4">
    //     <div className=" bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 mt-24">
    //       <div className="grid grid-cols-4 mt-4 mb-8">
    //         <div  className="col-start-2 col-span-2">
    //       <NcImage src="https://i.ibb.co/7W4LJDQ/psychologist-Animus-Bust-2.png"></NcImage>
    //       </div>
    //       </div>
    //       <h2 className="font-semibold text-2xl mb-4">თქვენი ანგარიში <span className="text-successgreen-500">წარმატებით შეიქმნა</span></h2>
    //       <h3>ფსიქოლოგთან ვიზიტის საფასურია <span className="text-successgreen-500">70₾</span></h3>
    //       <div className="grid grid-cols-2 gap-4">
    //     </div>
        
    //       <ButtonPrimary className="w-full mt-4" textArrangement="text-left">შემდეგი ნაბიჯი</ButtonPrimary>
    //     </div>

    //     </div>
    //     </div>
    // </div>

    // ========== დააყენეთ პაროლი ==========
    // <div className="min-h-screen bg-primary-100 dark:bg-neutral-800 bg-opacity-25">
    //   <div className="grid justify-content-center grid-cols-1 xl:grid-cols-4 md:grid-cols-1 lg:grid-cols-1">
    //     <div className="grid col-start-2 col-span-4 col-end-4 row-start-2 row-end-4">
    //     <header className="text-center mt-24 mb-10">
    //       <h1 className="text-4xl font-semibold"></h1>  
    //       <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200 mb-10">
    //         test
    //       </span>
    //     </header>
    //     <div className=" bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 ">
    //       <h2 className="font-semibold text-2xl mb-4">დააყენეთ პაროლი</h2>
    //       <div className="grid grid-cols-2 gap-4">
    //     </div>
    //     <form className="grid grid-cols-1 gap-6" action="#" method="post">
    //       <label className="block">
    //           <span className="text-neutral-800 dark:text-neutral-200">
    //             შეიყვანეთ პაროლი
    //           </span>
    //           <Input
    //             type="password"
    //             placeholder="*********"
    //             className="mt-1"
    //           />
    //         </label>
    //         <label className="block">
    //           <span className="text-neutral-800 dark:text-neutral-200">
    //             გაიმეორეთ პაროლი
    //           </span>
    //           <Input
    //             type="password"
    //             placeholder="*********"
    //             className="mt-1"
    //           />
    //         </label>
            
    //       </form>
    //       <ButtonPrimary className="w-full mt-4" textArrangement="text-left">შემდეგი ნაბიჯი</ButtonPrimary>
    //       <div className="mt-5">
    //       <div className="flex flex-row gap-4 block bg-yellow-600	 mb-2 w-full rounded-md p-5">
    //       <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#BA7F02"/>
    //         <path d="M24 32V24" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    //         <path d="M24 16H24.0204" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    //         </svg>
    //         </div>
    //       <p className="text-white">კითხვარი გამოიყენება პროფესიონალი ფსიქოლოგის მიერ,
    //       რათა მას წინასწარი ზოგადი ინფორმაცია ჰქონდეს თქვენ შესახებ, რაც დაეხმარება თერაპიის უკეთესად წარმართვაში.</p>
    //       </div>
    //       </div>
    //     </div>

    //     </div>
    //     </div>
    // </div>


    // ========== როგორ დაგეკონტაქტოთ? ==========
    // <div className="min-h-screen bg-primary-100 dark:bg-neutral-800 bg-opacity-25">
    //   <div className="grid justify-content-center grid-cols-1 xl:grid-cols-4 md:grid-cols-1 lg:grid-cols-1">
    //     <div className="grid col-start-2 col-span-4 col-end-4 row-start-2 row-end-4">
    //     <header className="text-center mt-24 mb-10">
    //       <h1 className="text-4xl font-semibold"></h1>  
    //       <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200 mb-10">
    //         test
    //       </span>
    //     </header>
    //     <div className=" bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 ">
    //       <h2 className="font-semibold text-2xl mb-4">როგორ დაგეკონტაქტოთ?</h2>
    //       <div className="grid grid-cols-2 gap-4">
    //     </div>
    //     <form className="grid grid-cols-1 gap-6" action="#" method="post">
    //       <label className="block">
    //           <span className="text-neutral-800 dark:text-neutral-200">
    //             თქვენი ელ.ფოსტა
    //           </span>
    //           <Input
    //             type="text"
    //             placeholder="example@animus.ge"
    //             className="mt-1"
    //           />
    //         </label>
    //         <label className="block">
    //           <span className="text-neutral-800 dark:text-neutral-200">
    //             თქვენი ტელეფონი
    //           </span>
    //           <Input
    //             type="text"
    //             placeholder="+995 5__ ___ ___"
    //             className="mt-1"
    //           />
    //         </label>
            
    //       </form>
    //       <ButtonPrimary className="w-full mt-4" textArrangement="text-left">შემდეგი ნაბიჯი</ButtonPrimary>
    //       <div className="mt-5">
    //       <div className="flex flex-row gap-4 block bg-yellow-600	 mb-2 w-full rounded-md p-5">
    //       <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#BA7F02"/>
    //         <path d="M24 32V24" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    //         <path d="M24 16H24.0204" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    //         </svg>
    //         </div>
    //       <p className="text-white">კითხვარი გამოიყენება პროფესიონალი ფსიქოლოგის მიერ,
    //       რათა მას წინასწარი ზოგადი ინფორმაცია ჰქონდეს თქვენ შესახებ, რაც დაეხმარება თერაპიის უკეთესად წარმართვაში.</p>
    //       </div>
    //       </div>
    //     </div>

    //     </div>
    //     </div>
    // </div>

    // ========= ანგარიშის დეტალები =========
    // <div className="min-h-screen bg-primary-100 dark:bg-neutral-800 bg-opacity-25">
    //   <div className="grid justify-content-center grid-cols-1 xl:grid-cols-4 md:grid-cols-1 lg:grid-cols-1">
    //     <div className="grid col-start-2 col-span-4 col-end-4 row-start-2 row-end-4">
    //     <header className="text-center mt-24 mb-10">
    //       <h1 className="text-4xl font-semibold"></h1>  
    //       <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200 mb-10">
    //         test
    //       </span>
    //     </header>
    //     <div className=" bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 ">
    //       <h2 className="font-semibold text-2xl mb-4">ანგარიშის დეტალები</h2>
    //       <div className="grid grid-cols-2 gap-4">
    //     </div>
    //     <form className="grid grid-cols-1 gap-6" action="#" method="post">
    //       <label className="block">
    //           <span className="text-neutral-800 dark:text-neutral-200">
    //             ანგარიშის მფლობელის სახელი
    //           </span>
    //           <Input
    //             type="text"
    //             placeholder="ჩაწერეთ სახელი"
    //             className="mt-1"
    //           />
    //         </label>
    //         <label className="block">
    //           <span className="text-neutral-800 dark:text-neutral-200">
    //             ანგარიშის მფლობელის გვარი
    //           </span>
    //           <Input
    //             type="text"
    //             placeholder="ჩაწერეთ გვარი"
    //             className="mt-1"
    //           />
    //         </label>
    //       </form>
    //       <ButtonPrimary className="w-full mt-4" textArrangement="text-left">შემდეგი ნაბიჯი</ButtonPrimary>
    //       <div className="mt-5">
    //       <div className="flex flex-row gap-4 block bg-yellow-600	 mb-2 w-full rounded-md p-5">
    //       <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#BA7F02"/>
    //         <path d="M24 32V24" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    //         <path d="M24 16H24.0204" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    //         </svg>
    //         </div>
    //       <p className="text-white">კითხვარი გამოიყენება პროფესიონალი ფსიქოლოგის მიერ,
    //       რათა მას წინასწარი ზოგადი ინფორმაცია ჰქონდეს თქვენ შესახებ, რაც დაეხმარება თერაპიის უკეთესად წარმართვაში.</p>
    //       </div>
    //       </div>
    //     </div>

    //     </div>
    //     </div>
    // </div>

    // ========= გსურთ ანგარიშის შექმნა? ==========
    // <div className="min-h-screen bg-primary-100 dark:bg-neutral-800 bg-opacity-25">
    //   <div className="grid justify-content-center grid-cols-1 xl:grid-cols-4 md:grid-cols-1 lg:grid-cols-1">
    //     <div className="grid col-start-2 col-span-4 col-end-4 row-start-2 row-end-4">
    //     <header className="text-center mt-24 mb-10">
    //       <h1 className="text-4xl font-semibold"></h1>  
    //       <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200 mb-10">
    //         test
    //       </span>
    //     </header>
    //     <div className=" bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 ">
    //       <h2 className="font-semibold text-2xl mb-4">გსურთ ანგარიშის შექმნა?</h2>
    //       <div className="grid grid-cols-2 gap-4">
    //     </div>
    //       <ButtonPrimary className="w-full mt-4">დიახ, მსურს ანგარიშის შექმნა(რეკომენდებულია)</ButtonPrimary>
    //       <ButtonPrimary className="w-full mt-4 bg-white">არა, ვიზიტს ჩავნიშნავ როგორც "სტუმარი"</ButtonPrimary>
    //       <div className="mt-5">
    //       <div className="flex flex-row gap-4 block bg-yellow-600	 mb-2 w-full rounded-md p-5">
    //       <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#BA7F02"/>
    //         <path d="M24 32V24" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    //         <path d="M24 16H24.0204" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    //         </svg>
    //         </div>
    //       <p className="text-white">კითხვარი გამოიყენება პროფესიონალი ფსიქოლოგის მიერ,
    //       რათა მას წინასწარი ზოგადი ინფორმაცია ჰქონდეს თქვენ შესახებ, რაც დაეხმარება თერაპიის უკეთესად წარმართვაში.</p>
    //       </div>
    //       </div>
    //     </div>

    //     </div>
    //     </div>
    // </div>


    // ========== აირჩიეთ ვიზიტის თარიღი ==========
    // <div className="min-h-screen bg-primary-100 dark:bg-neutral-800 bg-opacity-25">
    //   <div className="grid justify-content-center grid-cols-1 xl:grid-cols-4 md:grid-cols-1 lg:grid-cols-1">
    //     <div className="grid col-start-2 col-span-4 col-end-4 row-start-2 row-end-4">
    //     <header className="text-center mt-24 mb-10">
    //       <h1 className="text-4xl font-semibold"></h1>  
    //       <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200 mb-10">
    //         test
    //       </span>
    //     </header>
    //     <div className=" bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 ">
    //       <h2 className="font-semibold text-2xl mb-4">აირჩიეთ ვიზიტის თარიღი</h2>
    //       <div className="grid grid-cols-2 gap-4">
    //       <DropDown className={`cursor-pointer  form-select block  mt-1 border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 rounded-md h-11 px-4 py-3 text-sm font-normal border`} placeholder="25 ოქტ.-ოთხშაბათი" 
    //         selected={therapist}
    //         data={[1,2]}
    //         setSelected={setSelectedTherapist}
    //     />
    //     <DropDown className={`cursor-pointer  form-select block  mt-1 border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 rounded-md h-11 px-4 py-3 text-sm font-normal border`} placeholder="18:00" 
    //         selected={therapist}
    //         data={[1,2]}
    //         setSelected={setSelectedTherapist}
    //     />
    //     </div>
    //       <ButtonPrimary className="w-full mt-5 text-left" textArrangement="text-left">გაგრძელება</ButtonPrimary>
    //       <div className="mt-5">
    //       <div className="flex flex-row gap-4 block bg-yellow-600	 mb-2 w-full rounded-md p-5">
    //       <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#BA7F02"/>
    //         <path d="M24 32V24" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    //         <path d="M24 16H24.0204" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    //         </svg>
    //         </div>
    //       <p className="text-white">კითხვარი გამოიყენება პროფესიონალი ფსიქოლოგის მიერ,
    //       რათა მას წინასწარი ზოგადი ინფორმაცია ჰქონდეს თქვენ შესახებ, რაც დაეხმარება თერაპიის უკეთესად წარმართვაში.</p>
    //       </div>
    //       </div>
    //     </div>

    //     </div>
    //     </div>
    // </div>


    // ========== აირჩიეთ თერაპევტი ==========
    // <div className="min-h-screen bg-primary-100 dark:bg-neutral-800 bg-opacity-25">
    // <div className="grid justify-content-center grid-cols-1 xl:grid-cols-4 md:grid-cols-1 lg:grid-cols-1">
    //   <div className="grid col-start-2 col-span-4 col-end-4 row-start-2 row-end-4">
    //   <header className="text-center mt-24 mb-10">
    //     <h1 className="text-4xl font-semibold"></h1>  
    //     <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200 mb-10">
    //       test
    //     </span>
    //   </header>
    //   <div className=" bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 ">
    //     <h2 className="font-semibold text-2xl mb-4">აირჩიეთ თერაპევტი</h2>
        
    //     <DropDown className={`cursor-pointer  form-select block w-full mt-1 border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 rounded-md h-11 px-4 py-3 text-sm font-normal border`} placeholder="ელენე სიხარულიძე" 
    //     selected={therapist}
    //     data={[1,2]}
    //     setSelected={setSelectedTherapist}
    //     />
    //     <ButtonPrimary className="w-full mt-5" textArrangement="text-left">გაგრძელება</ButtonPrimary>
    //     <div className="mt-5">
    //     <div className="flex flex-row gap-4 block bg-yellow-600	 mb-2 w-full rounded-md p-5">
    //     <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    //       <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#BA7F02"/>
    //       <path d="M24 32V24" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    //       <path d="M24 16H24.0204" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    //       </svg>
    //       </div>
    //     <p className="text-white">კითხვარი გამოიყენება პროფესიონალი ფსიქოლოგის მიერ,
    //     რათა მას წინასწარი ზოგადი ინფორმაცია ჰქონდეს თქვენ შესახებ, რაც დაეხმარება თერაპიის უკეთესად წარმართვაში.</p>
    //     </div>
    //     </div>
    //   </div>

    //   </div>
    //   </div>
    // </div>



    // ========== დატოვეთ დამატებითი კომენტარი ===========
    // <div className="min-h-screen bg-primary-100 dark:bg-neutral-800 bg-opacity-25">
    //   <div className="grid justify-content-center grid-cols-1 xl:grid-cols-4 md:grid-cols-1 lg:grid-cols-1">
    //     <div className="grid col-start-2 col-span-4 col-end-4 row-start-2 row-end-4">
    //     <header className="text-center mt-24 mb-10"> 
    //       <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200 mb-10">
    //       ☂️ პირველი ახალი ნაბიჯი
    //       </span>
    //     </header>

    //     <div className=" bg-white rounded-lg px-10 p-10 dark:bg-neutral-900 ">
    //     <h2 className="font-semibold text-2xl mb-4">დატოვეთ დამატებითი კომენტარი</h2>
         
    //     <div className="text-md">
    //     თუ თვლით რომ სპეციალისტმა მეტი უნდა იცოდეს თქვენ შესახებ ან გაგაჩნიათ რაიმე სპეციფიკური სურვილი, გთოხვთ მიუთითოთ.
    //     </div>

    //     <label className="block text-left">
    //       <textarea
    //         className="form-textarea border-none mt-4 block w-full rounded-md py-4 px-5 mb-4" style={{backgroundColor: "#F8F8F8", borderStyle: "none", resize: "none"}}
    //         rows={8}
    //         placeholder="შეიყვანეთ ტექსტი"
            
    //       ></textarea>
    //     </label>
    //     <ButtonPrimary className="w-full bg-successgreen-500" textArrangement="text-left">გაგრძელება</ButtonPrimary>
    //     <div className="">
    //     <div className="flex flex-row mt-6 gap-4 block bg-yellow-600	 mb-2 w-full rounded-md p-5">
    //     <div><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    //       <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#BA7F02"/>
    //       <path d="M24 32V24" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    //       <path d="M24 16H24.0204" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    //       </svg>
    //       </div>
    //     <p className="text-white">კითხვარი გამოიყენება პროფესიონალი ფსიქოლოგის მიერ,
    //     რათა მას წინასწარი ზოგადი ინფორმაცია ჰქონდეს თქვენ შესახებ, რაც დაეხმარება თერაპიის უკეთესად წარმართვაში.</p>
    //     </div>
    //     </div>
    //     </div>
    //     </div>
    //     </div>
    //   </div>
    
  );
};

export default QuizzItemTest;
