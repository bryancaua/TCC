import React from 'react';
import { Link } from 'react-router-dom';
import LogoHotDog from '../../assets/logo.svg';
import Cachorro from '../../assets/cachorro.svg'

export default function Introducao() {
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
              <li><Link to="/" className="hover:opacity-75 text-marrom font-sans2 font-bold">Introdução</Link></li>
              <li><Link to="/sobre-nos" className="hover:opacity-75 text-marrom font-sans2 font-bold">Sobre nós</Link></li>
              <li><Link to="/sobre-o-projeto" className="hover:opacity-75 text-marrom font-sans2 font-bold">Sobre o projeto</Link></li>
              <li><Link to="/materiais" className="hover:opacity-75 text-marrom font-sans2 font-bold">Materiais</Link></li>
            </ul>
          </nav>
        </header>

      </div>

        <div className="flex flex-col items-center mt-16 px-4">
          <h1 className="font-sans font-bold text-6xl text-marrom-claro mb-4 md:mb-0 
            md:text-6xl text-4xl md:mr-[60%] mr-[15%]">
            Introdução
          </h1>

          <h2 className="font-sans font-medium text-lg text-black max-w-2xl text-center md:text-left mt-4 md:mt-10 md:mr-[42%] mr-[15%] ">
            A utilização de tecnologias como o Arduíno possibilita a criação de soluções inovadoras e personalizadas para atender às necessidades específicas dos animais de estimação. Neste projeto, o Arduíno será empregado para monitorar a temperatura interna da casinha e acionar um sistema de aquecimento quando necessário, garantindo um ambiente térmico adequado em diferentes condições climáticas.
            <br/><br/>
            Além disso, a casinha de cachorro com aquecedor baseada em Arduíno não apenas visa fornecer conforto térmico aos animais, mas também busca promover a eficiência energética e a sustentabilidade. A automação do sistema de aquecimento permite um controle preciso da energia consumida, reduzindo desperdícios e impactos ambientais.
            <br/><br/>
            Ao longo deste trabalho, serão abordados os fundamentos teóricos relacionados ao bem-estar animal, sistemas de aquecimento e controle por Arduíno, bem como o processo de concepção, desenvolvimento e teste da casinha de cachorro. Espera-se que este projeto contribua não apenas para o avanço da tecnologia aplicada ao cuidado com animais de estimação, mas também para a conscientização sobre a importância do conforto térmico na vida dos nossos amigos peludos.
          </h2>
        </div>

        <img 
          src={Cachorro} 
          alt="Imagem de um cachorro" 
          className="absolute right-96 bottom-56 max-w-xs md:max-w-sm lg:max-w-md"
        />
          
    </main>
  );
}

