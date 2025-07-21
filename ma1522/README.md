# QuizBot

**QuizBot** is a lightweight, embeddable quiz engine designed to promote deeper learning through interactive, conversation-style questioning. It mimics a friendly tutor who chats with the user, poses thought-provoking questions, and provides feedback in real-time.

---

## 🎯 Features

- Chat-style interface for question delivery
- Multiple content types:
  - ✅ Text-based messages
  - 🖼️ Images
  - 🧠 MCQs (multi/single select)
  - 💬 Dialogue-style choices
  - ⌨️ Free-text answer input
- 📊 Automatic scoring system
- ⭐ Star messages for later review
- 📸 Image zoom and interaction
- 🧮 LaTeX rendering via KaTeX for math formatting
- ⚡ Lightweight and fully client-side

---

## 🧱 Defining a Quiz with `dialogueSystem`

Each quiz is stored as a JS object named `dialogueSystem` inside a `.js` file in `scripts/content/`.

### 🔧 Node Specification

Each **node** represents one step/message in the conversation. Here's the full schema:

```js
{
  id: {
    type: "plain" | "image" | "dialogue" | "mcq" | "single-mcq" | "text",
    content: "Message text or image filename (e.g., 'plot1.png')",

    // Only for options-based questions
    options: {
      0: "Option A",
      1: "Option B"
    },

    // Correct answers (MCQ and text)
    answersIdx: new Set([0, 2]),     // For MCQ/single-mcq (based on option indices)
    answers: new Set(["word", "phrase"]),  // For text-based answers

    // Branching logic for dialogue / optional for MCQ feedback
    respondToIdx: {
      0: "responseNodeIdA",
      1: "responseNodeIdB"
    },

    // Optional scoring
    marks: 1,

    // Next message in sequence
    next: "nextNodeId",  // Not needed if dialogue node

    // Optional delay before this message (ms)
    delay: 1000
  }
}
```