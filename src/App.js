import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Rockets from './components/pages/rockets';
import Missions from './components/pages/missions';
import Profile from './components/pages/profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
