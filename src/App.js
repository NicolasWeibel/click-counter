import './App.css';
import Button from './components/Button';
import clickCounterLogo from './images/click-counter-logo.png'

function App() {
  return (
    <div className='App'>
      <div className='click-counter-container-logo'>
        <img className='click-counter-logo' src={clickCounterLogo} alt='Click Counter Logo' />
      </div>
      <div className='main-container'>
        <Button text='Click' isClickButton={true} handleClick={} />
        <Button text='Reset' isClickButton={false} handleClick={} />
      </div>
    </div>
  );
}

export default App;
