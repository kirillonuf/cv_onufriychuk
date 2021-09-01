
import Education from "./Education";
import Skills from "./Skills";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
const copy = () => {


    html2canvas(document.body).then(function (canvas) {

        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;

        var docPDF = new jsPDF({

            orientation: screenWidth > screenHeight ? "l" : "p",

            unit:"px",

            format: [screenWidth, screenHeight],
   
        });

        docPDF.addImage(canvas, 'JPEG', 0, 0, screenWidth, screenHeight);

        docPDF.output('save','cv-onufriychuk.pdf');

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