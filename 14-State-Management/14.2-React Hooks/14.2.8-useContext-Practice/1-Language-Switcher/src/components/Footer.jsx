import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import translations from "../translations/translations";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  return <footer>{translations[language].footer}</footer>;
};

export default Footer;
