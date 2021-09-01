
import aboutMe from "../data/aboutMe";
import ContactInfo from "./ContactInfo"
import image from "../data/profilePhoto.jpg"

const PersonalInfo = (props) => {

    const data = props.data;

    const age = Math.floor((Date.now() - Date.parse(data.birthDate)) / (24 * 3600 * 365.25 * 1000));

    return (

        <div className="personalInfo">

            <div className="photo_name">

                <div className="photo">

                    <img alt="persona" src={image}></img>

                </div>

                <div className="fullName">

                    <div>

                        <div>{data.firstName}</div>

                        <div>{data.lastName}</div>

                        <div>{age}</div>

                        <div>{data.position}</div>

                    </div>

                </div>

            </div>

            <div className="about">

                <h3>About Me:</h3>

                <div className="description"> {aboutMe}</div>

            </div>

            <div className="separator"></div>

            <ContactInfo />

        </div>

    );

}
export default PersonalInfo