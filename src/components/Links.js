import linkedIn from "../logo/linkedIn_PNG21.png"
import telegram from "../logo/tel-removebg-preview.png"
import face from "../logo/logo-fcbk-noir.png"

export const Links = () => {

    return (

        <div className="links">

            <a href='https://t.me/kirill_onufriychuk'><img alt="telegram" src={telegram}></img></a>


             <a href='https://linkedin.com/in/kirill-onufriychuk-8aa613201'><img alt="instagram" src={linkedIn}></img></a> 


             <a href='https://www.facebook.com/kirill.onufriychuk'><img alt="facebook" src={face}></img></a>

        </div>

    );
}