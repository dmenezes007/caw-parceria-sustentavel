
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { ImpactoView } from './components/views/ImpactoView';
import { PerformanceView } from './components/views/PerformanceView';
import { ComplianceView } from './components/views/ComplianceView';
import { ContactView } from './components/views/ContactView';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView />;
      case 'impact':
        return <ImpactoView />;
      case 'performance':
        return <PerformanceView />;
      case 'risk':
        return <ComplianceView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar - Fixed Left */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 ml-20 md:ml-64 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-12 min-h-screen flex flex-col">
          <div className="flex-1">
            {renderContent()}
          </div>
          
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
