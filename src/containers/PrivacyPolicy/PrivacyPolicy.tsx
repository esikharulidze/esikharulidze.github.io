import { AxiosResponse } from "axios";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import LayoutPage from "components/LayoutPage/LayoutPage";
import ModalCourse from "components/ModalCourse/ModalCourse";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackendCourse } from "types";
import axios from "utils/axios";
import { useHistory } from "react-router-dom";
// import PrivacyPolicy from ".";

export interface ServiceInnerProps {
  className?: string;
}

const services = {
  individual: 0,
  adults: 1,
  teens: 2,
  kids: 3,
};

const PrivacyPolicy: FC<ServiceInnerProps> = ({ className = "" }) => {
  const [course, setCourse] = useState<BackendCourse>();
  const { slag, slug } =
    useParams<{
      slag: string;
      slug: "individual" | "adults" | "teens" | "kids";
    }>();
  const [isReporting, setIsReporting] = useState(false);
  const openModalReportComment = () => setIsReporting(true);
  const closeModalReportComment = () => setIsReporting(false);

  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        await axios
          .get<any, AxiosResponse<BackendCourse>>(`course/${slag}`)
          .then(({ data }) => {
            setCourse(data);
          });
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <div>
      <LayoutPage isInner={true} heading="" cover={course?.cover}>
        <h3 className="text-3xl md:text-4xl font-semibold mb-10">კონფიდენციალურობის პოლიტიკა</h3>
        <p>
        <p>
          თერაპიის კურსის მსვლელობისას კლიენტთან არსებული ყველა
          ინტერაქცია/ურთიერთობა ითვლება კონფიდენციალურად.</p>
          <br/>
          <p>ეს მოიცავს მათ შორის (და არა მხოლოდ) ტელეფონის საშუალებით გაცვლილ ინფორმაციას, თერაპევტთან
          არსებულ ინტერაქციას, სეანსების გრაფიკს ან ჩანაწერებს, სეანსის
          ნებისმიერი შინაარსის ყველა ჩანაწერს, რაც გაკეთდება კლიენტისთვის
          ჩატარებული სეანსების მსვლელობისას.</p>
          <br/>
          <p>ჩვენ არ მოვახდენთ ჩვენი კლიენტების
          ვინაობის გადამოწმებას. მხოლოდ ჩვენს კლიენტებს ექნებათ უფლება მოგვცენ
          წერილობითი ნებართვა, რომ მათ შესახებ ნებისმიერი ან კონკრეტული
          ინფორმაცია გავცეთ კლიენტების მიერ სახელდებულ ნებისმიერ პირზე ან
          სააგენტოზე. </p>
          <br/>
          <h3 className="text-lg md:text-lg font-semibold">ჩვენ თავისუფლები ვართ კონფიდენციალურობის დაცვისაგან, თუკი:</h3>
          <br/>


          <ul className="pr-10 list-disc list-outside">
            <li>კლიენტათან არსებული ინტერაქციის შინაარსის გაცემის ვალდებულება
          გვეკისრება სასამართლოს მიერ გაცემული შესაბამისი დოკუმენტის ან/და
          სამართალდამცავი ორგანოს მიერ გაკეთებული დასაბუტებული მოთხოვნის
          საფუძველზე; </li>
          <br/>
            <li>ფსიქოლოგიური დახმარების/სეანსის მსვლელობისას ჩვენთვის ცნობილი გახდა უკვე ჩადენილი შესაძლო დანაშაულის ფაქტის შესახებ, რა
          დროსაც ჩვენი ვალდებულებაა შესაბამისი საგამოძიებო ორგანოებისათვის
          ინფორმაციის მიწოდება;</li>
          <br/>
            <li>ფსიქოლოგიური დახმარების/სეანსის მსვლელობისას
          ჩვენთვის ცნობილი გახდა დანაშაულის მოსალოდნელი ჩადენის შესახებ, რა
          დროსაც ჩვენი ვალდებულებაა შესაბამისი საგამოძიებო ორგანოებისათვის
          ინფორმაციის მიწოდება;</li>
          <br/>
            <li>გვაქვს გონივრული ვარაუდის საფუძველი, რომ ჩვენი
          კლიენტი წარმოადგენს ან საკუთარი თავის ან სხვა პირის/პირების მიმართ
          საფრთხეს.</li>
          </ul>
          
        </p>
      </LayoutPage>
    </div>
  );
};

export default PrivacyPolicy;
