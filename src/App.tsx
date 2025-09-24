import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import MetricCard from './components/MetricCard';
import ComparisonChart from './components/ComparisonChart';
import ActivityTimeline from './components/ActivityTimeline';
import ReportBuilder from './components/ReportBuilder';
import { useCompetitorAnalytics } from './hooks/useCompetitorAnalytics';
import { useReportBuilder } from './hooks/useReportBuilder';
import CompetitorAnalyticsService from './services/competitorAnalyticsService';

const MetricsMindAnalyzer: React.FC = () => {
  const {
    competitors,
    currentCompetitor,
    keyMetrics,
    activityTimeline,
    selectedCompetitor,
    setSelectedCompetitor,
    searchQuery,
    setSearchQuery
  } = useCompetitorAnalytics();

  const { reportSections, toggleSection, addSection } = useReportBuilder();
  const comparisonData = CompetitorAnalyticsService.getCompetitorComparison();

  const [activeTab, setActiveTab] = useState('Overview');

  if (!currentCompetitor) {
    return <div className="flex items-center justify-center h-screen text-white bg-slate-900">Loading...</div>;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Key Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {keyMetrics.map(metric => (
                  <MetricCard key={metric.id} metric={metric} />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Comparison Charts</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-slate-700 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-4">Market Share Comparison</h4>
                  <div className="flex items-end justify-center space-x-4 h-32">
                    {competitors.slice(0, 5).map((comp) => (
                      <div key={comp.id} className="flex flex-col items-center">
                        <div
                          className="bg-blue-500 rounded-t w-8"
                          style={{ height: `${comp.marketShare * 2}px` }}
                          title={`${comp.name}: ${comp.marketShare}%`}
                        ></div>
                        <span className="text-slate-400 text-xs mt-2">{comp.name.split(' ')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <ComparisonChart
                  title="Customer Satisfaction Comparison"
                  data={comparisonData}
                />
              </div>
            </div>
            <ActivityTimeline activities={activityTimeline} />
          </>
        );
      case 'Web Presence':
        return <div className="text-white">Web Presence Content (Not Implemented)</div>;
      case 'Social Media':
        return <div className="text-white">Social Media Content (Not Implemented)</div>;
      case 'Pricing':
        return <div className="text-white">Pricing Content (Not Implemented)</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <NavBar />

      <div className="flex h-[calc(100vh-60px)]">
        <Sidebar
          competitors={competitors}
          selectedCompetitor={selectedCompetitor}
          onSelectCompetitor={setSelectedCompetitor}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white">{currentCompetitor.name} Profile</h1>
              <p className="text-slate-400">Detailed analysis and insights for {currentCompetitor.name}</p>
            </div>

            <div className="mb-6 bg-slate-800 rounded-lg p-6 relative overflow-hidden border border-slate-700">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-50"></div>
               <div className="relative">
                <h2 className="text-xl font-bold text-white mb-3">Executive Summary</h2>
                <p className="text-slate-300">
                  {currentCompetitor.name} is a key player in the market, known for its innovative
                  solutions and strong customer base. Recent activities indicate a focus on
                  expanding into new markets and enhancing product offerings.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex space-x-6 border-b border-slate-700">
                {['Overview', 'Web Presence', 'Social Media', 'Pricing'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 px-1 text-sm font-medium ${
                      activeTab === tab
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {renderContent()}

          </div>

          <div className="w-80 p-6 bg-slate-900 border-l border-slate-800 overflow-y-auto">
            <ReportBuilder
              sections={reportSections}
              onToggleSection={toggleSection}
              onAddSection={addSection}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsMindAnalyzer;
