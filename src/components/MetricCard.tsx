import React from 'react';
import { TrendingUp } from 'lucide-react';
import { MetricData } from '../types';

const MetricCard: React.FC<{ metric: MetricData }> = ({ metric }) => (
  <div className="bg-slate-700 rounded-lg p-4">
    <div className="text-slate-400 text-sm mb-2">{metric.name}</div>
    <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>
    {metric.change && (
      <div className={`flex items-center text-sm ${
        metric.trend === 'up' ? 'text-green-400' : metric.trend === 'down' ? 'text-red-400' : 'text-slate-400'
      }`}>
        <TrendingUp className={`w-4 h-4 mr-1 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
        {Math.abs(metric.change)}% vs last period
      </div>
    )}
  </div>
);

export default MetricCard;
