import React from 'react';
import { ActivityItem } from '../types';

const ActivityTimeline: React.FC<{ activities: ActivityItem[] }> = ({ activities }) => (
  <div className="bg-slate-700 rounded-lg p-4">
    <h3 className="text-white font-medium mb-4">Activity Timeline</h3>
    <div className="space-y-4">
      {activities.map(activity => (
        <div key={activity.id} className="flex items-start space-x-3">
          <div className="bg-blue-600 p-2 rounded-full">
            {activity.icon}
          </div>
          <div className="flex-1">
            <h4 className="text-white font-medium text-sm">{activity.title}</h4>
            <p className="text-slate-400 text-sm mt-1">{activity.description}</p>
            <span className="text-slate-500 text-xs">
              {activity.date.toLocaleDateString()} • {activity.competitor}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ActivityTimeline;
