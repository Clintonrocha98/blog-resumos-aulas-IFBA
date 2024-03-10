import { RenderMateriasLinks } from "@/components/RenderMateriasLinks";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resumos de materias no IFBA",
  description:
    "Esse blog tem o intuito de exibir resumos e materiais para estudo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <RenderMateriasLinks />
        {children}
        <footer className="max-w-5xl ml-auto mr-auto flex items-center justify-center h-10 border-t-2 border-gray-200">
          <p className="flex justify-center text-center">
            Feito de aluno para aluno by: {"  "}
            <a
              href="https://twitter.com/clintonrocha98"
              target="_blank"
              className="text-blue-700 underline font-bold flex items-center"
            >
              Clinton Rocha
            </a>{" "}
            🤓
          </p>
        </footer>
      </body>
    </html>
  );
}
