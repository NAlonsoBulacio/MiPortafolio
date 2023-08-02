import React from "react";
import MyPDF from "../../images/cv.pdf";
import { FaCloudDownloadAlt } from "react-icons/fa";
import './Resume.css';

const Resume = () => {
  const handleDownloadPDF = () => {
    const pdfURL = MyPDF;
    const fileName = "CV Nicolas Alonso.pdf";
    const link = document.createElement("a");
    link.href = pdfURL;
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
        Descargar CV{" "}
        <FaCloudDownloadAlt
          size={35}
          style={{ marginLeft: "0px", marginTop: "-3px" }}
        />
      </button>
    </div>
  );
};

export default Resume;
