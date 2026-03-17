# QuizBot

**QuizBot** is a lightweight, embeddable quiz engine designed to promote deeper learning through interactive, conversation-style questioning. It mimics a friendly tutor who chats with the user, poses thought-provoking questions, and provides feedback in real-time.

---

## 🎯 Features

- Chat-style interface for question delivery
- Multiple content types:
  - ✅ Text-based messages
  - 🖼️ Images
  - 📟 Embeds
  - 🧠 MCQs (multi/single-select)
  - 💬 Dialogue-style choices
  - ⌨️ Text answers
- 📊 Automatic scoring system
- ⭐ Star messages for later review
- 📸 Image zoom and interaction
- 🧮 LaTeX rendering via KaTeX for math formatting
- ⚡ Lightweight and fully client-side

---

## Testing Locally

To test locally, open `index.html` with your browser. Then, the URL will be something like `<filepath>/index.html`. Make the URL `<filepath>/index.html?content=ch1-1`

## 🧱 Defining a Quiz with `dialogueSystem`

Each quiz is stored as a JS object named `dialogueSystem` inside a `.js` file in `scripts/content/`.

### 🔧 Node Specification

Each **node** represents one step/message in the conversation. Here's the full schema:

```js
const dialogueSystem = {
  id: {
    type: "plain" | "image" | "dialogue" | "mcq" | "single-mcq" | "text" | "embed",
    content: "Message text / image filename (e.g., 'plot1.png') / embed URL (e.g., 'https://www.desmos.com/calculator')",

    // Only for options-based questions
    options: {
      0: "Option A",
      1: "Option B"
    },

    // Correct answers (MCQ and text)
    answersIdx: new Set([0, 2]),     // For MCQs (based on option indices)
    answers: new Set(["word", "phrase"]),  // For text-based answers

    // Branching logic for dialogue / optional for MCQ feedback
    respondToIdx: {
      0: "responseNodeIdA",
      1: "responseNodeIdB"
    },

    // Optional scoring
    marks: 1,

    // Preview for pop-up embed messages
    previewText: "Click to open Desmos",
    
    // Preload and save embed state for future use
    preload: true

    // Pre-emptively message as important
    important: true,

    // Next message in sequence
    next: "nextNodeId",  // Not needed if dialogue node

    // Optional delay after this message (ms)
    delay: 1000
  },
  ...
}
```
