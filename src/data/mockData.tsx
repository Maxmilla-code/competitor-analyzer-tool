import { Competitor, ActivityItem } from '../types';
import { Star, Globe, Share2 } from 'lucide-react';
import React from 'react';

export const MOCK_COMPETITORS: Competitor[] = [
  {
    id: 'comp-a',
    name: 'Competitor A',
    marketShare: 25,
    customerSatisfaction: 8.5,
    revenueGrowth: 15,
    status: 'active',
    lastUpdated: new Date('2024-01-15')
  },
  {
    id: 'comp-b',
    name: 'Competitor B',
    marketShare: 18,
    customerSatisfaction: 7.8,
    revenueGrowth: 12,
    status: 'monitoring',
    lastUpdated: new Date('2024-01-14')
  },
  {
    id: 'comp-c',
    name: 'Competitor C',
    marketShare: 22,
    customerSatisfaction: 8.1,
    revenueGrowth: 18,
    status: 'active',
    lastUpdated: new Date('2024-01-16')
  },
  {
    id: 'comp-d',
    name: 'Competitor D',
    marketShare: 12,
    customerSatisfaction: 7.2,
    revenueGrowth: 8,
    status: 'monitoring',
    lastUpdated: new Date('2024-01-13')
  },
  {
    id: 'comp-e',
    name: 'Competitor E',
    marketShare: 15,
    customerSatisfaction: 8.0,
    revenueGrowth: 20,
    status: 'active',
    lastUpdated: new Date('2024-01-17')
  }
];

export const ACTIVITY_DATA: ActivityItem[] = [
  {
    id: 'act-1',
    type: 'product_launch',
    title: 'Product Launch',
    description: 'Launched new enterprise solution targeting mid-market customers',
    date: new Date('2024-01-15'),
    competitor: 'Competitor A',
    icon: <Star className="w-4 h-4" />
  },
  {
    id: 'act-2',
    type: 'market_expansion',
    title: 'Market Expansion',
    description: 'Expanded operations to 3 new European markets',
    date: new Date('2024-01-10'),
    competitor: 'Competitor A',
    icon: <Globe className="w-4 h-4" />
  },
  {
    id: 'act-3',
    type: 'partnership',
    title: 'Partnership Announcement',
    description: 'Strategic partnership with leading technology provider',
    date: new Date('2024-01-08'),
    competitor: 'Competitor A',
    icon: <Share2 className="w-4 h-4" />
  }
];
