import React from "react";
import {
  Container,
  Box,
  Grid,
  Card,
  createTheme,
  Typography,
  Paper,
  ButtonBase,

}
  from "@mui/material";
  import me from "./../../../assets/img/skill.jpg";
// import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { styled } from '@mui/material/styles';
import './about.css'
import { education } from "../../../info/Info";
import { Skill } from "../../../assets/skill/skill";
import { Service } from "../../../assets/services/services";
export const About = () => {
  // const Img = styled('img')({
  //   margin: 'auto',
  //   display: 'block',
  //   maxWidth: '100%',
  //   maxHeight: '100%',
  // });
  return (
      <>
    <div style={{ backgroundColor: "#ccffff",height:"100%", paddingTop: "100px",
    paddingBottom: "50px",
    justifyContent: "center",
    }}>
      <div style={{height:"100%", paddingTop: "100px",
    paddingBottom: "50px",
    justifyContent: "center"}}>
      <Container >

        <Card  >
          <div id="fh5co-resume" className="fh5co-bg-color">
            <div className="container">
              <div className="row animate-box">
                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">

                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-md-offset-0">
                  <ul className="timeline">
                    <li className="timeline-heading text-center animate-box">
                      <div><h3>Word Experience</h3></div>
                    </li>
                    <li className="animate-box timeline-unverted">
                      <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h3 className="timeline-title">Intern</h3>
                          <span className="company">Ornate TechnoServies Pvt. Ltd <br /> July-22 - Present</span>
                        </div>
                        <div className="timeline-body">
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                      </div>
                    </li>

                    <br />
                    <li className="timeline-heading text-center animate-box">
                      <div><h3>Education</h3></div>
                    </li>
                    <li className="animate-box timeline-unverted">
                      <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h3 className="timeline-title"> Bachelors's in Computer Application (BCA)</h3>
                          <span className="company">Indira Gandhi National Open University  <br /> July-2020 - Present</span>
                        </div>
                        <div className="timeline-body">
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        <span className="company">Grad :- NA</span>
                      </div>
                    </li>
                    <li className="timeline-inverted animate-box">
                      <div className="timeline-badge"><i className="fa-graduation-cap"></i></div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h3 className="timeline-title">12th </h3>
                          <span className="company">Central board of secondary education  <br /> 2019 - 2020</span>

                        </div>
                        <div className="timeline-body">
                          <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                        <span className="company">Grade:-79.4%</span>
                      </div>
                    </li>
                    <li className="animate-box timeline-unverted">
                      <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h3 className="timeline-title">10th</h3>
                          <span className="company">Central board of secondary education  <br /> 2019 - 2020</span>
                        </div>
                        <div className="timeline-body">
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        <span className="company">Grade:-79.4%</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
      </div>
      {/* =================services section=========================== */}
      
      {console.log("everything is okk")};
     <div style={{height:"100%", paddingTop: "20px",
    paddingBottom: "50px",
    justifyContent: "center"}}>
     
    <Container style={{ display:"flex"
    }}>
        <Card style={{height:"100%",  width:"100%",paddingTop: "50px",
    paddingBottom: "50px",
    justifyContent: "center",
    alignItem:"center" ,
    display:"flex"}}>
        <Skill/>
        </Card>
        <Card style={{height:"80%",  width:"100%",paddingTop: "50px",
    paddingBottom: "50px",
    justifyContent: "center",
    alignItem:"center" ,
    display:"flex"}}>
          <img src={me} style={{ height:'500px',display:"flex", flex:'100%',
  flexWrap: 'wrap',
  padding:' 0 4px'}} />
        </Card>
        </Container>
        <Container style={{height:"80%",  width:"100%",paddingTop: "80px",
    paddingBottom: "50px",
    justifyContent: "center",
    alignItem:"center" ,
    display:"flex"}}>
          <Card style={{height:"80%",  width:"100%",paddingTop: "80px",
    paddingBottom: "50px",
    justifyContent: "center",
    alignItem:"center" ,
    display:"flex"}}>
            <Service/>
          </Card>
        </Container>
        </div>
        </div>
    </>
  );
};
