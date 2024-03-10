import { RenderPost } from "@/components/RenderPost";

interface propsPostPage {
  params: {
    materias: string;
    post: string;
  };
}

export default function Page({ params }: propsPostPage) {
  return <RenderPost materias={params.materias} post={params.post} />;
}
