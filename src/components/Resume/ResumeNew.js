import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import pdf from "../../Assets/jhon_christian_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section className="page">
      <Container className="narrow">
        <div className="section-head">
          <div>
            <p className="eyebrow">Résumé</p>
            <h1 className="page-title mb-0">One page, everything</h1>
          </div>
          <a href={pdf} target="_blank" rel="noreferrer" className="btn-accent">
            <AiOutlineDownload /> Download PDF
          </a>
        </div>
        <div className="resume-frame">
          <Document file={pdf}>
            <Page pageNumber={1} width={Math.min(width - 48, 820)} />
          </Document>
        </div>
      </Container>
    </section>
  );
}

export default ResumeNew;
