import { useState, useMemo } from 'react';
import CompetitorAnalyticsService from '../services/competitorAnalyticsService';

export const useCompetitorAnalytics = () => {
  const [selectedCompetitor, setSelectedCompetitor] = useState<string>('comp-a');
  const [searchQuery, setSearchQuery] = useState('');

  const competitors = useMemo(() => {
    const allCompetitors = CompetitorAnalyticsService.getCompetitors();
    if (!searchQuery) return allCompetitors;

    return allCompetitors.filter(comp =>
      comp.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const currentCompetitor = useMemo(() =>
    CompetitorAnalyticsService.getCompetitorById(selectedCompetitor),
    [selectedCompetitor]
  );

  const keyMetrics = useMemo(() =>
    CompetitorAnalyticsService.getKeyMetrics(selectedCompetitor),
    [selectedCompetitor]
  );

  const activityTimeline = useMemo(() =>
    CompetitorAnalyticsService.getActivityTimeline(selectedCompetitor),
    [selectedCompetitor]
  );

  return {
    competitors,
    currentCompetitor,
    keyMetrics,
    activityTimeline,
    selectedCompetitor,
    setSelectedCompetitor,
    searchQuery,
    setSearchQuery
  };
};
