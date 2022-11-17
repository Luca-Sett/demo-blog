import ArticleCard from "./articleCard";
import { SanityArticle } from "../lib/articles";
import { useSanity } from "../lib/useSanity";

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <>
      <h2 className="text-3xl font-medium">Home</h2>

      <p className="text-lg">
        Welcome to my blog! Select an article below to read it.
      </p>

      <div className="py-10">
        {!articles ? (
          <div>
            We ran into an error fetching the articles. Try refreshing the page.
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export const revalidate = 600;

const sanity = useSanity();
async function getArticles() {
  return await sanity.fetch<SanityArticle[]>(
    `*[_type == "article"]{_createdAt, title, "slug": slug.current, "author": author->name, summary, body} | order(_createdAt asc)`
  );
}
