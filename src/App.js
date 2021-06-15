import './App.css';
import Renderlive from './components/Renderlive';
import {BreakpointProvider} from 'react-socks'


function App() {
  return (
    <BreakpointProvider>
 
      <Renderlive/>

</BreakpointProvider>
  );
}

export default App;
