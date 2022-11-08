import ModuleWithOptions from "./components/ModuleWithOptions";
import Carousel from 'react-elastic-carousel';

function App() {
  const breakPoints=[
    { width: 1, itemsToShow: 1},
    { width: 100, itemsToShow: 2},
    { width: 500, itemsToShow: 3},
    { width: 700, itemsToShow: 4},
]
  return (
  <div >
    <Carousel breakPoints={breakPoints}>
      <ModuleWithOptions>
        <h3>2/7</h3>
        <p>Checks</p>
      </ModuleWithOptions>
      <ModuleWithOptions>
        <h3>98%</h3>
        <p>Health Score</p>
      </ModuleWithOptions>
      <ModuleWithOptions>
        <h3>Dr Lyunch</h3>
        <p>My specialist</p>
      </ModuleWithOptions>
      <ModuleWithOptions>
        <h3>Fitness</h3>
        <p>My hours</p>
      </ModuleWithOptions>
      <ModuleWithOptions>
        <h3>Medical History</h3>
      </ModuleWithOptions>
    </Carousel>
  </div> 
  );
}
export default App;
