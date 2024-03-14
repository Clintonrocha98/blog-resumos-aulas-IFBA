"use server";
import Link from "next/link";
import { getAllPostsByMateria } from "../../../scripts/blog/getAllPosts";

interface prop {
  materia: string;
}

export const RenderPostsLinks = ({ materia }: prop) => {
  const posts = getAllPostsByMateria(materia);
  return (
    <>
      {posts.map((post) => (
        <div
          className="max-w-full rounded overflow-hidden shadow-lg border p-4 border-gray-300 hover:border-green-500 transition duration-300 ease-in-out"
          key={post.metadata.slug}
        >
          <Link href={`${materia}/${post.metadata.slug}`}>
            <h2>{post.metadata.title}</h2>
            <p>{post.metadata.date}</p>
            <p>{post.metadata.excerpt}</p>
          </Link>
        </div>
      ))}
    </>
  );
};
