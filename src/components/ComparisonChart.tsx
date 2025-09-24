import React from 'react';

interface ComparisonChartProps {
    title: string;
    data: { competitor: string; satisfaction: number }[];
}

const ComparisonChart: React.FC<ComparisonChartProps> = ({ title, data }) => (
  <div className="bg-slate-700 rounded-lg p-4">
    <h3 className="text-white font-medium mb-4">{title}</h3>
    <div className="space-y-3">
      {data.map((item, index) => (
        <div key={index} className="flex items-center justify-between">
          <span className="text-slate-300 text-sm">{item.competitor}</span>
          <div className="flex items-center space-x-2 flex-1 ml-4">
            <div className="flex-1 bg-slate-600 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${(item.satisfaction / 10) * 100}%` }}
              />
            </div>
            <span className="text-white text-sm font-medium">{item.satisfaction}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ComparisonChart;
