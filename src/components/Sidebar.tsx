import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { Competitor } from '../types';

interface SidebarProps {
    competitors: Competitor[];
    selectedCompetitor: string;
    onSelectCompetitor: (id: string) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    competitors,
    selectedCompetitor,
    onSelectCompetitor,
    searchQuery,
    onSearchChange
}) => {
    const handleQuickCompare = (comparePair: string) => {
        console.log(`Quick comparing: ${comparePair}`);
      };

    return (
        <div className="w-64 bg-slate-800 text-white h-full overflow-y-auto">
            <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Competitor Management</h2>
            <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                type="text"
                placeholder="Search competitors"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-slate-700 text-white pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="space-y-2">
                {competitors.map(competitor => (
                <div
                    key={competitor.id}
                    onClick={() => onSelectCompetitor(competitor.id)}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedCompetitor === competitor.id
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-slate-700'
                    }`}
                >
                    <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                        {competitor.name.charAt(0)}
                    </div>
                    <span className="text-sm">{competitor.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                </div>
                ))}
            </div>

            <div className="mt-8">
                <h3 className="text-sm font-medium mb-3">Quick Comparison</h3>
                <div className="space-y-2">
                <div onClick={() => handleQuickCompare('A vs. B')} className="flex items-center justify-between p-2 rounded cursor-pointer hover:bg-slate-700">
                    <span className="text-sm">Competitor A vs. B</span>
                    <ChevronRight className="w-4 h-4" />
                </div>
                <div onClick={() => handleQuickCompare('C vs. D')} className="flex items-center justify-between p-2 rounded cursor-pointer hover:bg-slate-700">
                    <span className="text-sm">Competitor C vs. D</span>
                    <ChevronRight className="w-4 h-4" />
                </div>
                </div>
            </div>
            </div>
        </div>
    )
};

export default Sidebar;
