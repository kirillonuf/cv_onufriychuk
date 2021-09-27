
import Education from "./Education";
import Skills from "./Skills";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import copy from "../pdfFile/pdfCvOnufriychuk.js"






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