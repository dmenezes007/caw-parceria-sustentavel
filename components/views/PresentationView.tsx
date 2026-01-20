import React from 'react';
import { FileText, Presentation, Download, Eye } from 'lucide-react';

export const PresentationView: React.FC = () => {
  const documents = [
    {
      title: 'Política de Combate ao Trabalho Infantil',
      file: './components/files/POLITICA COMBATE AO TRABALHO INFANTIL.pdf',
      description: 'Compromisso com a erradicação do trabalho infantil'
    },
    {
      title: 'Política sobre Trabalho Forçado ou Análogo ao Escravo',
      file: './components/files/POLITICA TRABALHO FORÇADO OU ANALOGO ESCRAVO.pdf',
      description: 'Diretrizes contra trabalho forçado'
    },
    {
      title: 'Política de Incentivo à Contratação e Promoção de Negros, LGBTQIA+, Pessoas 45+',
      file: './components/files/POLITICA CONTRATAÇÃO GRUPOS DIVERSIDADE.pdf',
      description: 'Promoção da diversidade e inclusão'
    },
    {
      title: 'Política de RH',
      file: './components/files/POLITICA RH.pdf',
      description: 'Diretrizes de gestão de recursos humanos'
    },
    {
      title: 'Código de Ética',
      file: './components/files/CÓDIGO DE ÉTICA.pdf',
      description: 'Princípios éticos e conduta profissional'
    },
    {
      title: 'Política de Anticorrupção e Suborno',
      file: './components/files/POLITICA ANTICORRUPÇÃO E SUBORNO.pdf',
      description: 'Combate à corrupção e práticas ilícitas'
    },
    {
      title: 'Regulamento Interno de Segurança da Informação',
      file: './components/files/RISI - REGULAMENTO INTERNO SEGURANÇA DA INFORMAÇÃO.pdf',
      description: 'Proteção e segurança de dados'
    },
    {
      title: 'Declaração de Ergonomia',
      file: './components/files/DECLARAÇÃO DE ERGONOMIA.pdf',
      description: 'Compromisso com a saúde e bem-estar'
    },
    {
      title: 'Política de Home Office (Teletrabalho)',
      file: './components/files/POLITICA HOME OFFICE.pdf',
      description: 'Diretrizes para trabalho remoto'
    }
  ];

  const handleOpenPresentation = () => {
    window.open('./components/files/Apresentação Institucional - CAW - 2026.ppsx', '_blank');
  };

  const handleOpenDocument = (file: string) => {
    window.open(file, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="text-center space-y-4">
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight px-4">
          Conheça a CAW
        </h2>
        <p className="text-base md:text-xl text-slate-500 px-4">
          Nossa apresentação institucional e documentos de referência
        </p>
      </header>

      {/* Apresentação Institucional em Destaque */}
      <div className="px-4">
        <div 
          onClick={handleOpenPresentation}
          className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-indigo-800 text-white group transition-all hover:translate-y-[-4px] shadow-2xl shadow-indigo-200 cursor-pointer"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Presentation size={28} className="text-white" />
                </div>
                <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider">
                  Destaque
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Apresentação Institucional - CAW - 2026
              </h3>
              <p className="text-base md:text-lg text-indigo-100 mb-6 leading-relaxed">
                Conheça nossa história, valores, competências e diferenciais competitivos
              </p>
              <div className="inline-flex items-center space-x-3 font-bold group-hover:translate-x-2 transition-transform">
                <Eye size={20} />
                <span>Abrir Apresentação</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documentos de Referência */}
      <div className="px-4">
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
            Documentos de Referência
          </h3>
          <p className="text-slate-600">
            Políticas, códigos e diretrizes que norteiam nossas práticas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              onClick={() => handleOpenDocument(doc.file)}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-200 shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-indigo-50 flex items-center justify-center text-slate-600 group-hover:text-indigo-600 transition-colors flex-shrink-0">
                  <FileText size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-800 mb-1 leading-snug line-clamp-2">
                    {doc.title}
                  </h4>
                  <p className="text-xs text-slate-500 mb-3 line-clamp-2">
                    {doc.description}
                  </p>
                  <div className="flex items-center space-x-2 text-indigo-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    <Download size={14} />
                    <span>Abrir PDF</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nota de Rodapé */}
      <div className="px-4">
        <div className="p-6 bg-slate-900 rounded-3xl text-center">
          <p className="text-xs font-bold text-slate-400 uppercase mb-2">
            Transparência e Conformidade
          </p>
          <p className="text-xs text-slate-500">
            Documentos atualizados em conformidade com legislação vigente e boas práticas ESG
          </p>
        </div>
      </div>
    </div>
  );
};
