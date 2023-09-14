import React from "react";
import DropDown from "../DropDown/DropDown";
import "./Homepage.css";
import { NavLink } from "react-router-dom";
import ArticleCard from "../ArticleCard/ArticleCard";

const Homepage = ({ allArticles, selectedCategory, setCategory }) => {

  const articleCards = allArticles.map((article) => {
    return (
      <NavLink to={`/${article.id}`} key={article.id}>
        <ArticleCard
          title={article.title}
          description={article.description}
          image={article.urlToImage}
          date={article.publishedAt}
          content={article.content}
          id={article.id}
        />
      </NavLink>
    );
  });

  return (
    <div className="homepage-container">
      <DropDown setCategory={setCategory} selectedCategory={selectedCategory} />
      <main className="articles-container">{articleCards}</main>
    </div>
  );
};

export default Homepage;
