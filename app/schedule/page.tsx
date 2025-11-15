'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Link from 'next/link';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface StudySession {
  id: string;
  date: Date;
  subject: string;
  duration: string;
  notes: string;
}

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [sessions, setSessions] = useState<StudySession[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    duration: '',
    notes: '',
  });

  const handleDateChange = (value: Value) => {
    setSelectedDate(value);
    setShowForm(false);
  };

  const handleAddSession = () => {
    if (!selectedDate || Array.isArray(selectedDate)) return;

    if (formData.subject && formData.duration) {
      const newSession: StudySession = {
        id: Date.now().toString(),
        date: selectedDate,
        subject: formData.subject,
        duration: formData.duration,
        notes: formData.notes,
      };

      setSessions([...sessions, newSession]);
      setFormData({ subject: '', duration: '', notes: '' });
      setShowForm(false);
    }
  };

  const handleDeleteSession = (id: string) => {
    setSessions(sessions.filter(session => session.id !== id));
  };

  const getSessionsForDate = (date: Date) => {
    return sessions.filter(
      session =>
        session.date.toDateString() === date.toDateString()
    );
  };

  const selectedDateSessions = selectedDate && !Array.isArray(selectedDate)
    ? getSessionsForDate(selectedDate)
    : [];

  const tileClassName = ({ date }: { date: Date }) => {
    const hasSessions = getSessionsForDate(date).length > 0;
    return hasSessions ? 'has-sessions' : '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-green-800">Study Schedule</h1>
          <Link
            href="/"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-colors"
          >
            Home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Calendar</h2>
            <div className="calendar-container">
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                tileClassName={tileClassName}
                className="rounded-lg border-2 border-green-200"
              />
            </div>
          </div>

          {/* Sessions Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              {selectedDate && !Array.isArray(selectedDate)
                ? `Sessions for ${selectedDate.toLocaleDateString()}`
                : 'Select a date'}
            </h2>

            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-3 rounded-lg shadow-md transition-colors mb-4"
              >
                + Add Study Session
              </button>
            )}

            {showForm && (
              <div className="mb-6 p-4 bg-green-50 rounded-lg">
                <h3 className="font-bold text-green-800 mb-3">New Study Session</h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Subject (e.g., Algebra, Calculus)"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="text"
                    placeholder="Duration (e.g., 2 hours, 45 min)"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <textarea
                    placeholder="Notes (optional)"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-20 resize-none"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleAddSession}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setShowForm(false);
                        setFormData({ subject: '', duration: '', notes: '' });
                      }}
                      className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Sessions List */}
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {selectedDateSessions.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  No study sessions scheduled for this date
                </p>
              ) : (
                selectedDateSessions.map((session) => (
                  <div
                    key={session.id}
                    className="bg-green-50 rounded-lg p-4 border border-green-200"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-green-800 text-lg">
                        {session.subject}
                      </h4>
                      <button
                        onClick={() => handleDeleteSession(session.id)}
                        className="text-red-600 hover:text-red-800 font-bold"
                      >
                        ×
                      </button>
                    </div>
                    <p className="text-green-700 mb-1">
                      <span className="font-semibold">Duration:</span> {session.duration}
                    </p>
                    {session.notes && (
                      <p className="text-green-600 text-sm">
                        <span className="font-semibold">Notes:</span> {session.notes}
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* All Sessions Overview */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-4">All Upcoming Sessions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sessions
              .filter(session => session.date >= new Date(new Date().setHours(0, 0, 0, 0)))
              .sort((a, b) => a.date.getTime() - b.date.getTime())
              .map((session) => (
                <div
                  key={session.id}
                  className="bg-green-50 rounded-lg p-4 border border-green-200"
                >
                  <p className="text-sm text-green-600 mb-1">
                    {session.date.toLocaleDateString()}
                  </p>
                  <h4 className="font-bold text-green-800 mb-1">{session.subject}</h4>
                  <p className="text-green-700 text-sm">{session.duration}</p>
                </div>
              ))}
            {sessions.filter(session => session.date >= new Date(new Date().setHours(0, 0, 0, 0))).length === 0 && (
              <p className="text-gray-500 col-span-full text-center py-8">
                No upcoming study sessions
              </p>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .calendar-container .react-calendar {
          width: 100%;
          border: none;
          font-family: inherit;
        }

        .calendar-container .react-calendar__tile--active {
          background: #16a34a;
          color: white;
        }

        .calendar-container .react-calendar__tile--active:enabled:hover,
        .calendar-container .react-calendar__tile--active:enabled:focus {
          background: #15803d;
        }

        .calendar-container .react-calendar__tile--now {
          background: #dcfce7;
        }

        .calendar-container .react-calendar__tile:enabled:hover,
        .calendar-container .react-calendar__tile:enabled:focus {
          background: #bbf7d0;
        }

        .calendar-container .has-sessions {
          background: #fef3c7 !important;
          font-weight: bold;
        }

        .calendar-container .has-sessions:hover {
          background: #fde68a !important;
        }
      `}</style>
    </div>
  );
}
