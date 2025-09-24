import React from 'react';
import {
  ChevronRight, ChevronDown, Plus, FileText, Presentation
} from 'lucide-react';
import { ReportSection } from '../types';

interface ReportBuilderProps {
    sections: ReportSection[];
    onToggleSection: (id: string) => void;
    onAddSection: () => void;
}

const ReportBuilder: React.FC<ReportBuilderProps> = ({ sections, onToggleSection, onAddSection }) => {
    const handleExport = (format: 'PDF' | 'PowerPoint') => {
        console.log(`Exporting report as ${format}`);
        // In a real app, this would trigger a download
      };

    return (
        <div className="bg-slate-800 rounded-lg p-4">
            <h3 className="text-white font-medium mb-4">Custom Report Builder</h3>
            <p className="text-slate-400 text-sm mb-6">Drag and drop sections to build your report.</p>

            <div className="space-y-3">
            {sections.map(section => (
                <div key={section.id} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-slate-600 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-slate-400 rounded"></div>
                    </div>
                    <span className="text-white text-sm">{section.title}</span>
                </div>
                <button
                    onClick={() => onToggleSection(section.id)}
                    className="text-slate-400 hover:text-white"
                >
                    {section.isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                </div>
            ))}
            </div>

            <button
            onClick={onAddSection}
            className="w-full mt-4 p-3 border-2 border-dashed border-slate-600 rounded-lg text-slate-400 hover:border-slate-500 hover:text-white transition-colors flex items-center justify-center space-x-2"
            >
            <Plus className="w-4 h-4" />
            <span className="text-sm">Add Section</span>
            </button>

            <div className="mt-6">
            <h4 className="text-white font-medium mb-3">Export Report</h4>
            <div className="grid grid-cols-2 gap-3">
                <button onClick={() => handleExport('PDF')} className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                <FileText className="w-4 h-4" />
                <span className="text-sm">PDF</span>
                </button>
                <button onClick={() => handleExport('PowerPoint')} className="flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">
                <Presentation className="w-4 h-4" />
                <span className="text-sm">PowerPoint</span>
                </button>
            </div>
            </div>
        </div>
    )
};

export default ReportBuilder;
