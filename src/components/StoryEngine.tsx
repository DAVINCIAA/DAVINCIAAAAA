
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORY_LINES } from '../constants/story';
import { DialogueLine, RelationshipState, CharacterKey, Emotion } from '../types';
import { CharacterSprite } from './CharacterSprite';
import { RelationshipTension } from './RelationshipTension';
import { FacebookShell, MessengerShell, CallShell } from './UIShells';

export const StoryEngine = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState<DialogueLine[]>([]);
  const [stats, setStats] = useState<RelationshipState>({
    kysh: 0, quin: 0, yira: 0, yafi: 0, rod: 0
  });
  const [lastChange, setLastChange] = useState<{ name: string, value: number } | undefined>();
  const [isFinishing, setIsFinishing] = useState(false);

  const currentLine = STORY_LINES[currentIndex];

  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [glitch, setGlitch] = useState(false);

  const handleNoButtonHover = () => {
    if (currentLine?.id === 'final_choice') {
      setNoButtonPos({
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 200,
      });
    }
  };

  const handleNext = useCallback((nextId?: string) => {
    if (!currentLine) return;

    if (nextId === 'final_no') {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 500);
    }

    // Apply effects if any
    if (currentLine.effects) {
      setStats(prev => {
        const next = { ...prev };
        Object.entries(currentLine.effects!).forEach(([key, val]) => {
          (next as any)[key] += val;
          setLastChange({ name: key, value: val });
        });
        return next;
      });
      setTimeout(() => setLastChange(undefined), 3000);
    }

    setHistory(prev => [currentLine, ...prev]);

    if (nextId) {
      const targetIndex = STORY_LINES.findIndex(l => l.id === nextId);
      if (targetIndex !== -1) {
        setCurrentIndex(targetIndex);
        return;
      }
    }

    if (currentIndex < STORY_LINES.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsFinishing(true);
    }
  }, [currentIndex, currentLine]);

  useEffect(() => {
    if (currentLine?.autoNext) {
      const timer = setTimeout(() => handleNext(), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentLine, handleNext]);

  const renderContent = () => {
    if (!currentLine) return null;

    switch (currentLine.type) {
      case 'facebook':
        return (
          <FacebookShell>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
              <div className="flex gap-2 items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-slate-300" />
                <div className="font-bold text-sm">Ziane Caelan</div>
              </div>
              <div className="text-sm">{currentLine.text}</div>
            </div>
          </FacebookShell>
        );
      
      case 'messenger':
        return (
          <MessengerShell groupName={currentLine.character === 'rod' || currentLine.character === 'yira' ? "MnF GC" : "Truth GC"}>
            <AnimatePresence>
              {history.filter(h => h.type === 'messenger').slice(0, 10).map((h, i) => (
                <motion.div
                  key={`${h.id}-${i}`}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className={`flex gap-2 ${h.character === 'ziane' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-8 h-8 rounded-full shrink-0 ${h.character === 'ziane' ? 'bg-blue-500' : 'bg-gray-300'}`} />
                  <div className={`p-3 rounded-2xl max-w-[80%] text-sm shadow-sm ${
                    h.character === 'ziane' ? 'bg-blue-500 text-white rounded-tr-none' : 'bg-gray-100 text-slate-800 rounded-tl-none'
                  }`}>
                    {h.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </MessengerShell>
        );

      case 'call':
        return (
          <CallShell>
            {['ziane', 'quin', 'yafi', 'kysh', 'cyren'].map((char) => (
                <div key={char} className="flex flex-col items-center gap-2">
                    <div className={`w-24 h-24 rounded-full border-2 flex items-center justify-center overflow-hidden bg-slate-800 ${currentLine.character === char ? 'border-green-500 scale-110' : 'border-white/20 opacity-50'}`}>
                         <div className="text-white font-bold text-lg uppercase">{char[0]}</div>
                    </div>
                    <div className="text-white/80 text-xs font-semibold">{char}</div>
                </div>
            ))}
          </CallShell>
        );

      default:
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-end pb-48">
            <div className="absolute inset-0 flex items-center justify-around px-8">
                {currentLine.character !== 'system' && (
                    <CharacterSprite 
                        characterId={currentLine.character} 
                        emotion={currentLine.emotion || 'neutral'} 
                        isSpeaking={true}
                    />
                )}
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`fixed inset-0 overflow-hidden font-sans select-none ${currentLine?.background || 'bg-slate-50'}`}>
      <RelationshipTension stats={stats} lastChange={lastChange} />

      <main className="w-full h-full" onClick={() => !currentLine?.choices && handleNext()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLine?.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>

        {/* Dialogue Box Overlay */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6 pointer-events-none">
          <div className="bg-black/60 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl pointer-events-auto">
            <div className="flex flex-col gap-4">
              {currentLine?.character !== 'system' && (
                <div className="text-pink-400 font-bold text-xs uppercase tracking-widest">
                  {currentLine?.character}
                </div>
              )}
              <div className="text-white text-lg leading-relaxed font-medium">
                {currentLine?.text}
              </div>
              
              {currentLine?.choices && (
                <div className="flex flex-col gap-2 mt-4 relative">
                  {currentLine.choices.map((choice, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                      whileTap={{ scale: 0.98 }}
                      onMouseEnter={() => choice.text === 'NO' && handleNoButtonHover()}
                      animate={choice.text === 'NO' ? { x: noButtonPos.x, y: noButtonPos.y } : {}}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext(choice.nextId);
                      }}
                      className={`bg-white/10 border border-white/20 py-3 px-6 rounded-xl text-white font-semibold text-left transition-colors ${
                        choice.text === 'YES' ? 'shadow-[0_0_20px_rgba(255,255,255,0.1)] active:bg-pink-500/20' : ''
                      }`}
                    >
                      {choice.text}
                    </motion.button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Glitch Overlay */}
      <AnimatePresence>
        {glitch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0, 1, 0] }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/20 z-[100] pointer-events-none mix-blend-difference"
          />
        )}
      </AnimatePresence>

      {/* Atmospheric filters */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent mix-blend-overlay" />
      <div className="fixed inset-0 pointer-events-none backdrop-brightness-[0.98]" />
    </div>
  );
};
