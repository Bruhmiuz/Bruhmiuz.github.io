const dialogueSystem = {
  start: {
    type: "plain",
    content: "If you see this, something went wrong with your quiz path.",
    next: "mid"
  },

  mid: {
    type: "embed",
    content: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    previewText: "Listen to some music",
    previewImage: "images/cooked.png",
    preload: true,
    next: "end"
  },
  
  end: {
    type: "plain",
    content: "If you are trying to attack this bot, STOP IT D:<"
  }
};

const compulsoryMessages = [];

const checkpoints = [
  {
    id: "start",
    label: "Start from beginning",
    showCompulsoryMessages: 0
  },
];

