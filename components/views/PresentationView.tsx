import React, { useState } from 'react';
import { FileText, Presentation, Download, Eye, X, ExternalLink } from 'lucide-react';

export const PresentationView: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState<{ file: string; title: string; type: 'pdf' | 'ppsx' } | null>(null);

  const documents = [
    {
      title: 'Política de Combate ao Trabalho Infantil',
      file: '/files/POLITICA COMBATE AO TRABALHO INFANTIL.pdf',
      description: 'Compromisso com a erradicação do trabalho infantil'
    },
    {
      title: 'Política sobre Trabalho Forçado ou Análogo ao Escravo',
      file: '/files/POLITICA TRABALHO FORÇADO OU ANALOGO ESCRAVO.pdf',
      description: 'Diretrizes contra trabalho forçado'
    },
    {
      title: 'Política de Incentivo à Contratação e Promoção de Negros, LGBTQIA+, Pessoas 45+',
      file: '/files/POLITICA CONTRATAÇÃO GRUPOS DIVERSIDADE.pdf',
      description: 'Promoção da diversidade e inclusão'
    },
    {
      title: 'Política de RH',
      file: '/files/POLITICA RH.pdf',
      description: 'Diretrizes de gestão de recursos humanos'
    },
    {
      title: 'Código de Ética',
      file: '/files/CÓDIGO DE ÉTICA.pdf',
      description: 'Princípios éticos e conduta profissional'
    },
    {
      title: 'Política de Anticorrupção e Suborno',
      file: '/files/POLITICA ANTICORRUPÇÃO E SUBORNO.pdf',
      description: 'Combate à corrupção e práticas ilícitas'
    },
    {
      title: 'Regulamento Interno de Segurança da Informação',
      file: '/files/RISI - REGULAMENTO INTERNO SEGURANÇA DA INFORMAÇÃO.pdf',
      description: 'Proteção e segurança de dados'
    },
    {
      title: 'Declaração de Ergonomia',
      file: '/files/DECLARAÇÃO DE ERGONOMIA.pdf',
      description: 'Compromisso com a saúde e bem-estar'
    },
    {
      title: 'Política de Home Office (Teletrabalho)',
      file: '/files/POLITICA HOME OFFICE.pdf',
      description: 'Diretrizes para trabalho remoto'
    }
  ];

  const handleOpenPresentation = () => {
    setCurrentFile({
      file: '/files/Apresentação Institucional - CAW - 2026.pdf',
      title: 'Apresentação Institucional - CAW - 2026',
      type: 'pdf'
    });
    setModalOpen(true);
  };

  const handleOpenDocument = (file: string, title: string) => {
    setCurrentFile({
      file,
      title,
      type: 'pdf'
    });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setCurrentFile(null), 300);
  };

  const handleDownload = (file: string) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = file.split('/').pop() || 'documento';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              onClick={() => handleOpenDocument(doc.file, doc.title)}
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

      {/* Modal de Visualização */}
      {modalOpen && currentFile && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div 
            className="relative w-full max-w-7xl h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Modal */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-200 bg-slate-50 rounded-t-2xl">
              <div className="flex-1 min-w-0 mr-4">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 truncate">
                  {currentFile.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {currentFile.type === 'pdf' ? 'Documento PDF' : 'Apresentação PowerPoint'}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDownload(currentFile.file)}
                  className="p-2 md:p-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                  title="Baixar arquivo"
                >
                  <Download size={20} />
                </button>
                <button
                  onClick={() => window.open(currentFile.file, '_blank')}
                  className="p-2 md:p-3 rounded-xl bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors"
                  title="Abrir em nova aba"
                >
                  <ExternalLink size={20} />
                </button>
                <button
                  onClick={handleCloseModal}
                  className="p-2 md:p-3 rounded-xl bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors"
                  title="Fechar"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Conteúdo do Modal */}
            <div className="flex-1 overflow-hidden bg-slate-100 rounded-b-2xl">
              {currentFile.type === 'pdf' ? (
                <iframe
                  src={`${currentFile.file}#toolbar=1&navpanes=1&scrollbar=1`}
                  className="w-full h-full"
                  title={currentFile.title}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
                    <Presentation size={40} className="text-indigo-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    Apresentação PowerPoint
                  </h4>
                  <p className="text-slate-600 mb-6 max-w-md">
                    Arquivos .ppsx não podem ser visualizados diretamente no navegador. Use os botões acima para baixar ou abrir em nova aba.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleDownload(currentFile.file)}
                      className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center justify-center space-x-2"
                    >
                      <Download size={20} />
                      <span>Baixar Apresentação</span>
                    </button>
                    <button
                      onClick={() => window.open(currentFile.file, '_blank')}
                      className="px-6 py-3 rounded-xl bg-slate-200 text-slate-700 font-semibold hover:bg-slate-300 transition-colors inline-flex items-center justify-center space-x-2"
                    >
                      <ExternalLink size={20} />
                      <span>Abrir em Nova Aba</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
