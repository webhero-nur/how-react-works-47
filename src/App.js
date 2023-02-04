import './App.css';
import Device from './components/Device/Device';
import Tablet from './components/Tablet/Tablet';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name="uPhone" price="15000"></Device>
      <Watch></Watch>
      <Tablet></Tablet>
    </div>
  );
}

export default App;
