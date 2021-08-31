//import data from "../data/data.json"

import Education from "./Education";
import Skills from "./Skills";
import { jsPDF } from "jspdf";



// Default export is a4 paper, portrait, using millimeters for units
// const save = new jsPDF();

// save.text("Hello world!", 10, 10);
// save.save("a4.pdf");

   var doc = new jsPDF('p', 'pt', 'letter');
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

 const save =  () =>{
 
    doc.text(document.body.innerHTML, 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
   
    doc.save('cv-onufriychuk.pdf');
    console.log("SAVE");
};

const LifePath = (props) => {
    const data = props.data;
   
    return (

        <div className="lifePath">
<div className="header"> <div className="vertSeparator"></div>
<input className="btn" onClick={save}  translate="no" value="Save"  type="button"></input></div>
           

            <div className="separator2"></div>

            <Education/>
            <Skills/>

        </div>

    );

}
export default LifePath;