import Module from "./components/Module";
import ModuleWithOptions from "./components/ModuleWithOptions";
import { Icon } from "./components/Icon";

function App() {
  return (
  
    <div className="App">
    <Module>
      <h1> module 1</h1>
    </ Module>
    <ModuleWithOptions>
      <h2> module 2</h2>
    </ModuleWithOptions>
    </div>
  );
}

export default App;
