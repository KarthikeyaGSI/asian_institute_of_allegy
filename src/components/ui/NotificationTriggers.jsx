"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  UserCheck, 
  Zap, 
  ShieldCheck, 
  Activity,
  Clock
} from 'lucide-react';

const NAMES = [
  'Rahul M.', 'Priya S.', 'Dr. Anjali', 'Suresh K.', 'Karthik R.', 'Ananya G.', 'Vikram P.', 'Sanya H.',
  'John D.', 'Emily W.', 'Aarav N.', 'Meera J.', 'David L.', 'Sarah K.', 'Arjun V.', 'Ishani T.',
  'Zoya R.', 'Omar F.', 'Chen W.', 'Sofia M.', 'Rohan B.', 'Tanvi C.', 'Nikhil D.', 'Sneha K.'
];

const LOCATIONS = [
  'Hyderabad', 'Bangalore', 'Vizag', 'Chennai', 'Mumbai', 'Delhi', 'Pune', 'Kolkata',
  'London', 'New York', 'Dubai', 'Singapore', 'Sydney', 'Toronto', 'Berlin', 'Tokyo',
  'Ahmedabad', 'Jaipur', 'Lucknow', 'Kochi', 'Chandigarh', 'Bhopal', 'Indore', 'Surat'
];

const NOTIFICATIONS = [
  // Bookings (Social Proof) - These will be templates for dynamic selection
  { type: 'booking', action: 'just booked a consultation', icon: Calendar, color: 'text-blue-400' },
  { type: 'booking', action: 'scheduled a follow-up', icon: Calendar, color: 'text-emerald-400' },
  { type: 'booking', action: 'completed a diagnostic quiz', icon: CheckCircle2, color: 'text-blue-400' },
  { type: 'booking', action: 'joined a Trigger mapping session', icon: MapPin, color: 'text-rose-400' },
  { type: 'booking', action: 'joined the SLIT program', icon: Zap, color: 'text-amber-400' },
  { type: 'booking', action: 'requested a second opinion', icon: UserCheck, color: 'text-purple-400' },

  // Clinical / System Triggers
  { type: 'system', title: 'Trigger mapping session', content: 'In progress for 15+ patients globally today', icon: MapPin, color: 'text-rose-400' },
  { type: 'system', title: 'Safe Engine Active', content: 'Analyzing multi-regional allergen data', icon: ShieldCheck, color: 'text-indigo-400' },
  { type: 'system', title: 'Clinical Precision', content: 'AI-driven diagnostic engine online', icon: Zap, color: 'text-cyan-400' },
  { type: 'system', title: 'Pollutants Analysis', content: 'Air quality index monitored for key cities', icon: Activity, color: 'text-orange-400' },

  // Availability / Time Relevant
  { type: 'availability', title: 'Doctor Availability', content: 'Dr. Vyakarnam is currently taking consults', icon: UserCheck, color: 'text-emerald-400', time: 'day' },
  { type: 'availability', title: 'Video Consultations', content: 'Slots open for evening tele-health', icon: Activity, color: 'text-blue-400', time: 'evening' },
  { type: 'availability', title: 'Emergency Support', content: '24/7 allergy crisis line active', icon: Bell, color: 'text-rose-500', time: 'night' },
  { type: 'availability', title: 'Early Birds', content: 'Morning slots for 6:00 AM available', icon: Clock, color: 'text-amber-400', time: 'morning' },

  // Sunday Specials
  { type: 'holiday', title: 'Sunday Consultations', content: 'Book your session today for priority slots tomorrow', icon: Calendar, color: 'text-blue-400', time: 'sunday' },
  { type: 'holiday', title: 'Weekly Health Planning', content: 'Plan your allergy journey this Sunday', icon: Activity, color: 'text-emerald-400', time: 'sunday' },
];

const NotificationTriggers = () => {
  const [currentNotification, setCurrentNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const getTimeContext = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    if (day === 0) return 'sunday';
    if (hour >= 5 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 17) return 'day';
    if (hour >= 17 && hour < 22) return 'evening';
    return 'night';
  };

  useEffect(() => {
    let timeoutId;
    let visibilityTimeoutId;

    const showNext = () => {
      const timeContext = getTimeContext();
      
      // Filter notifications based on time context
      let relevant = NOTIFICATIONS.filter(n => !n.time || n.time === timeContext || (timeContext !== 'sunday' && n.time === 'any'));
      
      // If Sunday, only show holiday/sunday messages + generic bookings
      if (timeContext === 'sunday') {
        relevant = NOTIFICATIONS.filter(n => n.time === 'sunday' || n.type === 'booking');
      }

      setCurrentNotification(prev => {
        let next;
        // Selection logic
        const rawNext = relevant[Math.floor(Math.random() * relevant.length)];
        
        // If it's a booking, populate it with random data
        if (rawNext.type === 'booking') {
          next = {
            ...rawNext,
            id: Math.random(),
            name: NAMES[Math.floor(Math.random() * NAMES.length)],
            location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)]
          };
        } else {
          next = { ...rawNext, id: Math.random() };
        }
        
        return next;
      });

      setIsVisible(true);

      // Hide after 6 seconds
      visibilityTimeoutId = setTimeout(() => {
        setIsVisible(false);
        // Schedule next notification after hiding (8-15s delay for more frequency)
        const nextInterval = Math.random() * (15000 - 8000) + 8000;
        timeoutId = setTimeout(showNext, nextInterval);
      }, 6000);
    };

    // Initial delay before first notification (5s)
    timeoutId = setTimeout(showNext, 5000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(visibilityTimeoutId);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-[9999] pointer-events-none sm:max-w-sm w-[calc(100%-3rem)]">
      <AnimatePresence mode="wait">
        {isVisible && currentNotification && (
          <motion.div
            key={currentNotification.id}
            initial={{ opacity: 0, y: 50, scale: 0.9, x: -20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }}
            className="pointer-events-auto cursor-pointer"
            onClick={() => window.dispatchEvent(new CustomEvent("open-quiz"))}
          >
            <div className="relative group">
              {/* Glassmorphic Container */}
              <div className="overflow-hidden bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/20 transition-colors duration-300">
                
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-start gap-4">
                  {/* Icon Section */}
                  <div className={`mt-1 p-2 rounded-xl bg-white/5 border border-white/5 ${currentNotification.color}`}>
                    <currentNotification.icon size={20} strokeWidth={2.5} />
                  </div>

                    {/* Content Section */}
                    <div className="flex-1 min-w-0">
                      {currentNotification.type === 'booking' ? (
                        <div className="flex flex-col">
                          <span className="text-[15px] font-bold text-white leading-tight">
                            {currentNotification.name}
                            <span className="text-white/50 font-normal ml-1">from</span>
                            <span className="text-blue-300 ml-1">{currentNotification.location}</span>
                          </span>
                          <p className="text-[13px] text-white/70 mt-1 font-medium">
                            {currentNotification.action}
                          </p>
                        </div>
                      ) : (
                        <div className="flex flex-col">
                          <span className="text-[15px] font-bold text-white leading-tight">
                            {currentNotification.title}
                          </span>
                          <p className="text-[13px] text-white/70 mt-1 leading-relaxed font-medium">
                            {currentNotification.content}
                          </p>
                        </div>
                      )}
                    </div>

                  {/* Close Indicator (Subtle) */}
                  <div className="h-full flex flex-col items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="text-[10px] text-primary-accent font-black uppercase tracking-tighter">Click to analyze</span>
                     <span className="text-[10px] text-white/20 font-mono">LIVE</span>
                  </div>
                </div>

                {/* Progress Bar (Timer) */}
                <motion.div 
                  initial={{ scaleX: 1 }}
                  animate={{ scaleX: 0 }}
                  transition={{ duration: 6, ease: "linear" }}
                  style={{ transformOrigin: "left", willChange: "transform" }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/50 to-purple-500/50 origin-left"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationTriggers;
