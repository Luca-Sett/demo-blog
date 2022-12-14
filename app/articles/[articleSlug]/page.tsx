import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import { useSanity } from "../../../lib/useSanity";
import { SanityArticle } from "../../../lib/articles";

export default async function ArticlePage({
  params,
}: {
  params: { articleSlug: string };
}) {
  const article = await getArticle(params.articleSlug);

  return !article ? (
    <article>
      <div className="border-2 border-black rounded-lg shadow-brutal p-5 bg-neo">
        <h2 className="text-3xl font-bold">
          Sorry, we can't find this article.
        </h2>
      </div>

      <div className="flex justify-center pt-8">
        <Link
          href="/"
          className="font-bold text-lg bg-neo3 hover:bg-neo2 transition-colors px-3 py-2 rounded-lg border-2 border-black shadow-brutal"
        >
          Go Back Home
        </Link>
      </div>
    </article>
  ) : (
    <article>
      <div className="border-2 border-black rounded-lg shadow-brutal p-5 bg-neo">
        <h2 className="text-3xl font-bold">{article.title}</h2>
        <p className="text-lg py-2">{article.summary}</p>
        <p>By {article.author}</p>
      </div>

      <Image
        src={`https://picsum.photos/seed/${article.slug}/816/459`}
        alt="article image"
        width={816}
        height={459}
        priority
        className="rounded-md border-2 border-black my-8"
      />

      <div className="max-w-none prose prose-zinc">
        <PortableText value={article.body} />
      </div>
    </article>
  );
}

export const revalidate = 600;

const sanity = useSanity();
async function getArticle(articleSlug: string) {
  const article = await sanity.fetch<SanityArticle>(
    `*[_type == "article" && slug.current == $slug]{_createdAt, title, "slug": slug.current, "author": author->name, summary, body}[0]`,
    { slug: articleSlug }
  );

  return article;
}

export async function generateStaticParams() {
  const articles: { slug: string }[] = await sanity.fetch(
    `*[_type == "article"]{"slug": slug.current}`
  );

  return articles.map((article) => ({ articleSlug: article.slug }));
}
