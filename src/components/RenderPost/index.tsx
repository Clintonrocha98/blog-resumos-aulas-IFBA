import parse from "html-react-parser";
import { getAllPostsByMateria } from "../../../scripts/blog/getAllPosts";
interface renderPostProp {
  materias: string;
  post: string;
}

export const RenderPost = ({ materias, post }: renderPostProp) => {
  const thePost = getAllPostsByMateria(materias).find(
    (p) => p.metadata.slug === post
  );

  if (!thePost) return;

  // eslint-disable-next-line react/no-children-prop
  return (
    <section className="max-w-sm md:max-w-3xl lg:max-w-5xl sm:px-7 ml-auto mr-auto flex flex-col gap-5 mb-6 ">
      {parse(thePost.content)}
    </section>
  );
};
