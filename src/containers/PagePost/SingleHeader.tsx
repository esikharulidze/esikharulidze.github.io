import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import React, { FC } from "react";
import SingleTitle from "./SingleTitle";
import { SinglePageType } from "./PageSingleTemp3Sidebar";
import PostMeta2 from "components/PostMeta2/PostMeta2";
import SingleMetaAction2 from "./SingleMetaAction2";
import { Helmet } from "react-helmet";
import { BackendPost } from "types";

export interface SingleHeaderProps {
  pageData: BackendPost;
  hiddenDesc?: boolean;
  metaActionStyle?: "style1" | "style2";
  titleMainClass?: string;
  className?: string;
}

const SingleHeader: FC<SingleHeaderProps> = ({
  pageData,
  titleMainClass,
  hiddenDesc = false,
  className = "",
  metaActionStyle = "style1",
}) => {
  const { categories, content, title } = pageData;

  return (
    <>
      <Helmet>
        <title>Animus.ge - ინტელექტი ადამიანს მიღმა</title>
      </Helmet>
      <div className={`nc-SingleHeader ${className}`}>
        <div className="space-y-5">
          <CategoryBadgeList itemClass="!px-3" categories={categories} />
          <SingleTitle mainClass={titleMainClass} title={title} />
          {!!content && !hiddenDesc && (
            <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
              {content}
            </span>
          )}
          <div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>
          <div className="flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5">
            <PostMeta2
              size="large"
              className="leading-none flex-shrink-0"
              meta={pageData}
              hiddenCategories
              avatarRounded="rounded-full shadow-inner"
            />
            <SingleMetaAction2 meta={pageData} />
          </div>
        </div>

        {/* {metaActionStyle === "style1" ? (
          <SingleMetaAction meta={pageData} />
        ) : (
          <SingleMetaAction2 meta={pageData} />
        )} */}
      </div>
    </>
  );
};

export default SingleHeader;
