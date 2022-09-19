import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';


function App() {

const [state, setState] = useState('home');

const onClick = e => {
  setState(e.target.id);
}

  return (
    <div className="App">
      <div className="nav">
        <button onClick={onClick} className="nav-item" id='home'>Home</button>
        <p></p>
        <button onClick={onClick} className="nav-item" id='problem'>What the problem is</button>
        <button onClick={onClick} className="nav-item" id='help'>How you can help</button>
        <button onClick={onClick} className="nav-item" id='about'>About Us</button>
      </div>
      <div className='body'>
        {state==='home' && (
          <Page1 className="content"/>
        )}
        {state==='problem' && (
          <Page2 className="content"/>
        )}
        {state==='help' && (
          <Page3 className="content"/>
        )}
        {state==='about' && (
          <Page4 className="content"/>
        )}
      </div>
      <div className='footer'>
        <p>Hello There, this is a footer!</p>
      </div>
    </div>
  );
}

export default App;
