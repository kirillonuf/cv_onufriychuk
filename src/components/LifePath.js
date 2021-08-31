
import Education from "./Education";
import Skills from "./Skills";

const copy = () => {

    let dummy = document.createElement('input'),
        text = document.URL;

    document.body.appendChild(dummy);

    dummy.value = text;

    dummy.select();

    document.execCommand('copy');

    document.body.removeChild(dummy);

};

const LifePath = (props) => {

    const data = props.data;

    return (

        <div className="lifePath">

            <div className="header">

                <div className="vertSeparator"></div>

                <input className="btn" onClick={copy} translate="no" value="Copy Link" type="button"></input>

            </div>

            <div className="separator2"></div>

            <Education />

            <Skills />

        </div>

    );

}
export default LifePath;