import './style/App.css';
import Logotipas from './components/Logotipas';
import Header from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className='container'>
      <Logotipas />
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
