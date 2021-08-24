import logo from './logo.svg';

import './App.scss';
import data from './data/data.json'
import PersonalInfo from './components/PersonalInfo';
import LifePath from './components/LifePath';
import { Links } from './components/Links';

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