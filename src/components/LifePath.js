
import Education from "./Education";
import Skills from "./Skills";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
// import *  from 'jspdf';
 import domtoimage from 'dom-to-image';



// // https://www.npmjs.com/package/jspdf
// // https://www.npmjs.com/package/dom-to-image
// // import * as jsPDF from 'jspdf';
// // import domtoimage from 'dom-to-image';

// const copy=()=>{
//    // const div = document;
//     const options = { background: 'white', height: 845, width: 595 };
//     domtoimage.toPng(document.body, options).then((canvas) => {
//         //Initialize JSPDF
//         const doc = new jsPDF('p', 'mm', 'a4');
//         //Add image Url to PDF
//         doc.addImage(canvas, 'PNG', 0, 0, 210, 340);
//         doc.save('pdfDocument.pdf');
//     })
// }




const copy = () => {
    const url = document.URL;
    console.log(url);
//   document.body.appendChild()

    html2canvas(document.body,{

        scale:10

    } ).then(function (canvas) {
     
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
          //  compress: true,
            putOnlyUsedFonts:true,
            precision: 16,
           
            // [screenWidth, screenHeight]

         }
        );
      
if(screenWidth > screenHeight){
    
    width=310;
    height=210;
    // left=20;
    // top=0;
}else{
    width=210;
    height=310;
    // left=0;
    // top=20;
}
        docPDF.addImage( canvas, 'JPEG',left,top,width,height);
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