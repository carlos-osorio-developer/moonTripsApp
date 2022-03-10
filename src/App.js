import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Rockets from './components/pages/rockets';
import Missions from './components/pages/missions';
import Profile from './components/pages/profile';
import style from './App.module.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className={style.container}>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
