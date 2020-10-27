
import './App.css';
import Navigation from './components/navigation';
import Slider from './components/slider';
import Footer from './components/footer';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Slider />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
