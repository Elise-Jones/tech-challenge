import { useParams } from "react-router";
import './DeatilsPage.css'
import { Link } from "react-router-dom";

const DetailsPage = ({ allArticles }) => {
  const { id } = useParams();

  const article = allArticles.find((article) => {
    return article.id === id;
  });

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="details-container">
      <Link to ="/">
        <button>Back to News </button>
      </Link>
    <article className='article-card'>
      <img src={article.urlToImage}></img>
      <p className="source"> Source: {article.source.name}</p>
      <p>Date Published: {article.publishedAt}</p>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </article>
    </div>
  
  );
};

export default DetailsPage;
