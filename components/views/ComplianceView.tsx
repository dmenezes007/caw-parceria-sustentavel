
import React from 'react';
import { ShieldCheck, Scale, FileText, CheckCircle2 } from 'lucide-react';

export const ComplianceView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="space-y-2">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Mitigação de Riscos & Compliance</h2>
        <p className="text-slate-500 max-w-2xl">Segurança jurídica inabalável através de modelos formais e transparentes.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600">
                <Scale size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Alinhamento com a Lei 13.467/2017</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Nosso modelo operacional foi desenhado para respeitar estritamente a Reforma Trabalhista, garantindo que a prestação de serviços não gere passivos ocultos para nossos parceiros.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Contratos civis robustos",
                "Gestão de pessoas 100% interna",
                "Ausência de subordinação direta",
                "Compliance tributário rigoroso"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-slate-700 font-medium text-sm">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col items-center text-center justify-center space-y-4">
          <ShieldCheck size={64} className="text-indigo-600 mb-2" />
          <h4 className="font-bold text-slate-800">Reputação Fortalecida</h4>
          <p className="text-sm text-slate-500">
            Evite manchetes negativas e passivos trabalhistas. O compliance é a sua maior proteção institucional.
          </p>
          <div className="w-full pt-4 border-t border-slate-200">
            <span className="text-xs font-bold text-slate-400 uppercase">Alinhado às Normas ISO</span>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3 p-6 bg-slate-900 rounded-2xl text-white">
            <FileText className="mb-4 text-indigo-400" size={32} />
            <h5 className="font-bold text-lg mb-2">Auditoria Sem Medo</h5>
            <p className="text-sm text-slate-400">Toda a nossa documentação de pessoal e tributária está disponível para auditorias periódicas de nossos clientes.</p>
          </div>
          <div className="flex-1 py-4">
            <h5 className="font-bold text-slate-800 mb-4">Diferenciais de Compliance:</h5>
            <div className="space-y-3">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-800 text-sm font-medium">
                Seguro de responsabilidade civil profissional incluído.
              </div>
              <div className="p-3 bg-indigo-50 rounded-xl text-indigo-800 text-sm font-medium">
                Proteção de dados (LGPD) em todas as camadas da entrega.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
