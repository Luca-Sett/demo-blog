import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import { useSanity } from "../../../lib/useSanity";
import { SanityArticle } from "../../../lib/articles";

export default async function ArticlePage({
  params: { articleSlug },
}: {
  params: { articleSlug: string };
}) {
  const article = await getArticle(articleSlug);

  return !article ? (
    <article>
      <h2 className="text-3xl font-medium">
        Sorry, we can't find this article.
      </h2>
      <p className="text-lg">
        Go back <Link href="/">home</Link>
      </p>
    </article>
  ) : (
    <article>
      <h2 className="text-3xl font-semibold">{article.title}</h2>
      <p className="text-lg">{article.summary}</p>
      <p className="uppercase font-bold text-zinc-400">By: {article.author}</p>

      <Image
        src={`https://picsum.photos/seed/${article.slug}/816/459`}
        alt="article image"
        width={816}
        height={459}
        priority
        className="rounded-lg my-8"
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
