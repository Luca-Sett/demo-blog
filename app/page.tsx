import ArticleCard from "../components/articleCard";
import { Article } from "../types/articles";
import { StrapiJSON } from "../types/strapi";

const getArticles = async () => {
  const res = await fetch("http://localhost:1337/api/articles");
  const articlesData: StrapiJSON<Article> = await res.json();
  return articlesData.data;
};

export default async function Page() {
  const articles = await getArticles();

  return (
    <>
      <h2 className="text-3xl font-medium">Home</h2>
      <p className="text-lg">Welcome to my blog! Select an article below to read it.</p>

      <div className="py-10">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article.attributes}
          ></ArticleCard>
        ))}
      </div>
    </>
  );
}
