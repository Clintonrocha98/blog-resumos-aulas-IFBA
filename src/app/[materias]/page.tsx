import { RenderPostsLinks } from "@/components/RenderPostsLinks";

interface propsPage {
  params: {
    materias: string;
  };
}

export default function Page({ params }: propsPage) {
  const { materias } = params;

  return (
    <section className="max-w-sm md:max-w-3xl lg:max-w-5xl px-7 mb-5 ml-auto mr-auto">
      <RenderPostsLinks materia={materias} />
    </section>
  );
}
