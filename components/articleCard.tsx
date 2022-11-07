// export interface Article {
//   title: string;
//   description: string;
//   content: string;
//   createdAt: string;
//   updatedAt: string;
//   publishedAt: string;
// }

import { Article } from "../types/articles";

export default function ArticleCard({
  article: { title, description },
}: {
  article: Article;
}) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
}
