/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StoryEngine } from './components/StoryEngine';

/**
 * PROJECT TITLE: “Worth to Tell?”
 * IMPORTANT RULE: 
 * DO NOT CHANGE ANY STORY DETAILS, DIALOGUE, CHARACTER RELATIONSHIPS, OR EVENT ORDER.
 * THE STORY MUST REMAIN EXACTLY AS WRITTEN.
 */

export default function App() {
  return (
    <div className="w-screen h-screen bg-black overflow-hidden select-none touch-none">
      <StoryEngine />
      
      {/* Cinematic Vignette */}
      <div className="fixed inset-0 pointer-events-none soft-overlay" />
    </div>
  );
}
