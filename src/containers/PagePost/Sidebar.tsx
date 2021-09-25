import React, { FC, useEffect, useState } from "react";
import WidgetAuthors from "components/WidgetAuthors/WidgetAuthors";
import WidgetCategories from "components/WidgetCategories/WidgetCategories";
import WidgetPosts from "components/WidgetPosts/WidgetPosts";
import WidgetTags from "components/WidgetTags/WidgetTags";
import { DEMO_AUTHORS } from "data/authors";
import { DEMO_POSTS } from "data/posts";
import { DEMO_CATEGORIES, DEMO_TAGS } from "data/taxonomies";
import { PostDataType } from "data/types";
import axios, { AxiosResponse } from "axios";
import { BackendCategory} from "types";

export interface SidebarProps {
  className?: string;
  categories: BackendCategory[]
}



const widgetPosts: PostDataType[] = DEMO_POSTS.filter((_, i) => i > 2 && i < 7);
const tags = DEMO_TAGS.filter((_, i) => i > 5);
// const categories = DEMO_CATEGORIES.filter((_, i) => i > 0 && i < 30);
const authors = DEMO_AUTHORS.filter((_, i) => i < 5);



export const Sidebar: FC<SidebarProps> = ({
   className = "space-y-6 ", categories }) => 
   {
  
  return (
    <div className={`nc-SingleSidebar ${className}`}>
      {/* <WidgetTags tags={tags} /> */}
      {/* <WidgetAuthors authors={authors} /> */}
      <WidgetCategories categories={categories} />
      {/* <WidgetPosts posts={widgetPosts} /> */}
    </div>
  );
};
