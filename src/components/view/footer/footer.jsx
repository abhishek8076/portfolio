import React from 'react';
// import Style from '../../Pages/home/Home.module.scss';
import Style from "./footer.scss"
import {Box, Grid} from "@mui/material";

const Footer=()=>{
    return(
        <>
           
               <Box component={'footer'}  backgroundColor={'#ccffff'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'27px'}  sm={2} sx={{opacity: 1.0}} width={'100%'}  >
                 <div style={{color:"#000"}}  backgroundColor={'#ccffff'}>
                  <p >Template created  by  Abhishek  &copy; 2022</p>
                  </div>
               </Box>
            
        </>
    );
}
export default Footer;