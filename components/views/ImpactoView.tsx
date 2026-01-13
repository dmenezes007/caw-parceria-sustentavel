
import React from 'react';
import { TrendingDown, Database, Clock, ArrowUpRight } from 'lucide-react';

export const ImpactoView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="space-y-2">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Impacto Financeiro & Memória</h2>
        <p className="text-slate-500 max-w-2xl">A estabilidade da equipe não é apenas um valor humano, é uma decisão financeira estratégica que preserva o capital intelectual.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600">
            <TrendingDown size={24} />
          </div>
          <h4 className="font-bold text-slate-800">Custo do Turnover</h4>
          <p className="text-3xl font-black text-rose-600">50-200%</p>
          <p className="text-sm text-slate-500 leading-relaxed">
            Estimativa de custo sobre o salário anual por cada profissional jurídico que deixa a operação.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
            <Database size={24} />
          </div>
          <h4 className="font-bold text-slate-800">Memória Institucional</h4>
          <p className="text-3xl font-black text-indigo-600">Zero Loss</p>
          <p className="text-sm text-slate-500 leading-relaxed">
            Equipes estáveis retêm o histórico de teses e particularidades de cada cliente, eliminando a curva de aprendizado.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
            <Clock size={24} />
          </div>
          <h4 className="font-bold text-slate-800">Eficiência Onboarding</h4>
          <p className="text-3xl font-black text-emerald-600">-70%</p>
          <p className="text-sm text-slate-500 leading-relaxed">
            Redução drástica em horas gastas com treinamento e adaptação de novos recursos.
          </p>
        </div>
      </div>

      <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white overflow-hidden relative">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Por que o turnover é o "vazamento silencioso"?</h3>
            <ul className="space-y-4">
              {[
                "Perda de velocidade por matter em até 40%",
                "Desgaste da relação de confiança com o cliente",
                "Sobrecarga da equipe remanescente e queda de qualidade",
                "Custos invisíveis de recrutamento e seleção"
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-slate-300">
                  <ArrowUpRight className="text-indigo-400 mt-1 flex-shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <p className="text-lg italic text-slate-300 font-light leading-relaxed">
              "A parceria sustentável alinha a entrega jurídica ao cuidado com as pessoas, transformando um centro de custo em um diferencial competitivo de alta performance."
            </p>
            <p className="mt-4 text-sm font-bold text-indigo-400">— Fonte: Artigo Migalhas / Cajuína</p>
          </div>
        </div>
      </div>
    </div>
  );
};
