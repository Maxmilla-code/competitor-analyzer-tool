import React from 'react';

export interface Competitor {
  id: string;
  name: string;
  logo?: string;
  marketShare: number;
  customerSatisfaction: number;
  revenueGrowth: number;
  status: 'active' | 'monitoring' | 'archived';
  lastUpdated: Date;
}

export interface MetricData {
  id: string;
  name: string;
  value: string | number;
  change?: number;
  trend: 'up' | 'down' | 'stable';
  category: 'performance' | 'engagement' | 'growth';
}

export interface ActivityItem {
  id: string;
  type: 'product_launch' | 'market_expansion' | 'partnership' | 'funding';
  title: string;
  description: string;
  date: Date;
  competitor: string;
  icon: React.ReactNode;
}

export interface ReportSection {
  id: string;
  title: string;
  type: 'summary' | 'metrics' | 'market_share' | 'activity' | 'chart';
  isCollapsed: boolean;
}
