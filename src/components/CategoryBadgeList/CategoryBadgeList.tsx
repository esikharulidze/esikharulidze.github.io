import { PostDataType } from "data/types";
import React, { FC } from "react";
import Badge from "components/Badge/Badge";
import { BackendCategory } from "types";

export interface CategoryBadgeListProps {
  className?: string;
  itemClass?: string;
  categories: BackendCategory[];
}

const CategoryBadgeList: FC<CategoryBadgeListProps> = ({
  className = "flex flex-wrap space-x-2",
  itemClass,
  categories,
}) => {
  return (
    <div
      className={`nc-CategoryBadgeList ${className}`}
      data-nc-id="CategoryBadgeList"
    >
      {categories.map((item, index) => (
        <Badge
          className={itemClass}
          key={index}
          name={item.title}
          href={item.slug}
          color='red'
        />
      ))}
    </div>
  );
};

export default CategoryBadgeList;
