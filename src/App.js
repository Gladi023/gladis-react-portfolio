import Navigation from './Components/Navigation/Navigation';
import UserDash from './Components/UserDash/UserDash';
import ProductCard from './Components/ProductCard/ProductCard';
import ParticlesBg from 'particles-bg'



import './App.css';



function App() {
  return (
    <div className="App">
   <ParticlesBg type="cobweb" bg={true} />
      <Navigation />
      <UserDash />
       <ProductCard />

   </div>
  );
}

export default App;