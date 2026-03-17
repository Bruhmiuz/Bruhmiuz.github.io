/*
Each message node in the dialogue system must include a defined structure to ensure consistent behavior and rendering.

Required and Optional Fields:

1. type (string) — One of the following six message types:
   - "plain"        → Standard text message.
   - "image"        → Image from URL.
   - "embed"        → Pop-up embed from URL.
   - "tex"          → Pop-up TeX render.
   - "dialogue"     → Dialogue-based user options.
   - "mcq"          → Multiple-select MCQ (can select more than one).
   - "single-mcq"   → Single-select MCQ (only one correct option).
   - "text"         → Open-ended text input.

2. content (string)
   - For all types except "image" and "embed": The message text (can include LaTeX).
   - For "image": Image URL.
   - For "embed": Embed URL.

3. next (string) — [Required for all types except "dialogue"]
   - ID of the next node to load after this one.
   - For MCQ types, this is triggered after optional feedback responses (see `respondToIdx`).
   - Not required for:
     - "dialogue" nodes (use `respondToIdx` instead),
     - final message nodes,
     - intermediate response messages.

4. important (boolean) - [Optional]
   - If true, pre-emptively marks a message as important (can be viewed in Starred)

5. delay (number) — [Optional]
   - Delay in milliseconds before showing this node (defaults to 250ms base delay for smoothness).

6. options (object) — [Required for "dialogue", "mcq", and "single-mcq"]
   - A dictionary mapping option keys (typically numbers) to display labels.

7. answersIdx (Set<number>) — [Required for "mcq" and "single-mcq"]
   - A `Set` containing the keys of correct answers.

8. respondToIdx (object) — [Required for "dialogue", optional for "mcq"/"single-mcq"]
   - A mapping of selected option keys to follow-up node IDs.
   - For "dialogue", this is mandatory and determines branching.
   - For MCQ types, it optionally provides feedback nodes for selected options.

9. answers (Set<string>) — [Required for "text"]
   - A set of accepted correct text answers (case- and space-insensitive matching is applied).

10. marks (number) — [Optional for "mcq", "single-mcq", and "text"]
   - Maximum score awarded for correctly answering the node.
   - System message will display score after answering.
   - Scoring is skipped if this is undefined.

11. previewText (string) - [Optional for "embed", "tex"]
   - Preview text for the pop-up message.
   - Defaults to: 'Click to open embed' ("embed") or 'Click to open page' ("tex")

12. backgroundImage (string) - [Optional for "embed", "tex"]
   - Preview image URL for the pop-up message.

13. preload (boolean) - [Optional for "embed"]
   - Preloads the embed, and the same embed will be reused for future messages with same URL and preload=true.

14. sticker (boolean) - [Optional for "image"]
   - Displays the image with no outline.

15. systemMessage (string) - [Optional]
   - Sends a system message with the specified text immediately after the message.
*/


const dialogueSystem = {
  start: {
    type: "image",
    content: "images/cipher_pitiful.png", 
    sticker: true,
    next: "idk"
  },
  idk: {
    type: "embed",
    content: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    previewText: "Listen to some music",
    preload: true,
    important: true,
    next: "smh",
  },
  smh: {
    type: "tex",
    content: "$$ \\textbf{\\Large Linear Equations} \\\\ $$" +
      "$ \\text{A linear equation with } n \\text{ variables can be expressed as:} \\\\$" +
      "$$ a_1 x_1 + a_2 x_2 + \\ldots + a_n x_n = b $$" +
      "$\\text{• } x_1, x_2, \\ldots, x_n \\text{ are called the variables.} \\\\$" +
      "$\\text{• } a_1, a_2, \\ldots, a_n \\text{ are the coefficients, each corresponding to a variable.} \\\\$" +
      "$\\text{• } b \\text{ is the constant, independent of any variable.} $",
    previewText: "Definition: Linear Equations and Systems",
    previewImage: "images/cipher_pitiful.png",
    important: true,
    next: "p0"
  },
  p0: {
    type: "plain",
    content: "Hello! This is a plain text message.",
    next: "p1"
  },
  p1: {
    type: "plain",
    content: "This is starred and has a one second delay.",
    next: "p2",
    important: true,
    delay: 1000
  },
  p2: {
    type: "mcq",
    content: "This is a marked multiple-choice MCQ.",
    options: {
      0: "Correct",
      1: "Wrong",
      2: "Very, very wrong"
    },
    answersIdx: new Set([0]),
    respondToIdx: {
      1: "p2e1",
      2: "p2e2"
    },
    marks: 1,
    next: "p3"
  },
  p2e1: {
    type: "plain",
    content: "Seems you chose option 2!"
  },
  p2e2: {
    type: "plain",
    content: "Seems you chose option 3!",
    next: "p2e3"
  },
  p2e3: {
    type: "plain",
    content: "I am once again emphasizing the fact that you chose option 3."
  },
  p3: {
    type: "dialogue",
    content: "This is a dialogue message.",
    options: {
      0: "I like tuna sushi.",
      1: "I like cucumbers."
    },
    respondToIdx: {
      0: "p4a",
      1: "p4b"
    }
  },
  p4a: {
    type: "plain",
    content: "IKR?! Yumzers!!",
    next: "p5"
  },
  p4b: {
    type: "plain",
    content: "Wuuuuuuut...",
    next: "p5"
  },
  p5: {
    type: "single-mcq",
    content: "This is an unmarked single-choice MCQ.",
    options: {
      0: "Yes it is", 
      1: "No it's not"
    },
    answersIdx: new Set([0]),
    respondToIdx: {
      0: "p5e1",
      1: "p5e2"
    },
    next: "p6"
  },
  p5e1: {
    type: "plain",
    content: "OMG, you got it right?!"
  },
  p5e2: {
    type: "plain",
    content: "Whaaaaat? You got it wrong???"
  },
  p6: {
    type: "text",
    content: "This is an unmarked text response question. The answers are 'skibidi toilet' or 'amogus sus'.",
    answers: new Set(["skibidi toilet", "amogus sus"]),
    next: "end"
  },
  end: {
    type: "end",
    content: "This concludes our discussion. Bye have a great time~"
  }
};

const compulsoryMessages = [
  "smh"
];

const checkpoints = [
  {
    id: "start",
    label: "Start from beginning",
    showCompulsoryMessages: 0
  },
  {
    id: "p0",
    label: "Skip beginning",
    showCompulsoryMessages: 1
  },
];