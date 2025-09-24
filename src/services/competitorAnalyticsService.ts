import { Competitor, MetricData, ActivityItem } from '../types';
import { MOCK_COMPETITORS, ACTIVITY_DATA } from '../data/mockData';

class CompetitorAnalyticsService {
  getCompetitors(): Competitor[] {
    return MOCK_COMPETITORS;
  }

  getCompetitorById(id: string): Competitor | null {
    return MOCK_COMPETITORS.find(comp => comp.id === id) || null;
  }

  getKeyMetrics(competitorId: string): MetricData[] {
    const competitor = this.getCompetitorById(competitorId);
    if (!competitor) return [];

    return [
      {
        id: 'market-share',
        name: 'Market Share',
        value: `${competitor.marketShare}%`,
        change: 2.5,
        trend: 'up',
        category: 'performance'
      },
      {
        id: 'customer-satisfaction',
        name: 'Customer Satisfaction',
        value: `${competitor.customerSatisfaction}/10`,
        change: 0.3,
        trend: 'up',
        category: 'engagement'
      },
      {
        id: 'revenue-growth',
        name: 'Revenue Growth',
        value: `${competitor.revenueGrowth}%`,
        change: -1.2,
        trend: 'down',
        category: 'growth'
      }
    ];
  }

  getActivityTimeline(competitorId: string): ActivityItem[] {
    return ACTIVITY_DATA.filter(activity =>
      activity.competitor === this.getCompetitorById(competitorId)?.name
    );
  }

  getCompetitorComparison(): { competitor: string; satisfaction: number }[] {
    return MOCK_COMPETITORS.map(comp => ({
      competitor: comp.name,
      satisfaction: comp.customerSatisfaction
    }));
  }
}

export default new CompetitorAnalyticsService();
