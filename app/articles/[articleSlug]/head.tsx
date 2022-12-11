import { useSanity } from "../../../lib/useSanity";

export default async function Head({
  params: { articleSlug },
}: {
  params: { articleSlug: string };
}) {
  const article = await getArticle(articleSlug);

  return (
    <>
      <title>{`${article.title} - Next 13 Blog`}</title>
      <meta name="description" content={article.summary} />
    </>
  );
}

const sanity = useSanity();
async function getArticle(articleSlug: string) {
  const article = await sanity.fetch<{ title: string; summary: string }>(
    `*[_type == "article" && slug.current == $slug]{title, summary}[0]`,
    { slug: articleSlug }
  );

  return article;
}
