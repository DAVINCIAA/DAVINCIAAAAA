
export type CharacterKey = 'ziane' | 'kysh' | 'yira' | 'quin' | 'yafi' | 'rod' | 'system';

export type Emotion = 'neutral' | 'happy' | 'sad' | 'angry' | 'embarrassed' | 'flirty' | 'shocked' | 'crying' | 'serious';

export interface Character {
  id: CharacterKey;
  name: string;
  avatar?: string;
  color: string;
}

export interface RelationshipState {
  kysh: number;
  quin: number;
  yira: number;
  yafi: number;
  rod: number;
}

export type SceneType = 'story' | 'facebook' | 'messenger' | 'call' | 'reveal' | 'final';

export interface Choice {
  text: string;
  nextId: string;
  effects?: Partial<RelationshipState>;
}

export interface DialogueLine {
  id: string;
  character: CharacterKey;
  text: string;
  emotion?: Emotion;
  background?: string;
  transition?: 'fade' | 'zoom' | 'slide';
  choices?: Choice[];
  type?: SceneType;
  autoNext?: boolean;
  onEnter?: () => void;
}
