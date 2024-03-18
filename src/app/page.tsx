export default function Home() {
  return (
    <section className="max-w-sm md:max-w-3xl lg:max-w-5xl px-7 ml-auto mr-auto flex flex-col gap-5 mt-4 ">
      <header>
        <h1>Bem-vindo ao Blog de resumos das aulas que vão ter no ifba</h1>
        <p>Olá, estudantes!</p>
        <p>
          Este é um espaço dedicado a compartilhar resumos de aulas, temas
          relevantes e links úteis para auxiliar nos estudos universitários.
          Aqui, busco facilitar o acesso ao conhecimento e promover a
          colaboração entre os alunos.
        </p>
      </header>
      <section>
        <h2>Resumos de Aulas</h2>
        <p>
          Encontre resumos detalhados das aulas ministradas na faculdade. Esses
          resumos são elaborados para ajudar você a revisar o material de forma
          rápida e eficaz.
        </p>
      </section>
      <section>
        <h2>Temas relevantes</h2>
        <p>
          Além dos resumos de aulas, abordamos diversos temas relevantes
          relacionados aos cursos oferecidos pela faculdade. Esses conteúdos
          extras visam expandir seu entendimento sobre os assuntos estudados.
        </p>
      </section>
      <section>
        <h2>Links úteis</h2>
        <p>
          Navegue por uma seleção de links úteis que complementam os conteúdos
          apresentados. Aqui, você encontrará recursos adicionais, artigos
          acadêmicos, vídeos educativos e muito mais.
        </p>
      </section>
      <footer className="flex flex-col gap-5 mb-6">
        <h2>Sobre o autor</h2>
        <p>
          Meu nome é{" "}
          <a
            href="https://twitter.com/clintonrocha98"
            target="_blank"
            className="text-blue-700 underline font-bold"
          >
            Clinton Rocha
          </a>{" "}
          e sou estudante do IFBA. Este blog foi criado com o objetivo de
          compartilhar conhecimento e ajudar meus colegas de classe a alcançarem
          sucesso acadêmico.
        </p>
        <p>
          Sinta-se à vontade para explorar os diferentes tópicos abordados e
          contribuir com seus próprios resumos e sugestões de conteúdo. Juntos,
          podemos construir uma comunidade de aprendizado próspera e
          colaborativa!
        </p>
        <p>
          Não hesite em entrar em contato caso tenha alguma dúvida, sugestão ou
          feedback.
        </p>
        <p>Divirta-se estudando!</p>
      </footer>
    </section>
  );
}
