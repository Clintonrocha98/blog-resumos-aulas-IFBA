import fs from "fs";
import grayMatter from "gray-matter";
import { remark } from "remark";
import remarkHTML from "remark-html";

export const getAllPostsByMateria = (materia: string) => {
  const allPostsFileNames = fs.readdirSync(`public/posts/${materia}`);

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
        ...metadata,
        slug: filename.replace(".md", ""),
      },
      content: htmlContent,
    };
  });

  return posts;
};

export const getMateria = () => {
  const materias = fs.readdirSync("public/posts");

  return { materias };
};
