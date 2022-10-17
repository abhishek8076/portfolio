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
// import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { styled } from '@mui/material/styles';
import './about.css'
import { education } from "../../../info/Info";
export const About = () => {
  // const Img = styled('img')({
  //   margin: 'auto',
  //   display: 'block',
  //   maxWidth: '100%',
  //   maxHeight: '100%',
  // });
  return (

    <div style={{ backgroundColor: "#ccffff" }}>
      {/* <h1 style={{textAlign:"center"}}>About</h1> */}
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
      {/* =================services section=========================== */}
      {/* <div className="container" style={{ width: "18rem;" }}> */}
        <div class="card" style={{ width: "150px", marginLeft:"15px" }} >
          <img class="card-img-top" src="..." alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style={{ width: "150px", marginLeft:"15px" }} >
          <img class="card-img-top" src="..." alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style={{ width: "150px", marginLeft:"15px" , display:"flex" }} >
          <img class="card-img-top" src="..." alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      {/* </div> */}




      {console.log("everything is okk")};
    </div>

  );
};
