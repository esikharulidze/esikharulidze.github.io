import { AxiosResponse } from "axios";
import LayoutPage from "components/LayoutPage/LayoutPage";
import NcImage from "components/NcImage/NcImage";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export interface ServiceInnerProps {
  className?: string;
}

const ServiceInner: FC<ServiceInnerProps> = ({ className = "" }) => {

  return (
    <div>
      <LayoutPage isInner={true} heading="">
      <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-1 md:gird-cols-2">
          <NcImage src="https://i.ibb.co/5W1kbzY/elene.jpg"></NcImage>
          <div className="lg:grid-span-3 sm:grid-snap-1 md:grid-snap-2">
            <h2>elene sikharuliudze</h2>
            <p>imena elene aris</p>
            <hr />
            <h3>mediki</h3>
            <p>dalshe description</p>
          </div>
      </div>
        
      </LayoutPage>
    </div>
  );
};

export default ServiceInner;
