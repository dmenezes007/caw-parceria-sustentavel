
import React from 'react';
import { HeartPulse, Globe2, Gauge, CheckCircle } from 'lucide-react';

export const PerformanceView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Performance & Saúde Mental</h2>
        <p className="text-sm md:text-base text-slate-500 max-w-2xl">Dados globais provam: o bem-estar da equipe é o motor da produtividade em escala.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 md:space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Globe2 size={24} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-800">O Custo Global da Inação</h3>
          </div>
          <div className="space-y-2">
            <p className="text-3xl md:text-5xl font-black text-slate-900">US$ 1 Tri</p>
            <p className="text-slate-500 font-medium leading-relaxed">
              Perda anual global em produtividade devido a problemas de saúde mental (depressão e ansiedade).
            </p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-indigo-600">
            <p className="text-sm text-slate-600 italic">"Parceiros com quadro CLT priorizam engajamento, elevando performance em dezenas de pontos percentuais."</p>
          </div>
        </div>

        <div className="p-6 md:p-8 rounded-3xl bg-indigo-600 text-white shadow-xl shadow-indigo-200 space-y-4 md:space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white">
              <Gauge size={24} />
            </div>
            <h3 className="text-xl font-bold">Estudo Gallup (2024)</h3>
          </div>
          <p className="text-indigo-100 leading-relaxed">
            Organizações com alto engajamento apresentam índices significativamente maiores de rentabilidade e qualidade na entrega.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="space-y-1">
              <p className="text-2xl font-bold">+21%</p>
              <p className="text-xs text-indigo-200">Lucratividade</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">-41%</p>
              <p className="text-xs text-indigo-200">Absenteísmo</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
        <h4 className="text-base md:text-lg font-bold text-slate-800 mb-4 md:mb-6">Nossa Matriz de Engajamento</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: "Foco no Matter", desc: "Menos distrações administrativas para o advogado" },
            { title: "Cultura de Feedback", desc: "Ciclos curtos de melhoria contínua" },
            { title: "Segurança Psicológica", desc: "Liberdade para inovar e prevenir erros" }
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center space-x-2 text-indigo-600">
                <CheckCircle size={18} />
                <span className="font-bold">{item.title}</span>
              </div>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
