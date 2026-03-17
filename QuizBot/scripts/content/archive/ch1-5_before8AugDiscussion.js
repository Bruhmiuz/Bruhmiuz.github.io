const dialogueSystem = {
  // intro

  start: {
    type: "plain",
    content: "Congratulations! Now you are at the last part of Chapter 1 :) From previous sections, you have been able to solve linear systems using augmented matrices.<br>" +
    "But... what if the matrices contain unknowns?",
    next: "intro2"
  },

  intro2: {
    type: "plain",
    content: "Let's consider this system. In the following system, a is some unknown value.<br>" +
    "$$x + 2y = 10 \\\\ (2 - a)y = 20 - 10a$$<br>" + 
    "$$\\left( " +
             "    \\begin{array}{cc|c}" +
             "        1 & 1 & 10 \\\\" +
             "        0 & 2 - a & 20 - 10a \\\\" +
             "    \\end{array}" +
             "\\right)$$",
    next: "intro3"
  },

  intro3: {
    type: "mcq",
    content: "Which of the following is definitely true about the linear system regardless of the value of a?",
    options: {
      0: "The system has no solutions",
      1: "The system has a unique solution",
      2: "The system has infinitely many solutions",
      3: "None of the above",
      4: "All of the above"
    },
    answersIdx: new Set([3]),
    next: "intro4"
  },

  intro4: {
    type: "plain",
    content: "How do we handle such unknowns?",
    next: "intro5"
  },

  intro5: {
    type: "plain",
    content: "Not sure? It's ok! We can start experimenting with different values of a." +
    "Try to reduce the matrix to RREF for a = 0,  a = 1, a = 2, a = 3." +
    "(a can take infinitely many possible values, but for now let's just try these four)",
    next: "intro6"
  },

  intro6: {
    type: "mcq",
    content: "Which one will make the system have infinitely many solutions?",
    options: {
      0: "a = 0",
      1: "a = 1",
      2: "a = 2",
      3: "a = 3"
    },
    answersIdx: new Set([2]),
    next: "intro7"
  },

  intro7: {
    type: "plain",
    content: "For a = 2, notice the matrix is already in RREF.<br>" +
    "$$\\left( " +
             "    \\begin{array}{cc|c}" +
             "        1 & 1 & 10 \\\\" +
             "        0 & 0 & 0 \\\\" +
             "    \\end{array}" +
             "\\right)$$<br>" +
    "The rest of the cases are not in RREF yet. If a != 2, we need to make row 2 column 2 be 1 since it's a leading entry. This means to multiply row1 by " + 
    "$\\frac{1}{a - 2}$" +
    "times of row 2." + 
    "$$\\left( " +
             "    \\begin{array}{cc|c}" +
             "        1 & 1 & 10 \\\\" +
             "        0 & 1 & 10 \\\\" +
             "    \\end{array}" +
             "\\right)$$<br>",
    next: "intro8"
  },

  intro8: {
    type: "mcq",
    content: "If a = 2, can we multiply row1 by " + 
    "$\\frac{1}{a-2}$" +
    "times of row 2?",
    options: {
      0: "Yes",
      1: "No"
    },
    answersIdx: new Set([1]),
    next: "intro9"
  },

  intro9: {
    type: "plain",
    content: "We cannot! Because if a=2, then we have " +
    "$\\frac{1}{0}$" +
    "and division by zero is not defined. (oh no!)",
    next: "end"
  },

  end: {
    type: "end",
    content: "Our goal is always to reduce the matrix to REF, then RREF. " +
    "However, different values of a may require a different next step. This is why we need to consider cases like this :D And this is the end of Chapter 1! Good job!"
  }
};

const compulsoryMessages = [];

const checkpoints = [
  {
    id: "start",
    label: "Start from beginning",
    showCompulsoryMessages: 0
  }
];

