
import { motion } from 'motion/react';
import { Emotion, CharacterKey } from '../types';

interface CharacterSpriteProps {
  characterId: CharacterKey;
  emotion?: Emotion;
  isSpeaking?: boolean;
}

const emotionStyles: Record<Emotion, string> = {
  neutral: '',
  happy: 'brightness-110 saturate-110',
  sad: 'brightness-75 saturate-50 grayscale-25',
  angry: 'brightness-90 saturate-150 hue-rotate-[-10deg]',
  embarrassed: 'brightness-105 saturate-125 sepia-25',
  flirty: 'brightness-110 saturate-150 contrast-110',
  shocked: 'contrast-125 brightness-125 scale-105',
  crying: 'brightness-70 saturate-75',
  serious: 'contrast-110 brightness-90',
};

// Simplified SVG Characters for visual novel feel
const CharacterSVG = ({ id, emotion }: { id: CharacterKey; emotion: Emotion }) => {
  const colors: Record<CharacterKey, string> = {
    ziane: '#4fb',
    kysh: '#f4b',
    yira: '#4bf',
    quin: '#fb4',
    yafi: '#b4f',
    rod: '#f44',
    system: '#999',
  };

  const skin = '#f8d0b0';
  const hairColor = id === 'ziane' ? '#222' : id === 'rod' ? '#333' : '#555';

  return (
    <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-2xl">
      {/* Body */}
      <path d="M50,400 Q100,100 150,400" fill={colors[id]} />
      {/* Neck */}
      <rect x="90" y="80" width="20" height="30" fill={skin} />
      {/* Head */}
      <circle cx="100" cy="60" r="45" fill={skin} />
      {/* Hair */}
      <path d="M55,60 Q55,10 100,5 Q145,10 145,60 Q145,30 130,20 Q100,10 70,20 Q55,30 55,60" fill={hairColor} />
      
      {/* Eyes */}
      <g>
        <circle cx="85" cy="55" r="3" fill="#000" />
        <circle cx="115" cy="55" r="3" fill="#000" />
        {emotion === 'crying' && (
          <motion.path 
            d="M85,60 L85,75" 
            stroke="#4bf" 
            strokeWidth="2" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, height: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        )}
      </g>

      {/* Mouth */}
      <motion.path
        d={emotion === 'happy' ? "M85,80 Q100,95 115,80" : emotion === 'sad' || emotion === 'crying' ? "M85,90 Q100,75 115,90" : "M85,85 Q100,85 115,85"}
        stroke="#000"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

export const CharacterSprite = ({ characterId, emotion = 'neutral', isSpeaking }: CharacterSpriteProps) => {
  if (characterId === 'system') return null;

  return (
    <motion.div
      className={`relative w-48 md:w-64 h-80 md:h-[500px] ${emotionStyles[emotion]}`}
      initial={{ y: 50, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        scale: isSpeaking ? 1.05 : 1,
      }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      {/* Breathing animation */}
      <motion.div
        animate={{
          scaleY: [1, 1.01, 1],
          y: [0, -2, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <CharacterSVG id={characterId} emotion={emotion} />
      </motion.div>

      {/* Speaking Indicator */}
      {isSpeaking && (
        <motion.div
          className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-lg text-xs font-bold"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          Typing...
        </motion.div>
      )}
    </motion.div>
  );
};
