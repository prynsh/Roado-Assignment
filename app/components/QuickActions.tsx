import React from "react";

interface CardProps {
  icon: JSX.Element | string;
  title: string;
}

export const QuickActionsCard = ({ icon, title }: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="text-4xl">{icon}</div>
      <p className="mt-2 text-sm font-medium">{title}</p>
    </div>
  );
};
