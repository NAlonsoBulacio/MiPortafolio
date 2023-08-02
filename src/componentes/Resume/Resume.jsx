import React from "react";
import MyPDF from "../../images/cv.pdf";
import MyPDFE from "../../images/cve.pdf";
import { FaCloudDownloadAlt } from "react-icons/fa";
import "./Resume.css";
import { useLanguage } from "../Language/LanguageContext";

const Resume = () => {
  const { language } = useLanguage();
  const handleDownloadPDF = () => {
    const pdfURL = MyPDF;
    const pdfURLE = MyPDFE;
    const fileName = "CV Nicolas Alonso.pdf";
    const link = document.createElement("a");
    if (language === "es") {
      link.href = pdfURL;
    } else {
      link.href = pdfURLE;
    }
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button
        className="custom-button  duration-300"
        onClick={handleDownloadPDF}
        style={{ marginLeft: "0px", marginTop: "-3px" }}
      >
        {language === "es" ? "Descargar CV" : "Download CV"}{" "}
        <FaCloudDownloadAlt
          size={35}
          style={{ marginLeft: "0px", marginTop: "-3px" }}
        />
      </button>
    </div>
  );
};

export default Resume;
