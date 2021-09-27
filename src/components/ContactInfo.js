import data from "../data/data.json"
import phone from "../logo/telephone.png"
import location from "../logo/local.png"
import email from "../logo/mail.png";
import git from "../logo/github-icon-logo-png-transparent.png"

const contactData = data;

const ContactInfo = () => {

    return (

        <div className="contactInfo">

            <div className="description">

                <div className="picture">  <img alt="location" src={location}></img></div>
                <div className="data">      {contactData.location}</div>

            </div>

            <div className="description">

                <div className="picture"> <img alt="phone"  src={phone}></img></div>
                <div className="data"><a  href="tel:${contactData.phoneNumber}"> {contactData.phoneNumber} </a></div>

            </div>

            <div className="description">

                <div className="picture"> <img alt="email" src={email}></img></div>
                <div className="data"> {contactData.email}</div>

            </div>

            <div className="description">

                <div className="picture"> <img alt="git" src={git}></img></div>
                <div className="data"><a  href={contactData.gitHub}   >{contactData.gitHub}</a></div>

            </div>

        </div>

    );

}
export default ContactInfo;