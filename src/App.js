import './style/App.css';
import Logotipas from './components/Logotipas';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Content from './components/Content';

function App() {
  return (
    <div className='container'>
      <Logotipas />
      <NavBar />
      <Hero />
      <About />
      <Content />
    </div>
  );
}

export default App;
