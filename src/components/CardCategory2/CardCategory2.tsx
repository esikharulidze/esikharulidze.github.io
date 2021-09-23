import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import { TaxonomyType, TwMainColor } from "data/types";
import { Link } from "react-router-dom";
import Badge from "components/Badge/Badge";
import ChildrenIMG from "data/serviceicons/ChildrenIMG"
import AdultIMG from "data/serviceicons/AdultIMG"
import IndividualIMG from "data/serviceicons/InduvidualIMG"
import KidsIMG from "data/serviceicons/KidsIMG"
export interface CardCategory2Props {
  className?: string;
  taxonomy: TaxonomyType;
  index?: string;
  optionalClick?: () => void
}

const CardCategory2: FC<CardCategory2Props> = ({
  className = "",
  taxonomy,
  index,
  optionalClick
}) => {
  const { count, name, description, href = "/", thumbnail, color } = taxonomy;
  return (
    <Link
      to={href}
      className={`nc-CardCategory2 relative flex flex-col items-center justify-center text-center px-3 py-5 sm:p-6  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ]  ${className}`}
      data-nc-id="CardCategory2"
      onClick={(event) => {
       if (optionalClick) {
         event.preventDefault()
         optionalClick()
       } 
      }}
    >
      {index && (
        <Badge
          color={color as TwMainColor}
          name={index}
          className="absolute -top-0 sm:top-0 left-0"
        />
      )}
      <br/>
      {thumbnail == "Children" ? <ChildrenIMG/> : <></>}
      {thumbnail == "Adult" ? <AdultIMG/> : <></>}
      {thumbnail == "Individual" ? <IndividualIMG/> : <></>}
      {thumbnail == "kids" ? <KidsIMG/> : <></>}
      {/* <NcImage
      containerClassName={`flex-shrink-0 w-20 h-20 rounded-full overflow-hidden`}
      src={thumbnail}
    />} */}
      
      <div className="mt-3">
        <h2 className={`text-xs md:text-lg lg:text-lg xl:text-2xl font-semibold`}>
          <span className="line-clamp-1">{name}</span>
        </h2>
        <span
          className={`block mt-[2px] lg:text-sm md:text-base text-xs text-neutral-500 dark:text-neutral-400`}
        >
          {description}
        </span>
      </div>
    </Link>
  );
};

export default CardCategory2;
