import React from "react";
import MyPDF from "../../images/cv.pdf";

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
    <h1>DESCARGAR RESUME</h1>
    <button onClick={handleDownloadPDF}>
      Descargar Resume
    </button>
    </div>
  );
};

export default Resume;