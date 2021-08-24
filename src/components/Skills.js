//import { element } from "prop-types";
import data from "../data/data.json"
const Skills = () => {
    const skills = data.skills;
    console.log(skills)
    return (


        <div className="skills">

            <h2><b>Skills</b></h2>
            
            <ul>


                {skills.map((el, i) => {

                    return <li key={i}>{el}</li>

                })}

            </ul>


        </div>



    );

}
export default Skills;