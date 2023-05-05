import './App.css';
import LoginScreen from "./Components/LoginScreen.js";
import HomeScreen from './Components/HomeScreen.js';
import { Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginScreen />
      </header>
    </div>
  );
}

export default App;
