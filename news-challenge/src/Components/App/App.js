import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from '../Homepage/Homepage';
import DetailsPage from '../DetailsPage/DetailsPage';
import { useState, useEffect} from 'react';
import { articles } from '../../mockdata';
import { getTopHeadlines } from '../../apiCalls';
import { cleanRemovedArticles } from '../../utils';

function App() {
  const [selectedCategory, setCategory] = useState('all headlines')
  const [allArticles, setAllArticles] = useState([]);
    const fetchData = () => {
    getTopHeadlines(selectedCategory)
      .then((data) => {
        const ma = cleanRemovedArticles(data.articles)
        console.log("ma", ma)
        setAllArticles(ma);
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
        <Route path='/:id' element={<DetailsPage allArticles={allArticles}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
