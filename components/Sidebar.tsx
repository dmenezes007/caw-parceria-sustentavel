
import React from 'react';
import { LayoutDashboard, Users, BarChart3, ShieldCheck, MessageSquareMore, Home } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'home', icon: Home, label: 'Início' },
    { id: 'impact', icon: BarChart3, label: 'Impacto' },
    { id: 'performance', icon: Users, label: 'Performance' },
    { id: 'risk', icon: ShieldCheck, label: 'Compliance' },
    { id: 'contact', icon: MessageSquareMore, label: 'Contato' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-64 bg-white border-r border-slate-200 flex flex-col py-8 z-50">
      {/* Brand Logo Placeholder */}
      <div className="px-6 mb-12 flex items-center justify-center md:justify-start space-x-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-100">
          <LayoutDashboard size={24} />
        </div>
        <span className="hidden md:block font-bold text-slate-800 text-xl tracking-tight">PartnerLegal</span>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center group relative p-3 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <Icon size={22} className={isActive ? 'stroke-[2.5px]' : 'stroke-2'} />
              <span className={`hidden md:block ml-4 font-medium text-sm`}>{item.label}</span>
              {isActive && (
                <div className="absolute left-0 w-1 h-6 bg-indigo-600 rounded-r-full" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="px-6 pt-6 border-t border-slate-100">
        <div className="hidden md:block p-4 bg-slate-50 rounded-2xl">
          <p className="text-xs font-semibold text-slate-400 uppercase mb-1">Status</p>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-slate-700">Online</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
