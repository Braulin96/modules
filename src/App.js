import ModuleOptionsAndIcon from "./components/ModuleOptionsAndIcon";
import Carousel from 'react-elastic-carousel';
import Module from "./components/Module";
import ModuleMore from "./components/ModuleMore";


function App() {
  const breakPoints=[
    { width: 1, itemsToShow: 1},
    { width: 370, itemsToShow: 2},
    { width: 500, itemsToShow: 3},
    { width: 700, itemsToShow: 4},
]
  return (
  <div >
   <ModuleMore height={80}>
    <p>container</p>
    <p>container</p>
    <p>container</p>
    <p>container</p>
    <p>container</p>
    <p>container</p>
   </ModuleMore>
   
    <Carousel breakPoints={breakPoints} showArrows={false}>
      <div className="my-4">
        <ModuleOptionsAndIcon>
          <h3 className="m-0">2/7</h3>
          <p className="m-0">Checks</p>
        </ModuleOptionsAndIcon>
      </div>
      <div className="my-4">
        <ModuleOptionsAndIcon>
          <h3 className="m-0">98%</h3>
          <p className="m-0">Health Score</p>
        </ModuleOptionsAndIcon>
      </div>
      <div className="my-4">
        <ModuleOptionsAndIcon>
          <h3 className="m-0">Dr Lynch</h3>
          <p className="m-0">My specialist</p>
        </ModuleOptionsAndIcon>
      </div>
      <div className="my-4">
        <ModuleOptionsAndIcon>
          <h3 className="m-0">Fitness</h3>
          <p className="m-0">My hours</p>
        </ModuleOptionsAndIcon>
      </div>
      <div className="my-4">
        <ModuleOptionsAndIcon>
          <h3 className="m-0">Medical history</h3>
        </ModuleOptionsAndIcon>
      </div>
    </Carousel>
  </div> 
  
  );
}
export default App;
