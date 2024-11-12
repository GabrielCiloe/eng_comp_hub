import { FaRegCirclePlay } from "react-icons/fa6";
import heroModel from "/assets/model-hero-comp.webp";
import { useState } from "react";
import computacao1 from "/assets/computacao-1.webp";
import computacao2 from "/assets/computacao-2.webp";
import computacao3 from "/assets/computacao-3.webp";
import computacao4 from "/assets/computacao-4.webp";
import computacao5 from "/assets/computacao-5.webp";
import { RoboticaArea } from "./components/Areas/Robótica";
import { IntHumanArea } from "./components/Areas/IntHumanArea";

export default function App() {
  const [areaActive, setAreaActive] = useState<string | null>("Robótica");
  // const [openArea, setOpenArea] = useState<string | null>("Educação");

  function handleOpenArea(AreaUnit: string) {
    setAreaActive(AreaUnit);
  }

  const buttonStyle = (buttonName: string): string =>
    areaActive === buttonName
      ? "border-[#6E2C8E] border-2 bg-[#6E2C8E] hover:bg-[#6E2C8E]"
      : "border-white bg-transparent hover:bg-[#6d2c8e79]";

  // function A

  return (
    <>
      <header className="bg-purple-950/20 backdrop-blur-lg fixed px-14 py-5 flex flex-col items-center justify-between w-full border-b border-zinc-50">
        {/* <div className=" w-full">
          <div className="max-w-6xl mx-auto">
            <div className="flex gap-2">
              <button className="border-2 border-zinc-50 text-zinc-50 px-5 py-2 rounded-lg backdrop-blur-md">
                A+
              </button>
              <button className="border-2 border-zinc-50 text-zinc-50 px-5 py-2 rounded-lg backdrop-blur-md">
                A-
              </button>
            </div>
          </div>
        </div> */}
        <div className="max-w-6xl flex justify-between w-full mx-auto">
          <div>
            <h2 className="text-lg text-white font-[Inter] font-bold">LOGO</h2>
          </div>
          <nav className="flex gap-5 items-center">
            <a
              href="#"
              className="text-white font-[Inter] hover:scale-125 hover:transition-all"
            >
              Conheça
            </a>
            <a href="#" className="text-white font-[Inter]">
              Fotos
            </a>
            <a href="#" className="text-white font-[Inter]">
              Aprendizado
            </a>
            <a
              href="#"
              className="bg-purple-800 text-white font-[Inter] font-semibold px-5 py-2 rounded-lg"
            >
              Fazer parte
            </a>
          </nav>
        </div>
      </header>
      <section className="bg-herobg bg-cover bg-center">
        <div className="max-w-6xl mx-auto pt-28">
          <div className="flex">
            <div className="flex flex-col justify-center w-full">
              <h2 className="font-[Inter] text-7xl text-zinc-50 font-bold">
                Engenharia de Computação
              </h2>
              <p className="text-lg font-[Inter] text-zinc-50 my-4">
                Se insira dentro do mundo de Engenharia de Computação do UNASP
                Campus Engenheiro Coelho
              </p>
              <a
                href="#"
                className="text-zinc-50 font-[Inter] font-semibold border flex gap-2 w-fit mt-5 px-10 py-5 uppercase text-sm rounded-lg backdrop-blur-2xl"
              >
                <FaRegCirclePlay size={20} className="text-xl font-thin" />
                Conhecer mais
              </a>
            </div>
            <div className="w-full">
              <img src={heroModel} alt="Modelo Hero Eng. Comp HUB" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0C001F] py-10">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <h2 className="text-zinc-50 font-[Inter] text-6xl font-bold text-center">
            Escolha qual área você quer conhecer:
          </h2>

          <div className="flex gap-8 mx-auto">
            <button
              onClick={() => handleOpenArea("Robótica")}
              className={`bg-transparent border-2 border-[#6E2C8E] rounded-full px-10 py-4 text-zinc-50 font-[Inter] hover:bg-[#6E2C8E] transition-all ${buttonStyle(
                "Robótica"
              )}`}
            >
              Robótica
            </button>
            <button
              onClick={() => handleOpenArea("Interação Humano Computador")}
              className={`bg-transparent border-2 border-[#6E2C8E] rounded-full px-10 py-4 text-zinc-50 font-[Inter] hover:bg-[#6E2C8E] transition-all ${buttonStyle(
                "Interação Humano Computador"
              )}`}
            >
              Interação Humano Computador
            </button>
            <button
              onClick={() => handleOpenArea("Calculo")}
              className={`bg-transparent border-2 border-[#6E2C8E] rounded-full px-10 py-4 text-zinc-50 font-[Inter] hover:bg-[#6E2C8E] transition-all ${buttonStyle(
                "Calculo"
              )}`}
            >
              Calculo
            </button>
            <button
              onClick={() => handleOpenArea("Algoritimos")}
              className={`bg-transparent border-2 border-[#6E2C8E] rounded-full px-10 py-4 text-zinc-50 font-[Inter] hover:bg-[#6E2C8E] transition-all ${buttonStyle(
                "Algoritimos"
              )}`}
            >
              Algoritimos
            </button>
          </div>

          {areaActive === 'Robótica' && <RoboticaArea />}
          {areaActive === 'Interação Humano Computador' && <IntHumanArea />}
        </div>
      </section>

      <section className="bg-[#0C001F] py-10">
        <div className="max-w-6xl mx-auto flex flex-col gap-10 overflow-hidden">
          <h2 className="text-zinc-50 font-[Inter] text-6xl font-bold text-center">
            Fotos
          </h2>

          <div className="flex gap-8 mx-auto flex-nowrap overflow-scroll no-scrollbar">
            <img
              src={computacao1}
              alt="Aluna mexendo no multimetro"
              className="w-72 h-96 object-cover"
            />
            <img
              src={computacao2}
              alt="Aluna mexendo no multimetro"
              className="w-72 h-96 object-cover"
            />
            <img
              src={computacao3}
              alt="Aluna mexendo no multimetro"
              className="w-72 h-96 object-cover"
            />
            <img
              src={computacao4}
              alt="Aluna mexendo no multimetro"
              className="w-72 h-96 object-cover"
            />
            <img
              src={computacao5}
              alt="Aluna mexendo no multimetro"
              className="w-72 h-96 object-cover"
            />
          </div>
        </div>
      </section>
      
    </>
  );
}
