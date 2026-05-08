import { DialogueLine } from '../types';

export const STORY_LINES: DialogueLine[] = [
  // SCENE 1: BEDROOM
  {
    id: 'start',
    character: 'system',
    text: 'A dim bedroom. The soft hum of a fan fills the silence. Shadows dance on the walls.',
    background: 'bg-slate-900',
    type: 'story',
  },
  {
    id: 'ziane_bed',
    character: 'ziane',
    text: '(I should really get up... but the phone feels so heavy in my hand.)',
    emotion: 'neutral',
    background: 'bg-slate-900/80',
    type: 'story',
    choices: [
      { text: 'Get up', nextId: 'ziane_stands' },
      { text: 'Stay still', nextId: 'ziane_stands' },
      { text: 'Check notifications', nextId: 'ziane_stands' }
    ]
  },
  {
    id: 'ziane_stands',
    character: 'ziane',
    text: 'I drag myself to the study table. The glow of the screen is the only light I need.',
    emotion: 'neutral',
    type: 'story',
    transition: 'fade',
  },
  // SCENE 2: FACEBOOK
  {
    id: 'fb_intro',
    character: 'system',
    text: 'Logging into Facebook...',
    type: 'facebook',
    autoNext: true,
  },
  {
    id: 'fb_scrolling',
    character: 'ziane',
    text: '(Just scrolling... same faces, same dramas. Maybe it’s time to check the RPW account.)',
    type: 'facebook',
    choices: [
      { text: 'Ignore notifications', nextId: 'rpw_join' },
      { text: 'Open RPW immediately', nextId: 'rpw_join' },
      { text: 'Check Messenger first', nextId: 'rpw_join' }
    ]
  },
  // SCENE 3: GROUP PAGE
  {
    id: 'rpw_join',
    character: 'system',
    text: 'Home of Gays 3.0. A chaotic feed of posts, reactions, and recruitment ads.',
    type: 'facebook',
  },
  {
    id: 'ziane_comment',
    character: 'ziane',
    text: '“Pa-join sa MnF GC.”',
    type: 'facebook',
  },
  {
    id: 'added_to_mnf',
    character: 'system',
    text: 'You have been added to MnF.',
    type: 'messenger',
    transition: 'zoom',
  },
  // SCENE 4: MnF GC DRAMA
  {
    id: 'mnf_chaos',
    character: 'system',
    text: 'The MnF GC is exploding. Notifications are flying faster than I can read.',
    type: 'messenger',
  },
  {
    id: 'rod_drama',
    character: 'rod',
    text: 'Please, Yira. Prowish, sorry na. I didn’t mean it that way.',
    emotion: 'sad',
    type: 'messenger',
  },
  {
    id: 'yira_response',
    character: 'yira',
    text: 'Rod, stop. You knew what you were doing. Everyone saw it.',
    emotion: 'serious',
    type: 'messenger',
  },
  {
    id: 'quin_chaos',
    character: 'quin',
    text: 'GEGEGEGE GULO NA NAMAN!! 🍿🍿🍿',
    emotion: 'happy',
    type: 'messenger',
  },
  {
    id: 'ziane_silent',
    character: 'ziane',
    text: '(I’ll just stay silent... Ziane Caelan is just an observer here.)',
    emotion: 'neutral',
    type: 'messenger',
  },
  {
    id: 'next_day_gc',
    character: 'system',
    text: 'Next Day. Inside MnF GC.',
    type: 'messenger',
    transition: 'fade',
  },
  {
    id: 'quin_tease',
    character: 'quin',
    text: '@Ziane, bat ang tahimik mo? Voice call tayo later guys!',
    emotion: 'neutral',
    type: 'messenger',
  },
  // CALL EVENT
  {
    id: 'call_start',
    character: 'system',
    text: 'Starting voice call...',
    type: 'call',
  },
  {
    id: 'ziane_voice',
    character: 'ziane',
    text: 'Hello? Can you hear me?',
    type: 'call',
  },
  {
    id: 'kyren_shock',
    character: 'system',
    text: 'Everyone freezes. The voice coming from Ziane Caelan’s male persona is unexpectedly... soft.',
    type: 'call',
  },
  {
    id: 'quin_shock',
    character: 'quin',
    text: 'Hala?! Babae ka?! Bat ang ganda ng boses mo?',
    emotion: 'shocked',
    type: 'call',
  },
  // SCENE 5: CALL ARC
  {
    id: 'montage_start',
    character: 'system',
    text: 'School. Homework. Late night calls. Laughing until 3 AM.',
    type: 'story',
    transition: 'fade',
  },
  {
    id: 'kysh_appearance',
    character: 'kysh',
    text: 'Hey Ziane... are you still awake? I can’t sleep.',
    emotion: 'flirty',
    type: 'messenger',
    effects: { kysh: 10 }
  },
  {
    id: 'kysh_bond',
    character: 'ziane',
    text: '(We’ve been on call for hours. There’s something about Kysh that makes me feel... different.)',
    emotion: 'happy',
    type: 'call',
  },
  {
    id: 'quin_reveal_hint',
    character: 'quin',
    text: 'Ziane, be careful with Kysh ha? Alam mo naman yun, friendly masyado.',
    emotion: 'serious',
    type: 'messenger',
  },
  // MEETING
  {
    id: 'meeting_kysh',
    character: 'system',
    text: 'I finally meet Kysh in real life. The soft lighting of the cafe makes everything feel surreal.',
    type: 'story',
    background: 'bg-orange-50',
  },
  {
    id: 'kysh_meeting_line',
    character: 'kysh',
    text: 'You look... exactly how I imagined you would.',
    emotion: 'happy',
    type: 'story',
  },
  // TRUTH REVEAL
  {
    id: 'after_meeting',
    character: 'system',
    text: 'An hour after the meeting. A notification from Quin pops up.',
    type: 'messenger',
  },
  {
    id: 'quin_truth',
    character: 'quin',
    text: 'Ziane, sorry kailangan mo itong malaman. Kysh is talking to multiple people. At hindi lang yun...',
    emotion: 'sad',
    type: 'messenger',
  },
  {
    id: 'yira_entry',
    character: 'yira',
    text: 'She has a girlfriend. Best friend ko si Yafi, or alias Dlar. Sila ni Kysh.',
    emotion: 'serious',
    type: 'messenger',
  },
  {
    id: 'ziane_shock',
    character: 'ziane',
    text: '...',
    emotion: 'crying',
    type: 'story',
    transition: 'zoom',
  },
  // APOLOGY SCENE
  {
    id: 'apology_gc_init',
    character: 'system',
    text: 'A new GC is created: Quin, Dlar, Yira, Ziane.',
    type: 'messenger',
  },
  {
    id: 'ziane_typing',
    character: 'ziane',
    text: 'I start typing... every word feels heavy.',
    emotion: 'sad',
    type: 'messenger',
  },
  {
    id: 'the_apology',
    character: 'ziane',
    text: `I just want to say a real, honest sorry. I don’t even know how to begin because everything’s a mess, but I don’t want to stay quiet without owning up to what I feel and did. \n\nFrom the very start, I asked Kysh if she was single—and she said yes. That’s what I based everything on. I didn’t know she was already talking to someone else. I just found out recently, and honestly… it hurts. But more than that, the guilt, the shame, the feeling that I became part of something so wrong—that’s what’s heavier. That’s not who I am. I didn’t want this. And I definitely didn’t want anyone to get hurt. \n\nI know you’re angry. And I understand. I know Kysh has hurt people. But I also can’t stomach the things I said about her earlier. I got carried away by my emotions, and now I feel guilty for badmouthing her—even if she was part of our circle, even if she was once our friend. \n\nI’m not asking for everything to go back to normal. I’m not expecting forgiveness right away. But I want to apologize to everyone who got hurt—especially Dlar and Yira. I’m sorry for being stupid. I should’ve known better. I should’ve dug deeper. I was careless, I was too soft. I’m sorry. \n\nI also want to say that once we finish compiling everything, I hope we can tell Kysh the truth. I can’t take the fact that we’re all talking about her behind her back. No matter what she did wrong, she’s still a person. She deserves to know. She deserves to hear what her actions caused. \n\nAnd most of all… I don’t want your friendships to fall apart. I don’t want to be the reason you all break apart. Please, don’t give up on Kysh. Not to let her off the hook—but maybe because she needs you right now. Maybe not to comfort her, but to guide her. I hope you understand. I’m not dumb. I just slipped. But I want to make things right—even if it takes time.`,
    emotion: 'serious',
    type: 'messenger',
  },
  {
    id: 'yira_typing',
    character: 'yira',
    text: 'Yira is typing...',
    type: 'messenger',
    autoNext: true,
  },
  {
    id: 'yira_final',
    character: 'yira',
    text: 'Bakit ka nagsosorry?',
    emotion: 'neutral',
    type: 'messenger',
  },
  // FINAL INTERACTION
  {
    id: 'final_choice',
    character: 'system',
    text: 'Do you want the next story?',
    type: 'final',
    choices: [
      { text: 'YES', nextId: 'final_yes' },
      { text: 'NO', nextId: 'final_no' }
    ]
  },
  {
    id: 'final_yes',
    character: 'ziane',
    text: 'Maybe this isn’t the end after all.',
    emotion: 'happy',
    background: 'bg-gradient-to-tr from-pink-100 to-yellow-100 particles',
    type: 'final'
  },
  {
    id: 'final_no',
    character: 'ziane',
    text: 'It’s okay… I understand.',
    emotion: 'crying',
    background: 'bg-black',
    type: 'final'
  }
];
