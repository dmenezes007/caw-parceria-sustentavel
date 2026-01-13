
import React from 'react';
import { CheckCircle2, AlertTriangle, CircleDashed } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const rows = [
    {
      label: 'Retenção / Continuidade',
      hibrido: 'Alta estabilidade',
      outros: 'Variável',
      status: 'success'
    },
    {
      label: 'Custo Total por Matter',
      hibrido: 'Menor (inclui turnover)',
      outros: 'Potencialmente maior',
      status: 'success'
    },
    {
      label: 'Risco Jurídico',
      hibrido: 'Baixo',
      outros: 'Elevado',
      status: 'warning'
    },
    {
      label: 'Flexibilidade',
      hibrido: 'Boa (apoio por demanda)',
      outros: 'Alta inicial',
      status: 'neutral'
    }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-100">
            <th className="py-4 px-4 text-sm font-semibold text-slate-400 uppercase tracking-wider">Critério</th>
            <th className="py-4 px-4 text-sm font-bold text-indigo-700 bg-indigo-50/50 rounded-t-2xl">Modelo Híbrido (Núcleo CLT)</th>
            <th className="py-4 px-4 text-sm font-semibold text-slate-500">Outros Modelos</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, idx) => (
            <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
              <td className="py-6 px-4 font-semibold text-slate-800">{row.label}</td>
              <td className="py-6 px-4 bg-indigo-50/30">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                  <span className="text-slate-900 font-medium">{row.hibrido}</span>
                </div>
              </td>
              <td className="py-6 px-4">
                <div className="flex items-center space-x-2">
                  <AlertTriangle size={18} className="text-amber-500 flex-shrink-0" />
                  <span className="text-slate-500">{row.outros}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
