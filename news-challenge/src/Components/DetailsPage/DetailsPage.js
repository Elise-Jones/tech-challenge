import { useParams } from "react-router";

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
      {/* <article className="article-card">
        <img src={image}></img>
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{content}</p>

      </article> */}
      <p>hello</p>
      <p>{article.title}</p>
      <p>{article.description}</p>
    </div>
  );
};

export default DetailsPage;
