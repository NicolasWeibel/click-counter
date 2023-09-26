import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import clickCounterLogo from './images/click-counter-logo.png'

function App() {

  const addCounter = () => {
    console.log('Add')
  }

  const resetCounter = () => {
    console.log('Reset')
  }


  return (
    <div className='App'>
      <div className='click-counter-container-logo'>
        <img className='click-counter-logo' src={clickCounterLogo} alt='Click Counter Logo' />
      </div>
      <div className='main-container'>
        <Counter clicksNumber={5} />
        <Button text='Click' isClickButton={true} handleClick={addCounter} />
        <Button text='Reset' isClickButton={false} handleClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
