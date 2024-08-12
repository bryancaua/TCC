import React from 'react';
import { Link } from 'react-router-dom';
import LogoHotDog from '../../assets/logo.svg';
import Arthur from '../../assets/arthur.svg';
import Bryan from '../../assets/bryan.svg';
import Melissa from '../../assets/melissa.svg';

export default function SobreNos () {
    return (
        <main className="bg-bege h-screen">
        <div>
          <header className="bg-bege-madeira flex flex-col md:flex-row items-center justify-between p-4">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src={LogoHotDog} 
                alt="um cachorrinho dentro de uma casinha" 
                className="w-16 mt-[-16px]" 
              />
              <span className="text-4xl text-marrom-claro mx-2">|</span>
              <h1 className="text-3xl text-marrom-claro font-sans font-bold">HotDog</h1>
            </div>
            <nav className="ml-4 md:ml-0 mr-32">
              <ul className="flex space-x-6 md:space-x-12 text-marrom-claro">
                <li><Link to="/Introducao" className="hover:opacity-75 text-marrom font-sans2 font-bold">Introdução</Link></li>
                <li><Link to="/sobre-nos" className="hover:opacity-75 text-marrom font-sans2 font-bold">Sobre nós</Link></li>
                <li><Link to="/sobre-o-projeto" className="hover:opacity-75 text-marrom font-sans2 font-bold">Sobre o projeto</Link></li>
                <li><Link to="/materiais" className="hover:opacity-75 text-marrom font-sans2 font-bold">Materiais</Link></li>
              </ul>
            </nav>
          </header>
          
          <div className="flex flex-col items-center mt-16 px-4">
            <h1 className="font-sans font-bold text-6xl text-marrom-claro mb-4 md:mb-0 
            md:text-6xl text-4xl md:mr-[62%] mr-[15%]">
            Sobre nós
            </h1>

            <h2 className="font-sans font-medium text-lg text-black max-w-2xl text-center md:text-left mt-4 md:mt-10 md:mr-[42%] mr-[15%] ">
            Somos três alunos do Ensino Médio, estamos no 3º ano do colegial, e no momento estamos cursando T.I integrado ao Ensino Médio básico.
            </h2>

            <div className="flex flex-wrap justify-center mt-8 gap-32">
              <div className="flex flex-col items-center mx-4">
                <img src={Arthur} alt='Foto do Arthur' className="w-32 md:w-48 object-cover"/>
                <h3 className="font-sans font-bold text-xl mt-10 text-center">Arthur Pereira</h3>
                <p className="font-sans text-center text-lg mt-2 max-w-[360px]">
                  Sou o Arthur, tenho 17 anos, gosto de sair com amigos, praticar esportes, participar de eventos sociais, explorar hobbies e estudar sobre investimentos!
                </p>
              </div>
              <div className="flex flex-col items-center mx-4">
                <img src={Bryan} alt='Foto do Bryan' className="w-32 md:w-48 object-cover"/>
                <h3 className="font-sans font-bold text-xl mt-8 text-center">Bryan</h3>
                <p className="font-sans text-center text-lg mt-2 max-w-[360px]">
                  Sou o Bryan, tenho 17 anos, gosto de sair com os amigos, jogar futebol, jogar jogos de internet, conhecer pessoas, estudar programação e fazer academia!
                </p>
              </div>
              <div className="flex flex-col items-center mx-4">
                <img src={Melissa} alt='Foto da Melissa' className="w-36 md:w-52 object-cover"/>
                <h3 className="font-sans font-bold text-xl mt-8 text-center">Melissa</h3>
                <p className="font-sans text-center text-lg mt-2 max-w-[360px]">
                  Sou a Melissa, tenho 17 anos, adoro praticar esportes, adoro sair com meus amigos, sou uma pessoa extremamente extrovertida, gosto muito de ir à shows, e adoro conhecer pessoas novas!
                </p>
              </div>
            </div>

          </div>

        </div>
        
        </main>
    )
}
