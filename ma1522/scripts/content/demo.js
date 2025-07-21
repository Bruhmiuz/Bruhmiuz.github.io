/*
Each message node in the dialogue system must include a defined structure to ensure consistent behavior and rendering.

Required and Optional Fields:

1. type (string) — One of the following six message types:
   - "plain"        → Standard text message.
   - "image"        → Image message (loads from the `images/` folder).
   - "dialogue"     → Dialogue-based user options.
   - "mcq"          → Multiple-select MCQ (can select more than one).
   - "single-mcq"   → Single-select MCQ (only one correct option).
   - "text"         → Open-ended text input.

2. content (string)
   - For all types except "image": The message text (can include LaTeX).
   - For "image": Filename of the image (relative to the `images/` folder).

3. next (string) — [Required for all types except "dialogue"]
   - ID of the next node to load after this one.
   - For MCQ types, this is triggered after optional feedback responses (see `respondToIdx`).
   - Not required for:
     - "dialogue" nodes (use `respondToIdx` instead),
     - final message nodes,
     - intermediate response messages.

4. delay (number) — [Optional]
   - Additional delay in milliseconds before showing this node (defaults to 500ms base delay).

5. options (object) — [Required for "dialogue", "mcq", and "single-mcq"]
   - A dictionary mapping option keys (typically numbers) to display labels.

6. answersIdx (Set<number>) — [Required for "mcq" and "single-mcq"]
   - A `Set` containing the keys of correct answers.

7. respondToIdx (object) — [Required for "dialogue", optional for "mcq"/"single-mcq"]
   - A mapping of selected option keys to follow-up node IDs.
   - For "dialogue", this is mandatory and determines branching.
   - For MCQ types, it optionally provides feedback nodes for selected options.

8. answers (Set<string>) — [Required for "text"]
   - A set of accepted correct text answers (case- and space-insensitive matching is applied).

9. marks (number) — [Optional for "mcq", "single-mcq", and "text"]
   - Maximum score awarded for correctly answering the node.
   - Scoring is skipped if this is undefined.

*/


const dialogueSystem = {
  start: {
    type: "image",
    content: "cipher_pitiful.png",
    next: "p0",
    delay: 1000
  },
  p0: {
    type: "plain",
    content: "Hello! This is a plain text message.",
    next: "p1",
    delay: 1000
  },
  p1: {
    type: "plain",
    content: "This has doubled delaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay.",
    next: "p2",
    delay: 2500
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
    next: "p3",
    delay: 1200
  },
  p2e1: {
    type: "plain",
    content: "Seems you chose option 2!",
    delay: 1000
  },
  p2e2: {
    type: "plain",
    content: "Seems you chose option 3!",
    next: "p2e3",
    delay: 1000,
  },
  p2e3: {
    type: "plain",
    content: "I am once again emphasizing the fact that you chose option 3.",
    delay: 1000
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
    },
    delay: 1200
  },
  p4a: {
    type: "plain",
    content: "IKR?! Yumzers!!",
    next: "p5",
    delay: 1000
  },
  p4b: {
    type: "plain",
    content: "Wuuuuuuut...",
    next: "p5",
    delay: 1000
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
    next: "p6",
    delay: 1000
  },
  p5e1: {
    type: "plain",
    content: "OMG, you got it right?!",
    delay: 1000
  },
  p5e2: {
    type: "plain",
    content: "Whaaaaat? You got it wrong???",
    delay: 1000
  },
  p6: {
    type: "text",
    content: "This is an unmarked text response question. The answers are 'skibidi toilet' or 'amogus sus'.",
    answers: new Set(["skibidi toilet", "amogus sus"]),
    next: "end",
    delay: 1000
  },
  end: {
    type: "end",
    content: "This concludes our discussion. Bye have a great time~",
    delay: 1200
  }
};