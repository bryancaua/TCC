import React from 'react';
import LogoHotDog from '../../assets/logo.svg';

export default function Pagprincipal() {
  return (
    <main className="flex justify-center bg-bege flex-col md:flex-row items-center h-screen p-8">
      {/* Imagem centralizada à esquerda */}
      <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
        <img 
          src={LogoHotDog} 
          alt="um cachorrinho dentro de uma casinha" 
          className="w-full h-auto max-w-xs md:max-w-sm" 
        />
      </div>

      {/* Textos e botões à direita da imagem com margem adicional */}
      <div className="flex flex-col justify-center items-center md:items-start md:ml-[100px]">
        <div className="mb-14 text-center md:text-left">
          <h1 className="font-sans font-bold text-black mb-4" style={{ fontSize: '45px' }}>
            HOT DOG
          </h1>
          <h2 className="font-sans font-semibold text-black" style={{ fontSize: '25px' }}>
            O sonho de todo animal
          </h2>
        </div>

        {/* Separando os botões dos textos */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <button className="font-sans2 bg-black text-white rounded-md px-10 py-4 text-lg">
            Introdução
          </button>
          <button className="font-sans2 bg-black text-white rounded-md px-10 py-4 text-lg">
            Sobre nós
          </button>
        </div>
      </div>
    </main>
  );
}
