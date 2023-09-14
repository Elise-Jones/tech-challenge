import React from 'react'
import './ArticleCard.css'

const ArticleCard = ( props ) => {
  console.log(props)
  const { title, description, image, date } = props
  return (
    <article className='article-card'>
      <img src={image}></img>
      <p>Date Published: {date}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}

export default ArticleCard