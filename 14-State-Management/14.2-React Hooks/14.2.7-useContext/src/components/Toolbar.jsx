import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

// Step 3: Use the context
function Toolbar() {
    const {theme, setTheme} = useContext(ThemeContext);
    
    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    };

    return(
        <div>
            <h4>Toolbar Component</h4>
            <button onClick={toggleTheme} style={{ marginTop: "10px" }}>
                Toogle Theme
            </button>
        </div>
    )
}

export default Toolbar;