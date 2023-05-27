import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Add from './components/Add';
import Tabless from './components/Tabless';


function App() {
  return (
   
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Tabless />} />
        <Route path='/add' element={<Add />} />
      </Routes>

    </div>
  );
}

export default App;