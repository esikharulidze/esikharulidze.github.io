import { AxiosResponse } from "axios";
import CardCategory1 from "components/CardCategory1/CardCategory1";
import CardCategory2 from "components/CardCategory2/CardCategory2";
import CardCategory3 from "components/CardCategory3/CardCategory3";
import CardCategory4 from "components/CardCategory4/CardCategory4";
import CardCategory5 from "components/CardCategory5/CardCategory5";
import Heading from "components/Heading/Heading";
import ModalCourse from "components/ModalCourse/ModalCourse";
import { DEMO_CATEGORIES, DEMO_TRENDS } from "data/taxonomies";
import { TaxonomyType } from "data/types";
import React, { useEffect, useState } from "react";
import { BackendCourse, BackendService } from "types";
import { isTemplateExpression } from "typescript";
import axios from "utils/axios";

export interface SectionGridCategoryBoxProps {
  categories?: TaxonomyType[];
  headingCenter?: boolean;
  headingDisplay?:boolean;
  categoryCardType?: "card1" | "card2" | "card3" | "card4" | "card5";
  className?: string;
  optionalClick?: () => void
}

const DATA = DEMO_TRENDS.filter((_, i) => i < 10);

const SectionGridCategoryBox: React.FC<SectionGridCategoryBoxProps> = ({
  categories = DATA,
  categoryCardType = "card2",
  headingDisplay = true,
  headingCenter = true,
  className = "",
  optionalClick
  
}) => {
  let CardComponentName = CardCategory2;
  switch (categoryCardType) {
    // case "card1":
    //   CardComponentName = CardCategory1;
    //   break;
    case "card2":
      CardComponentName = CardCategory2;
      break;
    case "card3":
      CardComponentName = CardCategory3;
      break;
    case "card4":
      CardComponentName = CardCategory4;
      break;
    case "card5":
      CardComponentName = CardCategory5;
      break;

    default:
      CardComponentName = CardCategory2;
  }

  const [showModal,setShowModal] = React.useState(false)
  const [selectedField, setSelectedField] = React.useState(0)
  const [courses, setCourses] = useState<BackendCourse[]>([])
  const [services, setServices] = useState<BackendService[]>([])

  useEffect(() => {
    (async () => {
      try {
        await axios.get<any, AxiosResponse<BackendService[]>>('service').then(({data}) => {
          setServices(data)
        })
        await axios.get<any, AxiosResponse<BackendCourse[]>>('course').then(({data}) => {
          setCourses(data)
        })
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])
  console.log()
  return (
    
    <div className={`nc-SectionGridCategoryBox relative ${className}`}>
      {headingDisplay && <Heading desc="აირჩიეთ თქვენთვის სასურველი შეხვედრის ან შეთავაზების ტიპი" isCenter={headingCenter}>
        კონსულტაციები და შეხვედრები
      </Heading>}
      <ModalCourse show={showModal} id={1} onCloseModalReportItem={() => setShowModal(false)} selectedPlanIndex={selectedField} />
      <div className="grid grid-cols-2 gap-5 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 xl:gap-6 sm:gap-3 md:gap-3 xs:gap-3">
        {console.log(categories)}
        {categories.map((item, i) => (
          item.name !== "ინდივიდუალური" ?
          <CardComponentName
            index={i < 4 && services.filter(service => service.title === item.name).length > 0 ? `${services.filter(service => service.title === item.name)[0].courses.length} შეთავაზება` : undefined}
            key={item.id}
            taxonomy={item}
            optionalClick={i < 1 ? () => {setSelectedField(i); setShowModal(true)}: undefined}
          /> : 
          <CardComponentName
            index={"შეხვედრის დაჯავშნა"}
            key={item.id}
            taxonomy={item}
            optionalClick={i < 1 ? () => {setSelectedField(i); setShowModal(true)}: undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionGridCategoryBox;
function setServices(data: BackendService[]) {
  throw new Error("Function not implemented.");
}

