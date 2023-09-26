import './App.css';
import clickCounterLogo from './images/click-counter-logo.png'

function App() {
  return (
    <div className='App'>
      <div className='click-counter-container-logo'>
        <img className='click-counter-logo' src={clickCounterLogo} alt='Click Counter Logo' />
      </div>
    </div>
  );
}

export default App;
