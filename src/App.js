import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import clickCounterLogo from './images/click-counter-logo.png'
import { useState } from 'react';

function App() {

  const [clicksNumber, setClicksNumber] = useState(0);

  const addCounter = () => {
    setClicksNumber(clicksNumber + 1);
  };

  const resetCounter = () => {
    setClicksNumber(0)
  };


  return (
    <div className='App'>
      <div className='click-counter-container-logo'>
        <img className='click-counter-logo' src={clickCounterLogo} alt='Click Counter Logo' />
      </div>
      <div className='main-container'>
        <Counter clicksNumber={clicksNumber} />
        <Button text='Click' isClickButton={true} handleClick={addCounter} />
        <Button text='Reset' isClickButton={false} handleClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
