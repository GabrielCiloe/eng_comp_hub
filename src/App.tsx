import { FaRegCirclePlay } from "react-icons/fa6";
import heroModel from "/assets/model-hero-comp.webp";

export default function App() {
  return (
    <>
      <header className="bg-purple-950/20 backdrop-blur-lg fixed px-14 py-5 flex items-center justify-between w-full border-b border-zinc-50">
        <div className="max-w-6xl flex justify-between w-full mx-auto">
          <div>
            <h2 className="text-lg text-white font-[Inter] font-bold">LOGO</h2>
          </div>
          <nav className="flex gap-5 items-center">
            <a href="#" className="text-white font-[Inter] hover:scale-125 hover:transition-all">
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
              <p className="text-lg font-[Inter] text-zinc-50 my-4">Se insira dentro do mundo de Engenharia de Computação do UNASP Campus Engenheiro Coelho</p>
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
    </>
  );
}
