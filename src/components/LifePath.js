//import data from "../data/data.json"

import Education from "./Education";
import Skills from "./Skills";

const LifePath = (props) => {
    const data = props.data;
    return (

        <div className="lifePath">

            <div className="vertSeparator"></div>

            <div className="separator2"></div>

            <Education/>
            <Skills/>

        </div>

    );

}
export default LifePath;