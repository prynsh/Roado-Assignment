import React from "react";

interface Activity {
  user: string;
  role: string;
  action: string;
  loadNumber: string;
  location?: string;
  note?: string;
}

interface CompletedActivitiesProps {
  activities: Activity[];
}

export const Activity: React.FC<CompletedActivitiesProps> = ({
  activities,
}) => {
  return (
    <div className="w-full">
      <div className="bg-white shadow rounded-lg border border-gray-500">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="p-4 border-b border-gray-500 last:border-b-0"
          >
            <p>
              <span className="font-semibold">{activity.user}</span>{" "}
              <span className="text-gray-500">({activity.role})</span>{" "}
              {activity.action}{" "}
              <span className="font-semibold">{activity.loadNumber}</span>
            </p>
            {activity.location && (
              <p className="text-gray-600">at {activity.location}</p>
            )}
            {activity.note && <p className="text-gray-600">{activity.note}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};
