import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Video, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface PracticeSession {
  id: string;
  title: string;
  day: string;
  time: string;
  location: string;
  type: 'online' | 'in-person';
  participants?: number;
  teacher?: string;
  link: string;
}

const practiceSessions: PracticeSession[] = [
  {
    id: '1',
    title: 'Ranní meditace',
    day: 'Pondělí - Pátek',
    time: '7:00 - 7:30',
    location: 'Online',
    type: 'online',
    participants: 15,
    link: 'https://app.zenamu.com/tergarczechia',
  },
  {
    id: '2',
    title: 'Středeční večerní setkání',
    day: 'Středa',
    time: '18:30 - 20:00',
    location: 'Praha - Tibet Open House',
    type: 'in-person',
    participants: 25,
    teacher: 'Instruktor Tergar',
    link: 'https://app.zenamu.com/tergarczechia',
  },
  {
    id: '3',
    title: 'Nedělní skupinová praxe',
    day: 'Neděle',
    time: '17:00 - 18:30',
    location: 'České Budějovice',
    type: 'in-person',
    participants: 12,
    link: 'https://app.zenamu.com/tergarczechia',
  },
  {
    id: '4',
    title: 'Večerní mindfulness',
    day: 'Čtvrtek',
    time: '20:00 - 20:45',
    location: 'Online',
    type: 'online',
    participants: 20,
    link: 'https://app.zenamu.com/tergarczechia',
  },
];

export function GroupPracticeWidget() {
  const [selectedType, setSelectedType] = useState<'all' | 'online' | 'in-person'>('all');

  const filteredSessions = practiceSessions.filter(
    session => selectedType === 'all' || session.type === selectedType
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Pravidelné skupinové meditace</h3>
        <p className="text-slate-600">Připojte se k naší komunitě praktikujících</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 bg-slate-50 p-1 rounded-lg">
        {[
          { value: 'all' as const, label: 'Vše' },
          { value: 'online' as const, label: 'Online' },
          { value: 'in-person' as const, label: 'Osobně' },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setSelectedType(tab.value)}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-semibold transition-all ${
              selectedType === tab.value
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Sessions List */}
      <div className="space-y-3">
        {filteredSessions.map((session, index) => (
          <motion.div
            key={session.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a
              href={session.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-4 hover:shadow-md transition-all border border-slate-100 hover:border-blue-200 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  {/* Title & Badge */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {session.title}
                    </h4>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        session.type === 'online'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {session.type === 'online' ? (
                        <span className="flex items-center gap-1">
                          <Video className="w-3 h-3" />
                          Online
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          Osobně
                        </span>
                      )}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {session.day}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {session.time}
                    </span>
                    {session.participants && (
                      <span className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        ~{session.participants} účastníků
                      </span>
                    )}
                  </div>

                  {/* Location */}
                  <p className="text-sm text-slate-500 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {session.location}
                  </p>

                  {/* Teacher */}
                  {session.teacher && (
                    <p className="text-xs text-slate-500">
                      Vede: {session.teacher}
                    </p>
                  )}
                </div>

                {/* Arrow Icon */}
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-6 pt-6 border-t border-slate-100">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
          <p className="text-sm text-slate-700 mb-3">
            <strong>Nový v meditaci?</strong> Všechna setkání jsou otevřená začátečníkům i zkušeným praktikujícím.
          </p>
          <a
            href="https://app.zenamu.com/tergarczechia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors"
          >
            Zobrazit celý kalendář
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
