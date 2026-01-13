
import React from 'react';
import { ArrowRight } from 'lucide-react';
import photoFC from './photos/FC.png';
import photoMA from './photos/MA.png';
import photoWW from './photos/WW.png';

export const Hero: React.FC = () => {
  return (
    <section className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
        <div className="space-y-2 max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Parcerias que Entregam Mais: <br className="hidden sm:block" />
            <span className="text-indigo-600">Previsibilidade e Eficiência</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-500 font-medium">
            Sustentabilidade jurídica através do cuidado com quem entrega.
          </p>
        </div>
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="flex -space-x-3 overflow-hidden">
            <img
              className="inline-block h-10 w-10 md:h-12 md:w-12 rounded-full ring-4 ring-white object-cover">
              src={photoFC}
              alt="Team member"
            />
            <img
              className="inline-block h-10 w-10 md:h-12 md:w-12 rounded-full ring-4 ring-white object-cover">
              src={photoMA}
              alt="Team member"
            />
            <img
              className="inline-block h-10 w-10 md:h-12 md:w-12 rounded-full ring-4 ring-white object-cover">
              src={photoWW}
              alt="Team member"
            />
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-600">
            Equipe estável e engajada <br />
            <span className="text-green-600 font-bold">100% de Retenção M/M</span>
          </p>
        </div>
      </div>

      <div className="p-6 md:p-8 lg:p-12 rounded-[2.5rem] bg-indigo-600 text-white shadow-2xl shadow-indigo-200 relative overflow-hidden group">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white opacity-[0.05] rounded-full blur-3xl group-hover:opacity-[0.1] transition-opacity duration-500" />
        <div className="relative z-10 max-w-3xl space-y-4 md:space-y-6">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs md:text-sm font-bold tracking-wide uppercase">
            Insight Estratégico
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
            E se sua próxima contratação reduzisse o retrabalho em <span className="text-indigo-200">30%</span>?
          </h2>
          <button className="flex items-center justify-center space-x-2 bg-white text-indigo-700 px-6 md:px-8 py-3 md:py-4 rounded-2xl text-sm md:text-base font-bold hover:bg-slate-50 transition-colors shadow-lg shadow-indigo-900/20 w-full sm:w-auto">
            <span>Explorar Proposta</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
