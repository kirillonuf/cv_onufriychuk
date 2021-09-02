
import Education from "./Education";
import Skills from "./Skills";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
const copy = () => {
    const url = document.URL;
    console.log(url);
//   document.body.appendChild()

    html2canvas(document.body).then(function (canvas) {

        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const url = document.URL;

let width=0;
let height=0;
let top=0;
let left=0;
        let docPDF = new jsPDF(
             {

             orientation: screenWidth > screenHeight ? "l" : "p",

             unit: "mm",

            format: "a4",
            compress: true,
            precision: 1,
            hotfixes: ['px_scaling']
            // [screenWidth, screenHeight]

         }
        );
      
if(screenWidth > screenHeight){
    
    width=270;
    height=210;
    left=20;
    top=0;
}else{
    width=220;
    height=270;
    left=0;
    top=20;
}
        docPDF.addImage( canvas.con, 'JPEG',left,top,width,height);
        // , 'JPEG', 0, 0,screenWidth, screenHeight
        docPDF.output('save', 'cv-onufriychuk.pdf');

    });

};

const LifePath = (props) => {

    return (

        <div className="lifePath">

            <div className="header">

                <div className="vertSeparator"></div>

                <input className="btn" onClick={copy} translate="no" value="Save" type="button"></input>

            </div>

            <div className="separator2"></div>

            <Education />

            <Skills />

        </div>

    );

}
export default LifePath;