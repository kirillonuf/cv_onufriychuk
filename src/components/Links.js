import instagram from "../logo/inst.png"
import telegram from "../logo/tel-removebg-preview.png"
import face from "../logo/logo-fcbk-noir.png"

export const Links = () => {

    return (

        <div className="links">

             <a href='https://www.instagram.com/onuf_kirill'><img alt="instagram" src={instagram}></img></a> 

             <a href='https://t.me/kirill_onufriychuk'><img alt="telegram" src={telegram}></img></a>

             <a href='https://www.facebook.com/kirill.onufriychuk'><img alt="facebook" src={face}></img></a>

        </div>

    );
}