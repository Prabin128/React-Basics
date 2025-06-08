import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import translations from "../translations/translations.js";

const Home = () => {
  const { language } = useContext(LanguageContext);
  return <h1>{translations[language].home}</h1>;
};

export default Home;