"use server";
import Link from "next/link";
import { getMateria } from "../../../scripts/blog/getAllPosts";

export const RenderMateriasLinks = () => {
  const { materias } = getMateria();

  return (
    <header className="max-w-5xl ml-auto mr-auto py-4 flex justify-center flex-wrap border-b-2 border-gray-200 mb-6">
      <nav className="flex items-center">
        <ul className="flex gap-4 flex-wrap justify-center">
          <li className="relative inline cursor-pointer text-base font-medium before:bg-green-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
            <Link href="/">Home</Link>
          </li>
          {materias.map((materia) => (
            <li
              key={materia}
              className="relative inline cursor-pointer text-base font-medium before:bg-green-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            >
              <Link href={`/${materia}`}>{materia}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
