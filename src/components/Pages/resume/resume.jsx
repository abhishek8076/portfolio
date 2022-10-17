import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./resume.css"
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// <=====================Resume Linlk===========================>
const resumeLink =
    "https://raw.githubusercontent.com/abhishek8076/abhi1/master/src/Assets/KshitijAnandResume.pdf";

function ResumeNew() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div style={{ backgroundColor: '#ccffff' }}>
            <div className="container" >
                <Container fluid className="resume-section" style={{ justifyContent: "center" }}>
                    {/* <Particle /> */}
                    <Row style={{ justifyContent: "center" }}>
                     

                        <a href="https://raw.githubusercontent.com/abhishek8076/abhi1/master/src/Assets/KshitijAnandResume.pdf">
                            <div class="text-center">
                            <button type="button" class="btn btn-primary"><AiOutlineDownload /> Download </button>
                        </div></a>

                    </Row>

                    <Row className="resume" >
                        <Document file={resumeLink} className="d-flex justify-content-center">
                            <Page pageNumber={1} scale={width > 786 ? 2.0 : 0.6} />
                        </Document>
                    </Row>

                </Container>
            </div>
        </div>
    );
}

export default ResumeNew;