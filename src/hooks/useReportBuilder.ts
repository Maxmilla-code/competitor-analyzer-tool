import { useState, useCallback } from 'react';
import { ReportSection } from '../types';

export const useReportBuilder = () => {
  const [reportSections, setReportSections] = useState<ReportSection[]>([
    { id: 'exec-summary', title: 'Executive Summary', type: 'summary', isCollapsed: false },
    { id: 'key-metrics', title: 'Key Metrics', type: 'metrics', isCollapsed: false },
    { id: 'market-share', title: 'Market Share', type: 'market_share', isCollapsed: false },
    { id: 'activity-timeline', title: 'Activity Timeline', type: 'activity', isCollapsed: false }
  ]);

  const toggleSection = useCallback((sectionId: string) => {
    setReportSections(prev =>
      prev.map(section =>
        section.id === sectionId
          ? { ...section, isCollapsed: !section.isCollapsed }
          : section
      )
    );
  }, []);

  const addSection = useCallback(() => {
    const newSection: ReportSection = {
      id: `section-${Date.now()}`,
      title: 'New Section',
      type: 'chart',
      isCollapsed: false
    };
    setReportSections(prev => [...prev, newSection]);
  }, []);

  return { reportSections, toggleSection, addSection };
};
