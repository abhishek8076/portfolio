import React,{useState,useEffect} from "react";
import './skill.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Skill=()=>{
    return(
<>
<div className="container" widht={'100%'}>
<div className="skills">
  <div className="p-2 text-center " style={{fontSize:"50px" ,fontFamily:"monospace"}} >
    Skills
  </div>
        <div className="skills-bar">
          <div className="bar">
            <div className="info">
              <span>HTML</span>
            </div>
            <div className="progress-line"><span className="html"></span></div>
            <div className="bar">
              <div className="info">
                <span>CSS</span>
              </div>
              <div className="progress-line"><span className="css"></span></div>
              <div className="bar">
                <div className="info">
                  <span>BOOTSTRAP</span>
                </div>
                <div className="progress-line"><span className="bootstrap"></span></div>
                <div className="bar">
                  <div className="info">
                    <span>JAVASCRIPT</span>
                  </div>
                  <div className="progress-line">
                    <span className="javascript"></span>
                  </div>
                  <div className="bar">
                    <div className="info">
                      <span>C PROGRAMMING</span>
                    </div>
                    <div className="progress-line"><span className="c"></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      

</>
    )
}