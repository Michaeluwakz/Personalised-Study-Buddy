export interface StudyGoal {
  id: string;
  subject: string;
  description: string;
  targetHours: number;
  completedHours: number;
}

export interface StudySession {
  id: string;
  goalId: string;
  startTime: string;
  duration: number;
}

export interface StudyPartner {
  id: string;
  name: string;
  subjects: string[];
  availability: string[];
  avatarUrl: string;
}