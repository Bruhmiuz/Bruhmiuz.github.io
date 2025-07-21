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
    content: "Hello there! Let's see what you remember from our session on systems of linear equations.",
    next: "p1",
    delay: 1000
  },
  p1: {
    type: "plain",
    content: "Now that we've seen some examples of linear equations, let's test your knowledge!",
    next: "p2",
    delay: 1000
  },
  p2: {
    type: "mcq",
    content: "Of the following, which are linear equations? (select all that apply)",
    options: {
      0: "The equation of a line: \\( y = mx + c \\)",
      1: "A degree 2 polynomial: \\( x^2 + x + 1 = 0 \\)"
    },
    answersIdx: new Set([0]),
    respondToIdx: {
      0: "p2e1",
      1: "p2e2"
    },
    next: "p3",
    delay: 1200
  },
  p2e1: {
    type: "plain",
    content: "Option 1: ✅ Correct! It is a linear equation where \\( x \\) and \\( y \\) are variables and \\( c \\) is the constant. You can express it in standard form as \\( -mx + y = c \\).",
    delay: 1000
  },
  p2e2: {
    type: "plain",
    content: "Option 2: ❌ Not quite. This isn't linear because it includes \\( x^2 \\). However, through substitution methods, this can be linearized!",
    delay: 1000
  },
  p3: {
    type: "plain",
    content: "Also, you've seen some systems with an equal number of variables and equations.",
    next: "p4",
    delay: 800
  },
  p4: {
    type: "plain",
    content: "Certain ones produce a unique solution, while others give infinite or even none. Let's explore the conditions!",
    next: "p5",
    delay: 1000
  },
  p5: {
    type: "dialogue",
    content: "When will a system give infinite solutions?",
    options: {
      0: "I can't say for sure...",
      1: "When one of the equations can be expressed as a combination of the others"
    },
    respondToIdx: {
      0: "p6a",
      1: "p6b"
    },
    delay: 1200
  },
  p6a: {
    type: "plain",
    content: "I understand your confusion. It depends on the relationships between the equations. Time to break it down!",
    next: "p7",
    delay: 1000
  },
  p6b: {
    type: "plain",
    content: "✅ That’s right! If one equation is a linear combination of the others, the system can have infinite solutions.",
    next: "p7",
    delay: 1000
  },
  p7: {
    type: "single-mcq",
    content: "Let’s visualise why in 2D! Consider the equation \\( x + y = 1 \\). Is the line induced by this equation unique?",
    options: {
      0: "Yes", 
      1: "No"
    },
    answersIdx: new Set([1]),
    respondToIdx: {
      0: "p7e1",
      1: "p7e2"
    },
    next: "p8",
    delay: 1000
  },
  p7e1: {
    type: "plain",
    content: "Not quite! Consider \\( 2x + 2y = 2 \\). It gives rise to the same line! So multiple equations can describe the same line.",
    delay: 1000
  },
  p7e2: {
    type: "plain",
    content: "Correct! There can be multiple equations like \\( 2x + 2y = 2 \\) that represent the same line.",
    delay: 1000
  },
  p8: {
    type: "text",
    content: "hello.",
    answers: new Set(["sus amogus"]),
    next: "end",
    delay: 1000
  },
  end: {
    type: "end",
    content: "🎯 Great progress! In the next chapter, we'll look into solving linear systems.",
    delay: 1200
  }
};