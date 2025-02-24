import './App.css'

                        // Normal inline Styling React Elements

// function App() {

//   return (
    
//     <>
//       <h1 style= {{ color : "red" }}> Hello Heavy Developers </h1>
//     </>
//   )
// }

          //Using a Separate Style Object 

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

//WE CAN EVEN CHANGE SOME PROPERTIES AS WE NORMALLY CHANGE THE PROPERTY OF JAVASCRIPT OBJECT
const getDateData = new Date().getHours();
customStyle.color = getDateData > 8 ? "blue" : "white";


function App() {
  return (
    
    <>
      <h1 style= { customStyle }> Hello Heavy Developers </h1>
    </>
  )
}










export default App;