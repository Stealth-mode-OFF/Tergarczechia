import { useState, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MeditationTimerProps {
  onClose?: () => void;
}

export function MeditationTimer({ onClose }: MeditationTimerProps) {
  const [duration, setDuration] = useState(5); // minutes
  const [timeLeft, setTimeLeft] = useState(300); // seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    setTimeLeft(duration * 60);
  }, [duration]);

  useEffect(() => {
    let interval: number | undefined;
    
    if (isRunning && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsComplete(true);
            if (soundEnabled) {
              playBell();
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, soundEnabled]);

  const playBell = () => {
    // Create a simple bell sound using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 528; // Hz - meditation frequency
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 2);
  };

  const toggleTimer = useCallback(() => {
    if (isComplete) {
      setIsComplete(false);
      setTimeLeft(duration * 60);
    } else {
      setIsRunning(!isRunning);
      if (!isRunning && soundEnabled) {
        playBell();
      }
    }
  }, [isRunning, isComplete, duration, soundEnabled]);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    setIsComplete(false);
    setTimeLeft(duration * 60);
  }, [duration]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((duration * 60 - timeLeft) / (duration * 60)) * 100;

  const presetDurations = [5, 10, 15, 20, 30, 45, 60];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-2xl max-w-md w-full"
    >
      <div className="text-center space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Meditační časovač</h2>
          <p className="text-sm text-slate-600">Najděte svůj klid a mír</p>
        </div>

        {/* Timer Display */}
        <div className="relative">
          {/* Progress Circle */}
          <svg className="w-64 h-64 mx-auto -rotate-90">
            <circle
              cx="128"
              cy="128"
              r="120"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="8"
            />
            <motion.circle
              cx="128"
              cy="128"
              r="120"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 120}
              initial={{ strokeDashoffset: 2 * Math.PI * 120 }}
              animate={{ 
                strokeDashoffset: 2 * Math.PI * 120 * (1 - progress / 100)
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </svg>

          {/* Time Display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              key={timeLeft}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="text-6xl font-bold text-slate-800 font-mono"
            >
              {formatTime(timeLeft)}
            </motion.div>
          </div>

          {/* Complete Message */}
          <AnimatePresence>
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <p className="text-2xl font-bold text-green-600 mb-2">Úžasná práce! 🙏</p>
                  <p className="text-sm text-slate-600">Vaše meditace je dokončena</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Duration Presets */}
        {!isRunning && !isComplete && (
          <div className="space-y-3">
            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Vyberte dobu trvání
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {presetDurations.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setDuration(preset)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    duration === preset
                      ? 'bg-blue-500 text-white shadow-lg scale-105'
                      : 'bg-white text-slate-700 hover:bg-blue-50 hover:shadow-md'
                  }`}
                >
                  {preset} min
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={resetTimer}
            className="p-3 rounded-full bg-white text-slate-600 hover:bg-slate-100 transition-colors shadow-md"
            aria-label="Reset timer"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          <button
            onClick={toggleTimer}
            className="p-6 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            aria-label={isRunning ? 'Pause' : 'Start'}
          >
            {isRunning ? (
              <Pause className="w-8 h-8" />
            ) : (
              <Play className="w-8 h-8 ml-1" />
            )}
          </button>

          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-3 rounded-full bg-white text-slate-600 hover:bg-slate-100 transition-colors shadow-md"
            aria-label={soundEnabled ? 'Mute sound' : 'Enable sound'}
          >
            {soundEnabled ? (
              <Volume2 className="w-5 h-5" />
            ) : (
              <VolumeX className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Tips */}
        {!isRunning && !isComplete && (
          <div className="bg-blue-50 rounded-xl p-4 text-left">
            <p className="text-xs font-semibold text-blue-900 mb-2">💡 Tip</p>
            <p className="text-sm text-blue-800">
              Začněte s kratší meditací (5-10 minut) a postupně prodlužujte. 
              Pravidelnost je důležitější než délka.
            </p>
          </div>
        )}

        {/* Close button (if provided) */}
        {onClose && (
          <button
            onClick={onClose}
            className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            Zavřít časovač
          </button>
        )}
      </div>
    </motion.div>
  );
}
