import { useContext } from "react"
import {LanguageContext} from "../context/LanguageContext.jsx";
import translations from "../translations/translations";

const About = ()=>{
    const {language} = useContext(LanguageContext);
    return <p>{translations[language].about}</p>
}

export default About;
