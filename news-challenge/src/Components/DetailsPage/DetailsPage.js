import { useParams } from "react-router";


const DetailsPage = ({allArticles}) => {
 
  const { title } = useParams()
  
  console.log("Title Parameter:", title);
  console.log(title)
  const article = allArticles.find((article) => {
    console.log("Article Title:", article.title);
    return article.title === title;
  });
  
  if(!article){
    console.log("Article not found:", title);
    return <div>Article not found</div>
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
