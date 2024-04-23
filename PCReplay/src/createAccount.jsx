import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col bg-neutral-200">
      <div className="flex gap-5 pt-6 pr-20 pb-4 pl-8 w-full text-white bg-teal-400 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto text-5xl max-md:text-4xl">
          PC<span className="text-4xl">Replay</span>
        </div>
        <div className="flex gap-5 self-start mt-1.5 text-4xl">
          <div>Login</div>
          <div className="flex-auto">Sign Up</div>
        </div>
      </div>
      <div className="flex flex-col self-center mt-5 w-full text-3xl text-black max-w-[1169px] max-md:max-w-full">
        <div className="text-3xl max-md:max-w-full">
          Início &gt; Criação de Conta
        </div>
        <div className="self-end mt-9 mr-8 text-6xl max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
          Crie a sua conta na PCReplay !{" "}
        </div>
        <div className="self-start mt-9 ml-56 max-md:ml-2.5">Nome Completo</div>
        <div className="justify-center items-start self-end px-5 py-5 max-w-full rounded-xl border border-black border-solid text-stone-400 w-[958px] max-md:pr-5">
          Your name
        </div>
        <div className="self-start mt-7 ml-56 max-md:ml-2.5">
          Número de telemóvel
        </div>
        <div className="justify-center items-start self-end px-5 py-5 mt-2 max-w-full whitespace-nowrap rounded-xl border border-black border-solid text-stone-400 w-[958px] max-md:pr-5">
          987654321
        </div>
        <div className="self-start mt-6 ml-56 max-md:ml-2.5">Email</div>
        <div className="items-start self-end px-5 pt-5 pb-2.5 mt-2 max-w-full whitespace-nowrap rounded-xl border border-black border-solid text-stone-400 w-[958px] max-md:pr-5">
          example@example.com
        </div>
        <div className="justify-center self-center px-14 py-7 mt-36 ml-28 text-center bg-emerald-200 max-md:px-5 max-md:mt-10">
          Criar conta
        </div>
      </div>
      <div className="mt-36 w-full bg-teal-400 min-h-[82px] max-md:mt-10 max-md:max-w-full" />
    </div>
  );
}