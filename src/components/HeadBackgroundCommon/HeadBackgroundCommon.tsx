import React, { FC } from "react";

export interface HeadBackgroundCommonProps {
  className?: string;
  isInner?: boolean
  cover?: string
}

const HeadBackgroundCommon: FC<HeadBackgroundCommonProps> = ({
  className = "absolute h-[400px]",
  isInner = false,
  cover
}) => {
  return (
    <div>
      {isInner ?
      <div
        
        style={{backgroundImage:cover ? `url(${cover})`: "url(https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2145&q=80)"}}
        className={`nc-HeadBackgroundCommon ${className} top-0 left-0 right-0 w-full bg-primary-100 dark:bg-neutral-800 bg-opacity-25 dark:bg-opacity-40`}
        data-nc-id="HeadBackgroundCommon"
      />
    : <div
    className={`nc-HeadBackgroundCommon ${className} top-0 left-0 right-0 w-full bg-primary-100 dark:bg-neutral-800 bg-opacity-25 dark:bg-opacity-40`}
    data-nc-id="HeadBackgroundCommon"
  />}
    </div>
  );
};

export default HeadBackgroundCommon;
