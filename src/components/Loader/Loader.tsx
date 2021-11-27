import { useState } from "react";
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #c026d3;
`;

const Loader = () => {
  return (
    <div className="sweet-loading">
      <PuffLoader color="#c026d3" loading={true} css={override} size={150} />
    </div>
  );
}

export default Loader;