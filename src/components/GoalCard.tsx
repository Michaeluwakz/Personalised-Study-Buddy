import React from 'react';
import { Clock, BookOpen, Trophy } from 'lucide-react';
import { StudyGoal } from '../types';

interface GoalCardProps {
  goal: StudyGoal;
  onEdit: (goal: StudyGoal) => void;
}

export function GoalCard({ goal, onEdit }: GoalCardProps) {
  const progress = (goal.completedHours / goal.targetHours) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <BookOpen className="w-6 h-6 text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-800">{goal.subject}</h3>
        </div>
        <button
          onClick={() => onEdit(goal)}
          className="text-gray-500 hover:text-indigo-600 transition-colors"
        >
          Edit
        </button>
      </div>
      
      <p className="text-gray-600 mb-4">{goal.description}</p>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600">Progress</span>
          </div>
          <span className="font-medium">
            {goal.completedHours}/{goal.targetHours}h
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 rounded-full h-2 transition-all duration-300"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}