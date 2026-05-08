
import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { Search, Home, Users, Bell, Menu, MessageCircle, Phone, Video, Info } from 'lucide-react';

export const FacebookShell = ({ children }: { children: ReactNode }) => (
  <div className="w-full h-full bg-[#f0f2f5] flex flex-col overflow-hidden">
    <div className="bg-white border-b border-gray-300 px-4 py-2 flex justify-between items-center shrink-0">
      <div className="text-[#1877f2] font-bold text-2xl">facebook</div>
      <div className="flex gap-2">
        <div className="p-2 bg-gray-100 rounded-full"><Search size={20} /></div>
        <div className="p-2 bg-gray-100 rounded-full"><MessageCircle size={20} /></div>
      </div>
    </div>
    <div className="flex justify-around border-b border-gray-300 bg-white shrink-0">
      <div className="p-3 border-b-2 border-[#1877f2] text-[#1877f2]"><Home /></div>
      <div className="p-3 text-gray-500"><Users /></div>
      <div className="p-3 text-gray-500 relative">
        <Bell />
        <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] px-1 rounded-full">3</div>
      </div>
      <div className="p-3 text-gray-500"><Menu /></div>
    </div>
    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
      {children}
    </div>
  </div>
);

export const MessengerShell = ({ children, groupName = "MnF GC" }: { children: ReactNode, groupName?: string }) => (
  <div className="w-full h-full bg-white flex flex-col overflow-hidden">
    <div className="p-4 border-b border-gray-100 flex items-center justify-between shadow-sm shrink-0">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
          {groupName[0]}
        </div>
        <div>
          <div className="font-bold text-sm">{groupName}</div>
          <div className="text-xs text-green-500">Active now</div>
        </div>
      </div>
      <div className="flex gap-4 text-blue-500">
        <Phone size={20} />
        <Video size={20} />
        <Info size={20} />
      </div>
    </div>
    <div className="flex-1 overflow-y-auto p-4 flex flex-col-reverse gap-4">
      {children}
    </div>
  </div>
);

export const CallShell = ({ children }: { children: ReactNode }) => (
  <div className="w-full h-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
    <div className="absolute top-10 flex flex-col items-center gap-1">
      <div className="text-white/60 text-xs font-medium uppercase tracking-[0.2em]">Voice Call</div>
      <div className="text-white font-bold text-lg">MnF Call GC</div>
    </div>
    
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 p-10">
      {children}
    </div>

    <div className="absolute bottom-20 flex gap-6">
      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white"><Video /></div>
      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(220,38,38,0.5)]"><Phone className="rotate-[135deg]" /></div>
      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white"><Info /></div>
    </div>

    {/* Voice visualization */}
    <div className="absolute bottom-0 w-full h-32 flex items-center justify-center gap-1">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-white/30 rounded-full"
          animate={{ height: [20, 60, 20] }}
          transition={{ repeat: Infinity, duration: 1, delay: i * 0.05 }}
        />
      ))}
    </div>
  </div>
);
