import './css/App.css';
import Navigation from './comp/Navigation';
import Home from './comp/Home';
import Checkout from './comp/Checkout';

function App() {
  return (
    <div className="App">
    <Navigation />
    <Home />
    {/* <Checkout /> */}
    </div>
  );
}

export default App;
