import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">About</p>
        </div>
        <p className="text-xl mt-20">
          Meu nome é Jair Dhyego, sou do Rio Grande do Norte e estudo
          programação desde o final de 2021, estou desenvolvendo e me
          aperfeiçoando nas tecnologias de JavaScript, TypeScript com o
          framewoork React.
        </p>

        <br />

        <p className="text-xl">
          Estou dando meus primeiros passos mas já fiz alguns projetos
          profissionais usando, pixel perfect, styled components e requisições
          api.
        </p>
      </div>
    </div>
  );
}

export default About;
