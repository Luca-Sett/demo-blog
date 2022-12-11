import Image from "next/image";
import Link from "next/link";
import { SanityArticle } from "../lib/articles";

export default function ArticleCard({
  article,
  priority,
}: {
  article: SanityArticle;
  priority: boolean;
}) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="flex flex-col rounded-lg border-2 border-black shadow-brutal overflow-hidden p-5 hover:bg-neo2 transition-colors"
    >
      <Image
        src={`https://picsum.photos/seed/${article.slug}/624/351`}
        alt="article image"
        width={624}
        height={351}
        priority={priority}
        className="rounded-md border-2 border-black"
      />

      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="font-bold text-xl pt-4">{article.title}</div>
          <div className="py-3">{article.summary}</div>
        </div>

        <div className="flex justify-between">
          <div>{article.author}</div>
          <div>{new Date(article._createdAt).toLocaleDateString()}</div>
        </div>
      </div>
    </Link>
  );
}
