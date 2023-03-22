"use client";

import Image from "next/image";
import { Article } from "./types";

export default function NewsArticle({
  author,
  content,
  description,
  publishedAt,
  source,
  title,
  url,
  urlToImage,
}: Article) {
  return (
    <div className="flex flex-col cursor-pointer">
      <div className="relative w-full h-80">
        {urlToImage ? (
          <Image
            className="object-cover rounded-md"
            src={urlToImage || ""}
            alt={description || source.name}
            blurDataURL=""
            fill
          />
        ) : (
          <div className="flex w-full h-80 bg-slate-500 rounded-md" />
        )}
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-slate-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50 rounded-md" />
      </div>
      <div className="mt-4 flex-1 px-8">
        <p className="hover:underline text-lg font-bold line-clamp-1 text-slate-800">
          {title}
        </p>
        <p className="mt-2 text-gray-500 line-clamp-2">{description}</p>
        <div className="flex font-bold mt-2 justify-between text-sm text-gray-700">
          <span>{author}</span>
          <span>
            {new Date(publishedAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
