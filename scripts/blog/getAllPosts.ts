import fs from "fs";
import grayMatter from "gray-matter";
import path from "path";
import { remark } from "remark";
import remarkHTML from "remark-html";

const TakePath = (pathName: string = "") => {
  return path.join(process.cwd(), "public", "posts", pathName);
};

export const getAllPostsByMateria = (materia: string) => {
  const allPostsFileNames = fs.readdirSync(TakePath(materia));

  const posts = allPostsFileNames.map((filename: string) => {
    const fileContent = fs.readFileSync(
      `public/posts/${materia}/${filename}`,
      "utf-8"
    );
    const { content, data: metadata } = grayMatter(fileContent);
    const htmlContent = remark()
      .use(remarkHTML)
      .processSync(content)
      .toString();

    return {
      metadata: {
        title: metadata?.title,
        date: metadata?.date,
        excerpt: metadata?.excerpt,
        slug: filename.replace(".md", ""),
      },
      content: htmlContent,
    };
  });

  return posts;
};

export const getMateria = () => {
  const materias = fs.readdirSync(TakePath());

  return { materias };
};
