import React, { useState } from 'react';
import { PlusCircle, GraduationCap } from 'lucide-react';
import { StudyGoal, StudyPartner } from './types';
import { GoalCard } from './components/GoalCard';
import { PartnerCard } from './components/PartnerCard';

function App() {
  const [goals, setGoals] = useState<StudyGoal[]>([
    {
      id: '1',
      subject: 'Mathematics',
      description: 'Master calculus fundamentals',
      targetHours: 20,
      completedHours: 8,
    },
    {
      id: '2',
      subject: 'Physics',
      description: 'Understanding quantum mechanics',
      targetHours: 15,
      completedHours: 5,
    },
  ]);

  const [partners] = useState<StudyPartner[]>([
    {
      id: '1',
      name: 'Sarah Chen',
      subjects: ['Mathematics', 'Physics'],
      availability: ['Mon', 'Wed', 'Fri'],
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    {
      id: '2',
      name: 'Michael Park',
      subjects: ['Chemistry', 'Biology'],
      availability: ['Tue', 'Thu'],
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    },
  ]);

  const handleEditGoal = (goal: StudyGoal) => {
    // Implement edit functionality
    console.log('Editing goal:', goal);
  };

  const handleConnectPartner = (partner: StudyPartner) => {
    // Implement connect functionality
    console.log('Connecting with partner:', partner);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">Study Buddy</h1>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              <PlusCircle className="w-5 h-5 mr-2" />
              Add Goal
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Study Goals</h2>
            <div className="space-y-4">
              {goals.map((goal) => (
                <GoalCard key={goal.id} goal={goal} onEdit={handleEditGoal} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended Study Partners</h2>
            <div className="space-y-4">
              {partners.map((partner) => (
                <PartnerCard
                  key={partner.id}
                  partner={partner}
                  onConnect={handleConnectPartner}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;