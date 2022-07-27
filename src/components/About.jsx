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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          eveniet dolorum iste obcaecati? Doloremque autem officiis repellendus
          mollitia sapiente est!
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          libero magnam magni ipsum, deserunt atque tempora deleniti sint
          quaerat dolorum assumenda voluptatibus est vero ullam recusandae
          culpa. Officiis corporis dolorum possimus, quisquam debitis quo
          eligendi delectus deserunt fugiat rerum doloremque enim ex mollitia
          quam nostrum laudantium amet vitae iste. Pariatur.
        </p>
      </div>
    </div>
  );
}

export default About;
