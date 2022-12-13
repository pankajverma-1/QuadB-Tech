import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import Summery from './Summery';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/:_id" element={<Summery />} />
    </Routes>
  );
}

export default App;
