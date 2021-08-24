import data from "../data/data.json"
import phone from "../logo/telephone.png"
import location from "../logo/local.png"
import email from "../logo/mail.png";
import git from"../logo/github-icon-logo-png-transparent.png"

const contactData = data;
////console.log(contactData)


//const phone = "../logo/telephone.png";

//console.log(email)
const ContactInfo = () => {

    return (

        <div className="contactInfo">

            <div>
                <img  src={location}></img> {contactData.location}
            </div>
            <div>
                <img src={phone}></img>   {contactData.phoneNumber}
            </div>
            <div>
                <img  src={email}></img>    {contactData.email}
            </div>
            <div>
                <img  src={git}></img>    {contactData.gitHub}
            </div>

        </div>

    );

}
export default ContactInfo;