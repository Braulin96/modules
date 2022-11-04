import Module from "./components/Module";
import ModuleWithOptions from "./components/ModuleWithOptions";

const style={
  h3: {
    color:"black",
    margin:"20px 0px 0px 0px", 
  },
  h4: {
    color:"black",
    margin:"5px 0px 0px 0px", 
  }
}

function App() {
  return (
  <div >
    <Module></Module>
    <ModuleWithOptions/>
  </div> 
  );
}
export default App;
