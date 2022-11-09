import ModuleWithOptions from "./components/ModuleWithOptions";
import Carousel from 'react-elastic-carousel';

function App() {
  const breakPoints=[
    { width: 1, itemsToShow: 1},
    { width: 370, itemsToShow: 2},
    { width: 500, itemsToShow: 3},
    { width: 700, itemsToShow: 4},
]
  return (
  <div >
    <Carousel breakPoints={breakPoints} showArrows={false}>
      <div className="my-4">
        <ModuleWithOptions>
          <h3 className="m-0">2/7</h3>
          <p className="m-0">Checks</p>
        </ModuleWithOptions>
      </div>
      <ModuleWithOptions>
        <h3 className="m-0">98%</h3>
        <p className="m-0">Health Score</p>
      </ModuleWithOptions>
      <ModuleWithOptions>
        <h3 className="m-0">Dr Lyunch</h3>
        <p className="m-0">My specialist</p>
      </ModuleWithOptions>
      <ModuleWithOptions>
        <h3 className="m-0">Fitness</h3>
        <p className="m-0">My hours</p>
      </ModuleWithOptions>
      <ModuleWithOptions>
        <h3 className="m-0">Medical History</h3>
      </ModuleWithOptions>
    </Carousel>
  </div> 
  );
}
export default App;
