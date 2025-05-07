import React from 'react';
import { Calendar, Users } from 'lucide-react';
import { StudyPartner } from '../types';

interface PartnerCardProps {
  partner: StudyPartner;
  onConnect: (partner: StudyPartner) => void;
}

export function PartnerCard({ partner, onConnect }: PartnerCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={partner.avatarUrl}
          alt={partner.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{partner.name}</h3>
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <Users className="w-4 h-4" />
            <span>{partner.subjects.join(', ')}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">Available: {partner.availability.join(', ')}</span>
        </div>
      </div>

      <button
        onClick={() => onConnect(partner)}
        className="w-full bg-indigo-600 text-white rounded-lg py-2 px-4 hover:bg-indigo-700 transition-colors"
      >
        Connect
      </button>
    </div>
  );
}