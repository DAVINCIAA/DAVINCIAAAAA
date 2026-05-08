
import { motion, AnimatePresence } from 'motion/react';
import { RelationshipState } from '../types';
import { Users } from 'lucide-react';

interface RelationshipTensionProps {
  stats: RelationshipState;
  lastChange?: { name: string, value: number };
}

export const RelationshipTension = ({ stats, lastChange }: RelationshipTensionProps) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {lastChange && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="bg-black/80 text-white px-4 py-2 rounded-lg text-sm font-medium border border-white/20 backdrop-blur-sm"
          >
            {lastChange.name} {lastChange.value > 0 ? '+' : ''}{lastChange.value} Tension
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl flex flex-col gap-3 min-w-[160px]">
        <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-wider">
          <Users size={14} />
          <span>Relationships</span>
        </div>
        
        {Object.entries(stats).map(([name, value]) => (
          <div key={name} className="flex flex-col gap-1">
            <div className="flex justify-between text-[10px] text-white/50 uppercase">
              <span>{name}</span>
              <span>{value}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-pink-400 to-rose-500"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, Math.max(0, value))}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
