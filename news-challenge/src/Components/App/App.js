import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from '../Homepage/Homepage';
import DetailsPage from '../DetailsPage/DetailsPage';
import { useState, useEffect} from 'react';
import { articles } from '../../mockdata';
import { getTopHeadlines } from '../../apiCalls';

function App() {
  const [selectedCategory, setCategory] = useState('all headlines')
  const [allArticles, setAllArticles] = useState([]);
    const fetchData = () => {
    getTopHeadlines(selectedCategory)
      .then((data) => {
        console.log("data", data)
        setAllArticles(data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage allArticles={allArticles} setCategory={setCategory} selectedCategory={selectedCategory} />} />
        <Route path='/:title' element={<DetailsPage allArticles={allArticles}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
