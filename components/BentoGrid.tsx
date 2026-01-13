
import React from 'react';
import { TrendingDown, BrainCircuit, ShieldAlert, Heart, Activity, Target } from 'lucide-react';
import { ComparisonTable } from './ComparisonTable';

export const BentoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(180px,_auto)]">
      {/* 1. Impacto Financeiro (Large Card) */}
      <div className="md:col-span-8 p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 h-full">
          <div className="flex-1 space-y-3 md:space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600">
              <TrendingDown size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800">Corte o Custo Oculto do Turnover</h3>
            <p className="text-slate-600 leading-relaxed">
              Equipes estáveis preservam memória institucional. O custo de substituição de um profissional jurídico é estimado entre <span className="font-bold text-rose-600">50% e 200%</span> do seu salário anual.
            </p>
            <div className="pt-3 md:pt-4 grid grid-cols-2 gap-3 md:gap-4">
              <div className="p-3 md:p-4 bg-slate-50 rounded-2xl">
                <p className="text-xl md:text-2xl font-bold text-indigo-600">-2.5x</p>
                <p className="text-xs text-slate-500 font-medium">Onboarding Time</p>
              </div>
              <div className="p-3 md:p-4 bg-slate-50 rounded-2xl">
                <p className="text-xl md:text-2xl font-bold text-indigo-600">+40%</p>
                <p className="text-xs text-slate-500 font-medium">Velocidade por Matter</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex w-1/3 items-center justify-center relative">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent rounded-3xl -z-10" />
             <div className="text-center p-6 space-y-2">
                <Target className="mx-auto text-indigo-600 mb-4" size={48} />
                <span className="block text-4xl font-black text-indigo-900">12%</span>
                <span className="text-sm text-slate-500 font-medium">Redução Média de Custos Operacionais</span>
             </div>
          </div>
        </div>
      </div>

      {/* 2. Saúde Mental KPI (Square Card) */}
      <div className="md:col-span-4 p-6 md:p-8 rounded-3xl bg-indigo-50 border border-indigo-100 flex flex-col justify-between group">
        <div className="space-y-3 md:space-y-4">
          <Heart className="text-indigo-600" size={28} />
          <h3 className="text-lg md:text-xl font-bold text-indigo-900">Produtividade Humana</h3>
          <p className="text-sm text-indigo-800/80 leading-relaxed">
            Depressão e ansiedade custam <b>US$ 1 trilhão</b> globalmente em produtividade perdida por ano. Parceiros focados em bem-estar garantem performance consistente.
          </p>
        </div>
        <div className="mt-6 flex items-end justify-between">
          <div>
            <span className="text-xs uppercase font-bold text-indigo-400 tracking-wider">Estudo Gallup</span>
            <div className="flex space-x-1 mt-1">
              {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-4 h-1.5 bg-indigo-600 rounded-full" />)}
            </div>
          </div>
          <Activity size={24} className="text-indigo-300" />
        </div>
      </div>

      {/* 3. Compliance & Risco (Square Card) */}
      <div className="md:col-span-4 p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
        <div className="space-y-3 md:space-y-4">
          <ShieldAlert className="text-orange-500" size={28} />
          <h3 className="text-lg md:text-xl font-bold text-slate-800">Segurança Jurídica</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Mitigue riscos trabalhistas com modelos formais alinhados à <b>Lei 13.467/2017</b>. Compliance não é opcional. É uma questão reputacional.
          </p>
        </div>
        <div className="mt-4 p-3 bg-orange-50 border border-orange-100 rounded-xl">
           <span className="text-xs font-bold text-orange-700">Risco Reduzido em até 85%</span>
        </div>
      </div>

      {/* 4. Comparison Table (Large Card) */}
      <div className="md:col-span-8 p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
        <div className="space-y-4 md:space-y-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-center sm:justify-between">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800">Contrastes que Fazem a Diferença</h3>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Benchmarking 2024</span>
          </div>
          <ComparisonTable />
        </div>
      </div>

      {/* 5. Final CTA / Data Points (Bottom Card) */}
      <div className="md:col-span-12 p-6 md:p-10 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <div className="space-y-3 md:space-y-4 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold">Pronto para elevar o padrão da sua entrega jurídica?</h3>
          <p className="text-slate-400 max-w-xl">
            Nossos modelos híbridos equilibram a flexibilidade necessária com a segurança institucional que o seu negócio exige.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto">
          <button className="px-6 md:px-8 py-3 md:py-4 bg-indigo-600 hover:bg-indigo-700 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-500/20 text-sm md:text-base">
            Agende uma conversa
          </button>
          <button className="px-6 md:px-8 py-3 md:py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-bold transition-all border border-white/10 text-sm md:text-base">
            Ver nossos KPIs
          </button>
        </div>
      </div>
    </div>
  );
};
