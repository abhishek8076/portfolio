import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import BackToTop from "react-back-to-top-button";
// import { Button } from './Styles';
import { Button } from '@mui/material';
import {FaArrowCircleUp} from 'react-icons/fa';
// import './btnTop.css'
export const BtnTop=()=>{
    const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'auto'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button style={{  position: "fixed", 
        width: "90%",
        left: "50%",
        bottom: "40px",
        height: "20px",
        fontSize: '3rem',
        zIndex: '5',
        cursor: "pointer",
        marginRight:"20px",
        color: "#1f5156"}}>
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button>
    )
}