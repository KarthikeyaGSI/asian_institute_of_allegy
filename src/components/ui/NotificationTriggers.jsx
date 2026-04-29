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

const NOTIFICATIONS = [
  // Bookings (Social Proof)
  { id: 1, type: 'booking', name: 'Rahul M.', location: 'Hyderabad', action: 'just booked a consultation', icon: Calendar, color: 'text-blue-400' },
  { id: 2, type: 'booking', name: 'Priya S.', location: 'Bangalore', action: 'scheduled a follow-up', icon: Calendar, color: 'text-emerald-400' },
  { id: 3, type: 'booking', name: 'Dr. Anjali', location: 'Vizag', action: 'referred a complex case', icon: UserCheck, color: 'text-purple-400' },
  { id: 4, type: 'booking', name: 'Suresh K.', location: 'Chennai', action: 'completed a diagnostic quiz', icon: CheckCircle2, color: 'text-blue-400' },
  { id: 5, type: 'booking', name: 'Karthik R.', location: 'Hyderabad', action: 'joined the SLIT program', icon: Zap, color: 'text-amber-400' },

  // Clinical / System Triggers
  { id: 6, type: 'system', title: 'Trigger Mapping Session', content: 'In progress for 12+ patients today', icon: MapPin, color: 'text-rose-400' },
  { id: 7, type: 'system', title: 'Safe Engine Active', content: 'Monitoring environmental allergens', icon: ShieldCheck, color: 'text-indigo-400' },
  { id: 8, type: 'system', title: 'Pollutants Analysis', content: 'Local AQI updated for Hyderabad', icon: Activity, color: 'text-orange-400' },
  { id: 9, type: 'system', title: 'Clinical Precision', content: 'AI-driven diagnostic engine online', icon: Zap, color: 'text-cyan-400' },

  // Availability / Time Relevant
  { id: 10, type: 'availability', title: 'Doctor Availability', content: 'Dr. Vyakarnam is currently taking consults', icon: UserCheck, color: 'text-emerald-400', time: 'day' },
  { id: 11, type: 'availability', title: 'Video Consultations', content: 'Slots open for evening tele-health', icon: Activity, color: 'text-blue-400', time: 'evening' },
  { id: 12, type: 'availability', title: 'Emergency Support', content: '24/7 allergy crisis line active', icon: Bell, color: 'text-rose-500', time: 'night' },
  { id: 13, type: 'availability', title: 'Early Birds', content: 'Morning slots for 6:00 AM available', icon: Clock, color: 'text-amber-400', time: 'morning' },

  // Contextual Stuff
  { id: 14, type: 'info', title: 'Knowledge Base', content: 'New study on SLIT effectiveness published', icon: CheckCircle2, color: 'text-emerald-400' },
  { id: 15, type: 'info', title: 'Hyderabad Update', content: 'High pollen count expected tomorrow', icon: Activity, color: 'text-amber-500' },
];

const NotificationTriggers = () => {
  const [currentNotification, setCurrentNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const getTimeContext = () => {
    const hour = new Date().getHours();
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
      const relevant = NOTIFICATIONS.filter(n => !n.time || n.time === timeContext || n.time === 'any');
      
      setCurrentNotification(prev => {
        let next;
        do {
          next = relevant[Math.floor(Math.random() * relevant.length)];
        } while (prev && next.id === prev.id && relevant.length > 1);
        return next;
      });

      setIsVisible(true);

      // Hide after 6 seconds
      visibilityTimeoutId = setTimeout(() => {
        setIsVisible(false);
        // Schedule next notification after hiding (10-25s delay)
        const nextInterval = Math.random() * (25000 - 10000) + 10000;
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
            initial={{ opacity: 0, y: 50, scale: 0.9, x: -20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }}
            className="pointer-events-auto"
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
                        <span className="text-sm font-semibold text-white/90">
                          {currentNotification.name}
                          <span className="text-white/40 font-normal ml-1">from</span>
                          <span className="text-blue-300 ml-1">{currentNotification.location}</span>
                        </span>
                        <p className="text-xs text-white/60 mt-0.5">
                          {currentNotification.action}
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white/90">
                          {currentNotification.title}
                        </span>
                        <p className="text-xs text-white/60 mt-0.5 leading-relaxed">
                          {currentNotification.content}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Close Indicator (Subtle) */}
                  <div className="h-full flex flex-col items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="text-[10px] text-white/20 font-mono">LIVE</span>
                  </div>
                </div>

                {/* Progress Bar (Timer) */}
                <motion.div 
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500/50 to-purple-500/50"
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
