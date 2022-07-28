import React from "react";
import bgProjetos from "../assets/bgProjetos.jpg";

// Por enquanto colocar projetos pessoais

function Portfolio() {
  const porfolios = [
    {
      id: 1,
      bg: bgProjetos,
      title: "Projeto Crud Ant-D",
      src: "https://proj-crud-antd.vercel.app",
    },
    {
      id: 2,
      bg: bgProjetos,
      title: "Teste de paginação",
      src: "https://create-pagination.vercel.app",
    },
    {
      id: 3,
      bg: bgProjetos,
      title: "Estudo de Api",
      src: "https://api-cidade-e-estado.vercel.app",
    },
    {
      id: 4,
      bg: bgProjetos,
      title: "jogo da velha TS",
      src: "https://proj-jogo-da-velha.vercel.app",
    },
    {
      id: 5,
      bg: bgProjetos,
      title: "Cadastro de desenvolvedor",
      src: "https://boisterous-pika-5d3141.netlify.app",
    },
    {
      id: 6,
      bg: bgProjetos,
      title: "Fácil consulta",
      src: "https://github.com/JairDhyego/Facil-Consulta_Entrevista",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-8">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grind-cols-3 gap-8 px-12 sm:px-0">
          {porfolios.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={item.bg}
                style={{ width: "120px" }}
                alt={item.title}
                className="rounded-md duration-200 hover:scale-105"
              />
              <span className="py-2">{item.title}</span>
              <div className=" flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={item.src} target="_blank">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
