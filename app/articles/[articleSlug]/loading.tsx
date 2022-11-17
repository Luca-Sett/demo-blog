export default async function ArticleLoadingPage() {
  return (
    <>
      <style>{`body {max-height: 100vh; overflow: hidden}`}</style>
      <article className="animate-pulse">
        <div className="flex text-3xl h-9 py-[3px]">
          <div className="rounded w-full max-w-[200px] h-full bg-zinc-200"></div>
        </div>

        <div className="flex text-lg h-7 py-[5px]">
          <div className="rounded w-full max-w-[375px] h-full bg-zinc-200"></div>
        </div>

        <div className="my-6 rounded-lg bg-zinc-200 aspect-video"></div>

        <div className="rounded-lg bg-zinc-200 h-screen"></div>
      </article>
    </>
  );
}
