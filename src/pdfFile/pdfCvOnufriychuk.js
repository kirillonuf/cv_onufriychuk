
 import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { Children } from 'react';

const copy = () => {
    const url = document.URL;
    console.log(url);
    const btn = document.getElementsByClassName("btn");
    btn[0].setAttribute("style", "display:none");
   let general = document.querySelector(".general");
   general.style.height='auto';
   document.querySelector(".links").style.display="none";
   document.querySelector(".description").style.height="auto";
   document.querySelector(".description").style.overflow ="hidden";
   document.querySelector(".education").style.overflow ="hidden";
   document.querySelector(".skills").style.margin ="50px";
   document.querySelector(".contactInfo").style.height="auto";


//    font-weight: bolder;
   
    html2canvas(document.body, {

        scale: 3

    }).then(function (canvas) {

        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
       
        let width=0;
        let height=0;
       
        let docPDF = new jsPDF(
            {

                orientation: screenWidth > screenHeight ? "l" : "p",

                unit: "mm",

                format:"a4",
                compress: true,
                putOnlyUsedFonts: true,
                precision: 16

                // [screenWidth, screenHeight]

            }
        );

        if(screenWidth > screenHeight){

            width=280;
            height=210;
           
        }else{
            width=210;
            height=280;
            
        }
        docPDF.addImage(canvas, 'JPEG', 0, 0, width, height);
      
        docPDF.output('save', 'cv-onufriychuk.pdf');

    });


    btn[0].setAttribute("style", "display:block");
};

export default copy;