
import React from 'react';
import { MessageSquare, Calendar, Phone, ArrowRight, Sparkles } from 'lucide-react';

export const ContactView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold uppercase tracking-wider">
          <Sparkles size={16} />
          <span>Call to Action Suave</span>
        </div>
        <h2 className="text-4xl font-black text-slate-900 tracking-tight">Agende uma conversa para ver nossos KPIs</h2>
        <p className="text-xl text-slate-500">Vamos conversar sobre como transformar sua eficiência jurídica?</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <button className="p-10 rounded-[2.5rem] bg-indigo-600 text-white text-left group transition-all hover:translate-y-[-4px] shadow-xl shadow-indigo-200">
          <Calendar size={40} className="mb-6 text-indigo-200" />
          <h3 className="text-2xl font-bold mb-2">Marcar Call Estratégica</h3>
          <p className="text-indigo-100 mb-8 leading-relaxed">30 minutos para apresentarmos nosso dashboard de performance.</p>
          <div className="inline-flex items-center space-x-2 font-bold group-hover:translate-x-2 transition-transform">
            <span>Ver horários</span>
            <ArrowRight size={20} />
          </div>
        </button>

        <div className="space-y-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center space-x-6 hover:border-indigo-200 transition-colors cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600">
              <MessageSquare size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800">Dúvidas por WhatsApp</h4>
              <p className="text-sm text-slate-500">Resposta em até 15 minutos.</p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center space-x-6 hover:border-indigo-200 transition-colors cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800">Central de Atendimento</h4>
              <p className="text-sm text-slate-500">Segunda a Sexta, 09h às 18h.</p>
            </div>
          </div>
          
          <div className="p-6 bg-slate-900 rounded-3xl text-center">
             <p className="text-xs font-bold text-slate-400 uppercase mb-2">Sua privacidade importa</p>
             <p className="text-[10px] text-slate-500">Dados tratados conforme LGPD.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
