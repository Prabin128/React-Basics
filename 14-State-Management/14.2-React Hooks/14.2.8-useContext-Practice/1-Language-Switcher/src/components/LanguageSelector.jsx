import { useContext } from "react";
import {LanguageContext} from "../context/LanguageContext.jsx";

const LanguageSelector = () => {

    const {setLanguage} = useContext(LanguageContext);

    const handleChange =(e)=>{
        setLanguage(e.target.value); // change the language
    }

    return (
        <div>
            <label>Select Language: </label>
            <select onChange={handleChange}>
                <option value="en">English</option>
                <option value="np">Nepali</option>
            </select>
        </div>
    )
}

export default LanguageSelector;