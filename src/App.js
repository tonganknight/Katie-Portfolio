import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Renderlive from './components/Renderlive';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className=" bigbox container">
  <div className="row"> 
      <Renderlive/>
    </div>
</div>
  );
}

export default App;
