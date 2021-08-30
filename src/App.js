import logo from './logo.svg';

import './App.scss';
import data from './data/data.json'
import PersonalInfo from './components/PersonalInfo';
import LifePath from './components/LifePath';
import { Links } from './components/Links';

var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};
export const save =  () =>{
    doc.fromHTML(document.querySelector(".general").html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('cv-onufriychuk.pdf');
};

 const App = () => {




    return (

        <div className="general" >

            <div className="userInfo">

                <PersonalInfo data={data} />
                <LifePath data={data} />

            </div>

            

                <Links />

            


        </div>

    );
}

export default App;