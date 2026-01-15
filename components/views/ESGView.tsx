
import React from 'react';
import { Scale, TrendingUp, Users, Heart, ShieldCheck, Target, Award, Leaf } from 'lucide-react';

export const ESGView: React.FC = () => {
  const kpiData = [
    {
      kpi: 'Taxa de Rotatividade',
      metrica: '<10% anual',
      beneficio: 'Menor custo por matter e continuidade',
      color: 'emerald'
    },
    {
      kpi: 'Índice de Engajamento',
      metrica: '>80% (pesquisas Gallup)',
      beneficio: 'Maior produtividade e inovação estratégica',
      color: 'indigo'
    },
    {
      kpi: 'Diversidade/Inclusão',
      metrica: '% mulheres/liderança',
      beneficio: 'Reputação e compliance social',
      color: 'purple'
    },
    {
      kpi: 'Ausências por Saúde',
      metrica: 'Redução 20% via bem-estar',
      beneficio: 'Previsibilidade operacional',
      color: 'rose'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; icon: string }> = {
      emerald: { bg: 'bg-emerald-50', text: 'text-emerald-900', border: 'border-emerald-200', icon: 'text-emerald-600' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-900', border: 'border-indigo-200', icon: 'text-indigo-600' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-900', border: 'border-purple-200', icon: 'text-purple-600' },
      rose: { bg: 'bg-rose-50', text: 'text-rose-900', border: 'border-rose-200', icon: 'text-rose-600' }
    };
    return colors[color];
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <header className="space-y-3">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">ESG em Ação</h2>
        </div>
        <p className="text-sm md:text-base text-slate-500 max-w-3xl">
          O pilar Social (S) do ESG transforma o cuidado com profissionais em estratégia mensurável, elevando reputação e atratividade para clientes corporativos.
        </p>
      </header>

      {/* Hero Card - Núcleo CLT para Sólido Pilar Social */}
      <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-green-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Scale className="text-white" size={32} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Núcleo CLT para Sólido Pilar Social</h3>
              <p className="text-sm md:text-base text-green-100 mt-1">Governança responsável que gera valor sustentável</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-8">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <ShieldCheck className="text-green-200 mb-3" size={24} />
              <h4 className="font-bold text-lg mb-2">Compliance Trabalhista</h4>
              <p className="text-sm text-green-100 leading-relaxed">
                Alinhamento com Lei 13.467/2017, mitigando riscos jurídicos e fortalecendo governança
              </p>
            </div>

            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Users className="text-green-200 mb-3" size={24} />
              <h4 className="font-bold text-lg mb-2">Inclusão & Diversidade</h4>
              <p className="text-sm text-green-100 leading-relaxed">
                Políticas ESG que promovem equidade, essenciais para certificações GRI e relatórios integrados
              </p>
            </div>

            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Heart className="text-green-200 mb-3" size={24} />
              <h4 className="font-bold text-lg mb-2">Bem-Estar & Retenção</h4>
              <p className="text-sm text-green-100 leading-relaxed">
                Saúde mental e engajamento elevam performance e reduzem custos de turnover
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="flex items-start gap-3">
              <Award className="text-green-300 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="text-base md:text-lg font-semibold italic leading-relaxed">
                  "Parceiros ESG reduzem riscos e elevam performance sustentável"
                </p>
                <p className="text-sm text-green-200 mt-2">Impacto direto na resiliência operacional e reputação corporativa</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Evidências Robustas */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">Evidências ESG Mensuráveis</h3>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Dados 2024</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                <TrendingUp className="text-blue-600" size={24} />
              </div>
              <Target className="text-slate-300" size={20} />
            </div>
            <h4 className="text-lg font-bold text-slate-800">Impacto McKinsey</h4>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-blue-600">15%</span>
              <span className="text-sm text-slate-500">perda de produtividade</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Estudos McKinsey apontam que alta rotatividade pode reduzir resultados em até 15%. Quadro CLT estável mitiga esse risco.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center">
                <Award className="text-purple-600" size={24} />
              </div>
              <Leaf className="text-slate-300" size={20} />
            </div>
            <h4 className="text-lg font-bold text-slate-800">Atratividade ESG</h4>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-purple-600">+67%</span>
              <span className="text-sm text-slate-500">preferência clientes</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Empresas com fortes políticas sociais atraem clientes ESG-compliant e retêm talentos, segundo estudos globais.
            </p>
          </div>
        </div>
      </div>

      {/* KPI Cards baseados na planilha */}
      <div className="space-y-6">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900">KPIs ESG: Benefícios para Contratantes</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {kpiData.map((item, index) => {
            const colors = getColorClasses(item.color);
            return (
              <div 
                key={index}
                className={`p-6 rounded-3xl ${colors.bg} border ${colors.border} transition-all hover:shadow-md`}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h4 className={`font-bold text-base ${colors.text}`}>{item.kpi}</h4>
                    <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center`}>
                      <Target className={colors.icon} size={16} />
                    </div>
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-lg bg-white border ${colors.border}`}>
                    <span className={`text-sm font-bold ${colors.icon}`}>{item.metrica}</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{item.beneficio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Alinhamento ESG Detalhado */}
      <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-900 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Alinhamento ESG Estratégico</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="text-green-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-green-400 mb-1">Relações</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Relações trabalhistas justas, inclusão e saúde mental essenciais para law firms com certificações GRI
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <Scale className="text-indigo-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-indigo-400 mb-1">Governança</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Compliance trabalhista (Lei 13.467/2017) mitigando riscos jurídicos e fortalecendo transparência
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Leaf className="text-emerald-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-emerald-400 mb-1">Resiliência</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Baixa rotatividade via quadro CLT demonstra compromisso ESG e fortalece continuidade operacional
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Award className="text-yellow-400" size={28} />
                <h4 className="font-bold text-xl">Certificações & Relatórios</h4>
              </div>
              <ul className="space-y-3">
                {[
                  'GRI (Global Reporting Initiative)',
                  'Relatórios Integrados ESG',
                  'Compliance Lei 13.467/2017',
                  'Índices de Diversidade & Inclusão',
                  'Métricas de Bem-Estar Organizacional'
                ].map((cert, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-sm">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Transformamos ESG em Vantagem Competitiva</h3>
        <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
          KPIs mensuráveis que elevam nossa performance e reputação no mercado
        </p>
        <button className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-indigo-50 transition-all shadow-xl">
          Conheça Nossos Indicadores ESG
        </button>
      </div>
    </div>
  );
};
