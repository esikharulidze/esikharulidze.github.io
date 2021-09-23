import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import LayoutPage from "components/LayoutPage/LayoutPage";
import NcImage from "components/NcImage/NcImage";
import React, { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ModalCourse from "components/ModalCourse/ModalCourse";


export interface ServiceInnerProps {
  className?: string;
}


const ServiceInner: FC<ServiceInnerProps> = ({ className = "" }) => {

const [isReporting, setIsReporting] = useState(false);
const openModalReportComment = () => setIsReporting(true);
const closeModalReportComment = () => setIsReporting(false);

  return (
    <div>
      <LayoutPage isInner={true} heading="">
        <div className="grid lg:grid-cols-4 gap-8 sm:grid-cols-1 md:gird-cols-2">
          <NcImage
            className="rounded-2xl"
            src="https://i.ibb.co/5W1kbzY/elene.jpg"
          ></NcImage>
          
          <div className="lg:col-span-3 sm:col-span-1 md:col-span-2">
            <h2 className="font-semibold text-3xl text-neutral-900 dark:text-neutral-100">
              ელენე სიხარულიძე
            </h2>
            <h2 className="block text-base text-neutral-500 sm:text-base dark:text-neutral-400 mb-2">
              დამფუძნებელი, ფსიქოლოგი
            </h2>
            <hr />
            <h2 className="text-center font-semibold text-neutral-900 sm:text-base dark:text-neutral-100 mt-5">
              განათლება
            </h2>
            <div className="block text-base xl:text-base text-neutral-6000 dark:text-neutral-400 mt-2 ">
              <div className="flex flex-col pst-disc space-y-3">
                <p>
                  <strong>2015-2019</strong> - ილიას სახელმწიფო უნივერსტეტი -
                  <strong> ფსიქოლოგის ბაკალავრი</strong>
                </p>
                <p>
                  <strong>2019-2021</strong> - სტრესის მართვისა და მენტალური
                  ჯანმრთელობის ცენტრი - <strong>არტთერაპია</strong>
                </p>

                <p>
                  <strong>2021 წელი</strong> - იელის უნივერსიტეტის ონლაინ კურსი
                  - <strong>პოზიტიური ფსიქოლოგია</strong>
                </p>

                <p>
                  <strong>2021 წელი</strong> - სერთიფიცირებული ტრენინგ კურსი -{" "}
                  <strong>კოგნიტურ ბიჰევიორალური თერაპია</strong>
                </p>
                <p>
                  <strong>2021 წელი</strong> - სერთიფიცირებული ტრენინგ კურსი -{" "}
                  <strong>ბავშვთა და მოზარდთა ფსიქოკონსულტირება</strong>
                </p>
              </div>
              <h2 className="text-center font-semibold text-neutral-900 sm:text-base dark:text-neutral-100 mt-10 mb-4">
                სამუშაო გამოცდილება
              </h2>
              <div className="flex flex-col space-y-3">
                <p>
                  <strong>2019-2020</strong> - სტაჟიორი -
                  <strong>
                    {" "}
                    სტრესის მართვისა და მენტალური ჯანმრთელობის ცენტრი
                  </strong>
                </p>
                <p>
                  <strong>2020-2021</strong> - ჯგუფური თერაპევტი -{" "}
                  <strong>
                    სტრესის მართვისა და მენტალური ჯანმრთელობის ცენტრი
                  </strong>
                </p>

                <p>
                  <strong>2020 წელი</strong> - საბავშვო პროგრამების არტთერაპევტი
                  - <strong>სოციალური სივრცე</strong>
                </p>

                <p>
                  <strong>2021 წელი</strong> - არტთერაპევტი -{" "}
                  <strong>ამონაშვილის აკადემია</strong>
                </p>
              </div>
              <h2 className="text-center font-semibold text-neutral-900 sm:text-base dark:text-neutral-100 mt-10 mb-4">
                კვლევები
              </h2>
              <p className="mb-8">
                <strong>“კოვიდ-19-ის გავლენა ფსიქიკურ ჯანმრთელობაზე”</strong> - პირველი
                საუნივერსიტეტო კლინიკა და სტრესის მართვისა და მენტალური
                ჯანმრთელობის ცენტრის ორგანიზებით.
              </p>

              <p>
                <strong>“ფსიქიკური ჯანმრთელობა და მათი
              კომორბიდულობა - დეპრესია, შფოთვა, ობსესიურ-კომპულსიური აშლილობა.”</strong> - პირველი
                საუნივერსიტეტო კლინიკა და სტრესის მართვისა და მენტალური
                ჯანმრთელობის ცენტრის ორგანიზებით.
              </p>
            </div>
          </div>
        </div>

      </LayoutPage>
    </div>
  );
};

export default ServiceInner;
