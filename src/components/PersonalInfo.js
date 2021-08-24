//import photo from '../data/images.png'
import aboutMe from "../data/aboutMe";
import ContactInfo from "./ContactInfo"
import image from "../data/avatarka.jpg"
const PersonalInfo = (props) => {

    const data = props.data;
    const age = Math.floor((Date.now() - Date.parse(data.birthDate)) / (24 * 3600 * 365.25 * 1000));
    //  console.log(age);
    // console.log(data.image);
    return (

        <div className="personalInfo">

            <div className="photo_name">

                 <div className="photo">
                    <img src={image}></img>
                </div>

                <div className="fullName">

                    <div>
                        <b>{data.firstName} {data.lastName} <br /> {age}</b><br />
                        {data.position}
                    </div>

                </div>
               

            </div>



            <div className="about">
                <h3>About Me:</h3>
                {aboutMe}
            </div>
            <div className="separator"></div>


            <ContactInfo />


        </div>

    );

}
export default PersonalInfo