import React from "react";
//?: flex-> torna o container flexível
//?: flex-col-> torna o container flexível em coluna
//?: flex-grow-> faz com que o container cresça e ocupe o espaço restante
//?: container-> define o container com o tamanho máximo de 100% da tela
//?: min-h-screen-> define a altura mínima da tela seja a altura da tela
//?: mx-auto-> aplica margens automáticas no eixo X (esquerda e direita), centralizando o elemento horizontalmente se ele tiver um width definido
//?: px-4-> aplica padding de 1rem (16px) no eixo X (esquerda e direita)
//?: sm:px-8-> aplica padding de 2rem (32px) no eixo X (esquerda e direita) em telas pequenas (a partir de 640px)
//?: pt-16-> aplica padding superior(top) de 4rem (64px) no eixo Y (topo)
const ColumnLayout = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 p-4">
      <div className="col-span-1 lg:col-span-2 bg-red-300 p-4">Coluna 1</div>
      <div className="col-span-1 bg-green-300 p-4">Coluna 2</div>
      <div className="col-span-1 lg:col-span-3 bg-blue-300 p-4 h-32">
        Coluna 3
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 p-4">
      <div className="bg-red-300 p-4">Coluna 1</div>
      <div className="bg-green-300 p-4">Coluna 2</div>
      <div className="bg-blue-300 p-4">Coluna 3</div>
      <div className="bg-yellow-300 p-4">Coluna 4</div>
      <div className="bg-purple-300 p-4">Coluna 5</div>
      <div className="bg-pink-300 p-4">Coluna 6</div>
    </div>
  );
  
};

const LayoutViewer = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white p-4">Header</header>
      <main className="p-4">
        <h1 className="bg-gray-300 text-2xl font-bold mb-4">
          Visualização das Colunas
        </h1>
        <ColumnLayout />
      </main>
      <footer className="bg-gray-800 text-white p-4">Footer</footer>
    </div>
  );
};

export default LayoutViewer;
