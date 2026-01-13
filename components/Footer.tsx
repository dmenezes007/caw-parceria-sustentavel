
import React from 'react';
import { Mail, Linkedin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-12 border-t border-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-xl font-bold text-slate-800">Conecte-se com Resultados</h4>
          <p className="text-slate-500 max-w-sm">
            Evoluímos o modelo de prestação de serviço jurídico com base em dados, empatia e eficiência.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="p-2 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-indigo-600 hover:border-indigo-100 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-indigo-600 hover:border-indigo-100 transition-colors">
              <Mail size={20} />
            </a>
            <a href="#" className="p-2 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-indigo-600 hover:border-indigo-100 transition-colors">
              <Globe size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Baseado em evidências</span>
          <div className="flex items-center space-x-6 grayscale opacity-60">
            <span className="text-lg font-bold text-slate-800">Migalhas</span>
            <span className="text-lg font-bold text-slate-800">Gallup</span>
            <span className="text-lg font-bold text-slate-800">Cajuína</span>
          </div>
          <p className="text-xs text-slate-400 mt-8">
            © 2024 PartnerLegal Strategy. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
