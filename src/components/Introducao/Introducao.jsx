import React from 'react';
import { Link } from 'react-router-dom';
import LogoHotDog from '../../assets/logo.svg';

export default function Introducao() {
  return (
    <main className="bg-bege h-screen">
      <div>
        <header className="bg-bege-madeira flex flex-col md:flex-row items-center justify-between p-4">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src={LogoHotDog} 
              alt="um cachorrinho dentro de uma casinha" 
              className="w-16" 
            />
            <span className="text-2xl text-marrom-claro mx-2">|</span>
            <h1 className="text-2xl text-marrom-claro font-sans font-bold">HotDog</h1>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center space-x-2 md:space-x-4 text-marrom-claro">
              <li><Link to="/" className="hover:opacity-75 hover:scale-105 transition text-marrom">Introdução</Link></li>
              <li><Link to="/sobre-nos" className="hover:opacity-75 hover:scale-105 transition text-marrom">Sobre nós</Link></li>
              <li><Link to="/sobre-o-projeto" className="hover:opacity-75 hover:scale-105 transition text-marrom">Sobre o projeto</Link></li>
              <li><Link to="/materiais" className="hover:opacity-75 hover:scale-105 transition text-marrom">Materiais</Link></li>
            </ul>
          </nav>
        </header>
      </div>


      <h1 className='font-sans font-bold text-5xl'>
        Introdução
      </h1>
    </main>
  );
}

