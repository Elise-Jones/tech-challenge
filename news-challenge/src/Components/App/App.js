import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from '../Homepage/Homepage';
import DetailsPage from '../DetailsPage/DetailsPage';
import Navbar from '../Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/details' element={<DetailsPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
