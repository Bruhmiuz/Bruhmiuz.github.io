const dialogueSystem = {
  p0: {
    type: "image",
    content: "images/cipher_pitiful.png",
    sticker: true,
    next: "p1"
  },

  p1: {
    type: "dialogue",
    content: "Now what?!?",
    options: {
      0: "Do you still need a teammate?",
      1: "Send meme.",
      2: "What is this thing?"
    },
    respondToIdx: {
      0: "d0",
      1: "d1",
      2: "d2"
    }
  },

  d0: {
    type: "plain",
    content: "Yes I do.",
    systemMessage: "Telegram: @bruhmius",
    next: "p1"
  },

  d1: {
    type: "image",
    content: "images/virus_idk.webp",
    next: "d1a"
  },

  d1a: {
    type: "dialogue",
    content: "Was it funny? (say yes plsplpls)",
    options: {
      0: "YES HAHAHA HARHAR HARHAR HAR!11!!1!",
      1: "no."
    },
    respondToIdx: {
      0: "d1b",
      1: "d1c",
    }
  },

  d1b: {
    type: "plain",
    content: "Yayzers!",
    next: "p1"
  },

  d1c: {
    type: "image",
    content: "images/loading.gif",
    sticker: true,
    systemMessage: "Connection issue. Failed to receive.",
    next: "p1"
  },

  d2: {
    type: "plain",
    content: "It's QuizBot, a tool forked form nus-ma1522/QuizBot.<br>Anyone may use it for personal purposes.",
    next: "p1"
  },

};

const compulsoryMessages = [
];

const checkpoints = [
  {
    id: "p0",
    label: "Looking for teammate?",
    showCompulsoryMessages: 0
  },
];