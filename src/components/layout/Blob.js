import React from "react";
import { BlobStyled, BlobSVG, BlobPath } from "./BlobStyled";

const Blob = () => {
  return (
    <BlobStyled>
      <BlobSVG
        width="600"
        height="600"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <BlobPath></BlobPath>
        </g>
      </BlobSVG>
    </BlobStyled>
  );
};

export default Blob;
