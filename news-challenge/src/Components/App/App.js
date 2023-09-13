import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from '../Homepage/Homepage';
import DetailsPage from '../DetailsPage/DetailsPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/:title' element={<DetailsPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
