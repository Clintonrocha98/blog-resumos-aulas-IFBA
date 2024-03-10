"use server";
import Link from "next/link";
import { getAllPostsByMateria } from "../../../scripts/blog/getAllPosts";

interface prop {
  materia: string;
}

export const RenderPostsLinks = ({ materia }: prop) => {
  const posts = getAllPostsByMateria(materia);

  return (
    <nav>
      <ul className="flex flex-col gap-2 underline">
        {posts.map((post) => (
          <li key={post.metadata.slug}>
            <Link href={`${materia}/${post.metadata.slug}`}>
              {post.metadata.slug}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
