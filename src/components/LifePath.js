
import Education from "./Education";
import Skills from "./Skills";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

const copy = () => {
    const url = document.URL;
    console.log(url);
    const btn = document.getElementsByClassName("btn");
    btn[0].setAttribute("style", "display:none");
    
    html2canvas(document.body, {

        scale: 4

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

const LifePath = (props) => {

    return (

        <div className="lifePath">

            <div className="header">

                <div className="vertSeparator"></div>

                <input className="btn" onClick={copy} translate="no"  value="Save" type="button"></input>

            </div>

            <div className="separator2"></div>

            <Education />

            <Skills />

        </div>

    );

}
export default LifePath;