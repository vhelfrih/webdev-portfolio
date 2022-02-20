import React from "react";
import { Resume } from "./CvStyles";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("./pdf-viewer"), {
  ssr: false,
});

export default function CV() {
  return (
    <div>
      <Resume>
        <PDFViewer />
      </Resume>
    </div>
  );
};

