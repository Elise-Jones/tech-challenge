import React from 'react'
import DropDown from '../DropDown/DropDown'
import { useState, useEffect } from 'react'
import { getTopHeadlines } from '../../apiCalls'
import { articles } from '../../mockdata'
import './Homepage.css'
import { NavLink } from 'react-router-dom'
import ArticleCard from '../ArticleCard/ArticleCard'

const Homepage = () => {
  const [selectedCategory, setCategory] = useState('all headlines')
  const [allArticles, setAllArticles] = useState(articles)
  
  const articleCards = articles.map((article) => {
    return (
      <NavLink to={`${article.title}`} key={article.title}>
        <ArticleCard
          title={article.title}
          description={article.description}
          image={article.urlToImage}
          date={article.publishedAt}
         />
      </NavLink>
    )

  })
  // const fetchData = () => {
  //   getTopHeadlines(selectedCategory)
  //     .then((data) => {
  //       console.log(data.articles);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [selectedCategory]);



  return (
    
      <>
      <DropDown setCategory={setCategory} selectedCategory={selectedCategory}/>
      <main className='articles-container'>
        {articleCards}
      </main>
      </>

  )
}

export default Homepage