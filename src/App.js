import { useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCart from './Components/CoffeeCart';

function App() {

  const coffees = useLoaderData();

  return (
    <div className="App m-20">
      <h2 className='text-center text-6xl my-10 text-purple-600'>Hot Hot Cold Cold Coffee: {coffees.length} </h2>
      <div className='grid md:grid-cols-2 gap-4'>
      {
        coffees.map(coffee=> <CoffeeCart
        key={coffee._id}
        coffee={coffee}></CoffeeCart>)
      }
      </div>

    </div>
  );
}

export default App;
