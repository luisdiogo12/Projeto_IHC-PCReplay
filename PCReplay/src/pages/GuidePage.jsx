import React from "react";
import MainLayout from "./LayoutPage";

const GuidePage = () => {
  return (
    <MainLayout>
      <div className="p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">
          Guia de Características e Testes Qualitativos para Computadores
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Características</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>CPU (Central Processing Unit):</strong>
              <p>
                A CPU, ou Unidade Central de Processamento, é o cérebro do
                computador, responsável por executar instruções de programas. Os
                principais fabricantes são Intel e AMD. Exemplos incluem Intel
                i5, i7, i9 e AMD Ryzen 5, 7, 9.
              </p>
            </li>
            <li>
              <strong>GPU (Graphics Processing Unit):</strong>
              <p>
                A GPU, ou Unidade de Processamento Gráfico, é responsável pelo
                processamento de gráficos e imagens. Tipos comuns de GPUs
                incluem as integradas (Intel UHD, AMD Vega) e as dedicadas
                (NVIDIA GeForce, AMD Radeon).
              </p>
            </li>
            <li>
              <strong>RAM (Random Access Memory):</strong>
              <p>
                A RAM, ou Memória de Acesso Aleatório, armazena dados
                temporários enquanto o computador está ligado. Tipos de RAM
                incluem DDR2, DDR3, DDR4 e DDR5, cada um com diferentes
                velocidades e eficiências.
              </p>
            </li>
            <li>
              <strong>Memória:</strong>
              <p>
                Refere-se ao armazenamento permanente, como SSDs (Solid State
                Drives) e HDDs (Hard Disk Drives). SSDs são mais rápidos e mais
                caros, enquanto HDDs são mais lentos, mas oferecem maior
                capacidade por um custo menor.
              </p>
            </li>
            <li>
              <strong>Ecrã:</strong>
              <p>
                O ecrã é onde são exibidas as informações visuais do computador.
                Tipos de ecrãs incluem LCD (Liquid Crystal Display), LED (Light
                Emitting Diode), IPS (In-Plane Switching) e AMOLED (Active
                Matrix Organic Light Emitting Diode), cada um com suas próprias
                vantagens em termos de cor, brilho e consumo de energia.
              </p>
            </li>
            <li>
              <strong>Portas:</strong>
              <p>
                Conectores físicos para dispositivos externos. Exemplos incluem
                USB (Universal Serial Bus), HDMI (High-Definition Multimedia
                Interface), Thunderbolt, e portas de áudio.
              </p>
            </li>
            <li>
              <strong>Bateria:</strong>
              <p>
                Fonte de energia para laptops, permitindo uso sem conexão direta
                à eletricidade. A capacidade é medida em Wh (Watt-hora), e a
                durabilidade depende do uso e do gerenciamento de energia do
                dispositivo.
              </p>
            </li>
            <li>
              <strong>Motherboard:</strong>
              <p>
                A placa-mãe conecta todos os componentes do computador. Possui
                slots para CPU, RAM, GPUs, armazenamento e outras expansões. A
                qualidade da motherboard influencia na estabilidade e no
                desempenho do sistema.
              </p>
            </li>
            <li>
              <strong>Chassi:</strong>
              <p>
                A estrutura física que abriga todos os componentes do
                computador. Pode ser feita de vários materiais, como plástico,
                alumínio ou aço, e está disponível em diferentes tamanhos, como
                ATX, Micro-ATX e Mini-ITX.
              </p>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Testes Qualitativos</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Verificar Ecrã</h3>
            <p>Software para verificar os pixels:</p>
            <ul className="list-disc list-inside">
              <li>Imagens especiais para testar</li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=video_test"
                  className="text-blue-500"
                >
                  Vídeo no Youtube de teste
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Verificar Bateria</h3>
            <ul className="list-disc list-inside">
              <li>Testar se funciona sem carregador</li>
              <li>
                Executar o comando: <code>cmd: powercfg /batteryreport</code> e
                verificar o relatório
              </li>
              <li>Ver se é facilmente trocada e se há venda disponível</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Verificar RAM</h3>
            <ul className="list-disc list-inside">
              <li>
                Usar{" "}
                <a href="https://www.memtest.org/" className="text-blue-500">
                  Memtest
                </a>{" "}
                para testar a RAM (demora 4h)
              </li>
              <li>
                Usar o comando <code>Win+r &gt; mdsched.exe</code>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Verificar CPU</h3>
            <ul className="list-disc list-inside">
              <li>Testar com software de benchmark específico</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Verificar GPU</h3>
            <ul className="list-disc list-inside">
              <li>
                Usar{" "}
                <a
                  href="https://geeks3d.com/furmark/"
                  className="text-blue-500"
                >
                  Furmark
                </a>{" "}
                para testar a GPU
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Verificar Disco</h3>
            <ul className="list-disc list-inside">
              <li>
                Executar o comando: <code>cmd: chkdsk</code>
              </li>
              <li>
                Usar{" "}
                <a
                  href="https://crystalmark.info/en/software/crystaldiskinfo/"
                  className="text-blue-500"
                >
                  CrystalDiskInfo
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Motherboard</h3>
            <ul className="list-disc list-inside">
              <li>Verificar se há algum componente queimado</li>
              <li>Verificar as opções de expansão disponíveis</li>
            </ul>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default GuidePage;
