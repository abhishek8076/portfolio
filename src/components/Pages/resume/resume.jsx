import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Card} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import pdf from "../../../assets/resume/AbhishekResume.pdf";
import Particle from "./Particle";
// import "./resume.css"
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import  "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// <=====================Resume Linlk===========================>
const resumeLink =
"https://raw.githubusercontent.com/abhishek8076/portfolio/master/src/assets/resume/AbhishekResume.pdf";
 pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
function ResumeNew() {
    const [width, setWidth] = useState(600);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div style={{  paddingTop:'20px',backgroundColor: '#ccffff' }}>
            <div className="container" >
                <Container fluid className="resume-section" style={{ justifyContent: "center" }}>
                    
                    <Particle />
                    <Row style={{ justifyContent: "center", position: "relative"  }}>
                     

                        <a href={resumeLink}>
                            <div class="text-center">
                            <button type="button" class="btn btn-primary"><AiOutlineDownload /> Download </button>
                        </div></a>

                    </Row>

                    <Row className="resume" style={{  height:"100%" ,width:'100%', paddingTop:'20px',display: '-webkit-box'}}  >
                        <Document file={pdf}  style={{diaplay:"flex"}} className="d-flex justify-content-center">
                            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                        </Document>
                    </Row>
                    
                </Container>
            </div>
        </div>
    );
}

export default ResumeNew;




