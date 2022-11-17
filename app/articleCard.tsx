import Image from "next/image";
import Link from "next/link";
import { SanityArticle } from "../lib/articles";

export default function ArticleCard({ article }: { article: SanityArticle }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group grid rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 transform-gpu"
    >
      <Image
        src={`https://picsum.photos/seed/${article.slug}/624/351`}
        alt="article image"
        width={624}
        height={351}
        className="relative z-0 w-full aspect-video row-start-1 col-start-1 group-hover:scale-110 transition-transform duration-500 transform-gpu"
      />

      <div className="relative z-10 row-start-1 col-start-1 from-transparent to-black/90 bg-gradient-to-b text-zinc-50 flex flex-col justify-end p-4 translate-y-9 group-hover:translate-y-0 transition-transform duration-500">
        <div className="line-clamp-1 text-xl font-semibold">
          {article.title}
        </div>

        <div className="line-clamp-2">{article.summary}</div>

        <div className="uppercase font-semibold text-zinc-300 flex justify-between mt-2">
          <div>By: {article.author}</div>
          <div>{new Date(article._createdAt).toDateString()}</div>
        </div>
      </div>
    </Link>
  );
}
