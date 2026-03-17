const dialogueSystem = {
    "Linear_default_1": {
        "type": "plain",
        "content": "Welcome to the geometry of linear algebra! Before we dive head-first into these topics, let's do a little check of your geometric intuitions!",
        "next": "Linear_default_2"
    },
    "Linear_default_2": {
        "type": "plain",
        "content": "You should know by now that vectors have two principal operations: vector addition, and scalar multiplication.",
        "next": "Linear_default_3"
    },
    "Linear_default_3": {
        "type": "mcq",
        "options": {
            "0": "I didn't study Chapters 3.1 \\& 3.2 :(",
            "1": "$\\left(\\begin{matrix} 1 \\\\ 1 \\\\ 0 \\end{matrix}\\right)$",
            "2": "\"Taking a step\" (i.e. translating 1 unit) in the x-direction then \"taking 3 steps\" in the y-direction."
        },
        "answersIdx": [
            2
        ],
        "content": "Now suppose you're stuck in $\\mathbb{R}^3$. Which of the following is the best \\mathbf{interpretation} of $\\left(\\begin{matrix} 1 \\\\ 0 \\\\ 0 \\end{matrix}\\right) + 3\\left(\\begin{matrix} 0 \\\\ 1 \\\\ 0 \\end{matrix}\\right)$?",
        "next": "Linear_default_4"
    },
    "Linear_default_4": {
        "type": "plain",
        "content": "Exactly! We can think of both operations as defining how we may move within a (vector) space...",
        "next": "Linear_default_5"
    },
    "Linear_default_5": {
        "type": "dialogue",
        "options": {
            "0": "Wait, what?"
        },
        "respondToIdx": {
            "0": "iLiedHaha"
        },
        "content": "... except I lied."
    },
    "iLiedHaha": {
        "type": "plain",
        "content": "Notice how the operations fundamentally build upon \"anchoring\" vectors to create new directions in which you can move within a vector space.<br> <br> To see what I mean, riddle me this:",
        "next": "Linear_default_6"
    },
    "Linear_default_6": {
        "type": "mcq",
        "options": {
            "0": "Yes",
            "1": "No"
        },
        "answersIdx": [
            1
        ],
        "content": "Clearly in $\\mathbb{R}^3$ I can move along the z-axis. But using only $\\left(\\begin{matrix} 1 \\\\ 0 \\\\ 0 \\end{matrix}\\right)$ and $\\left(\\begin{matrix} 0 \\\\ 1 \\\\ 0 \\end{matrix}\\right)$, can our vector operations ever give us the vector $\\left(\\begin{matrix} 0 \\\\ 0 \\\\ 1 \\end{matrix}\\right)$?",
        "next": "Linear_default_7"
    },
    "Linear_default_7": {
        "type": "plain",
        "content": "Right, we can't. So it's not entirely correct to say that vector operations DETERMINE how we can move within a vector space. That's because the vectors we choose to add and multiply ALSO affect where we can move!",
        "next": "Linear_default_8"
    },
    "Linear_default_8": {
        "type": "plain",
        "content": "Rather, vector operations give us the **mathematical structure** that shapes the RULES of where we can move.",
        "next": "Linear_default_9"
    },
    "Linear_default_9": {
        "type": "plain",
        "content": "With that in mind, let's introduce **linear combinations** to help us keep a mental note of this structure:<br> <br> A linear combination of the (non-empty) set of vectors $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_k\\}$ is any vector $\\mathbf{v}$ satisfying",
        "next": "Linear_default_10"
    },
    "Linear_default_10": {
        "type": "tex",
        "content": "$$\\textbf{Linear Combination of }\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_k\\} \\\\ $$<br> $$\\mathbf{v} = c_1 \\mathbf{u}_1 + c_2 \\mathbf{u}_2 + \\dots + c_k \\mathbf{u}_k, \\newline c_1, \\dots c_k \\in \\mathbb{R}$$",
        "next": "Linear_default_11"
    },
    "Linear_default_11": {
        "type": "plain",
        "content": "☝️🤓 Erm... Ackchually... if you did the Interactive for Chapters 2.2~2.3 before, you would ALSO know that we can write $\\mathbf{v}$ like this:",
        "next": "Linear_default_12"
    },
    "Linear_default_12": {
        "type": "tex",
        "content": "$$\\textbf{Alternative Linear Combination} \\\\ $$<br> $$\\mathbf{v} = \\left(\\begin{array}{c|c|c|c} \\mathbf{u}_1 & \\mathbf{u}_2 &  \\dots &\\mathbf{u}_k \\end{array}\\right) \\left(\\begin{array}{c} c_1 \\\\ c_2 \\\\ \\vdots \\\\ c_k\\end{array}\\right) \\\\ $$",
        "next": "Linear_default_13"
    },
    "Linear_default_13": {
        "type": "plain",
        "content": "☝️🤓 Um... This is a magical tool that will come in handy later...",
        "next": "Spans_default_1"
    },
    "Spans_default_1": {
        "type": "dialogue",
        "options": {
            "0": "Spare me ;-;"
        },
        "respondToIdx": {},
        "content": "On the topic of mathematical structures, do you think that the set of linear combinations of any (non-empty) set of vectors form a vector space?<br> <br> Formally, will $\\{c_1 \\mathbf{u}_1 + c_2 \\mathbf{u}_2 + \\dots + c_k \\mathbf{u}_k, \\mid c_1,\\dots c_k \\in \\mathbb{R}\\}$ always form a vector space (if I equip it with vector addition and scalar multiplication)?"
    },
    "Spans_default_2": {
        "type": "plain",
        "content": "Unsurprisingly, it can! (Proof left as exercise for you :3)",
        "next": "Spans_default_3"
    },
    "Spans_default_3": {
        "type": "plain",
        "content": "This allows us to define vector spaces in the alternative manner below:",
        "next": "Spans_default_4"
    },
    "Spans_default_4": {
        "type": "tex",
        "content": "$$\\textbf{Span of Vector Set} \\\\ $$<br> $$\\text{For a set } S = \\{\\mathbf{u}_1,\\dots,\\mathbf{u}_k\\},\\mathrm{span}(S)=\\{c_1\\mathbf{u}_1+\\cdots+c_k\\mathbf{u}_k \\mid c_1,\\dots c_k \\in \\mathbb{R}\\}$$",
        "next": "Spans_default_5"
    },
    "Spans_default_5": {
        "type": "dialogue",
        "options": {
            "0": "Like what?"
        },
        "respondToIdx": {
            "0": "theWhat"
        },
        "content": "The vector space structure is exactly that provided to you by vector addition and scalar multiplication, preserving some of the basic intuitions one might have about space (the concept in general)."
    },
    "theWhat": {
        "type": "plain",
        "content": "In particular, **you can't move or stretch out of a space**, despite what the Backrooms lore tells you.<br> So no matter how many steps you can in whichever directions you desire, you will always stay within $span(S)$. Try it!",
        "next": "Spans_default_6"
    },
    "Spans_default_6": {
        "type": "dialogue",
        "options": {
            "0": "Interesting..."
        },
        "respondToIdx": {
            "0": "spansInDetail"
        },
        "content": "Therefore we say that spans **are (vector) spaces** and are therefore **closed under linear combinations**.<br> Vector spaces themselves are **ALSO** closed under linear combination."
    },
    "Spans_default_7": {
        "type": "mcq",
        "options": {
            "0": "$\\mathbf{0}^{n \\times 1}$ is in the span.",
            "1": "If $\\mathbf{u}, \\mathbf{v}$ are in the span, so is $\\mathbf{u} + \\mathbf{v}$",
            "2": "If $\\mathbf{u}$ is in the span, so is $a\\mathbf{u}$ for any non-zero real $a$.",
            "3": "If $\\mathbf{u}, \\mathbf{v}$ are in the span, so is $a\\mathbf{u} + b\\mathbf{v}$ for reals $a, b$, not both zero."
        },
        "answersIdx": [
            0,
            1,
            2,
            3
        ],
        "content": "After all I've yapped, let's check if you get the key point:<br> Which of the following are properties of the span of a set of vectors in $\\mathbb{R}^n$?",
        "next": "Spans_default_8"
    },
    "Spans_default_8": {
        "type": "plain",
        "content": "🧠💪 Great! (Technically, there is no need to enforce non-zero outside of this question.)",
        "next": "spansInDetail"
    },
    "spansInDetail": {
        "type": "plain",
        "content": "Let's explore spans in greater detail!",
        "next": "A_default_1"
    },
    "A_default_1": {
        "type": "dialogue",
        "options": {
            "0": "Yes",
            "1": "No"
        },
        "respondToIdx": {
            "0": "continueVectorSpaces",
            "1": "pretendToBeSad"
        },
        "content": "Have you ever wondered why we keep referring to vector spaces in the plural?"
    },
    "pretendToBeSad": {
        "type": "plain",
        "content": "Not curious? That makes me sad... but I'll tell you anyway! :)",
        "next": "continueVectorSpaces"
    },
    "continueVectorSpaces": {
        "type": "plain",
        "content": "That's because **not all vector spaces are built the same**.",
        "next": "A_default_2"
    },
    "A_default_2": {
        "type": "mcq",
        "options": {
            "0": "Two",
            "1": "Infinitely many",
            "2": "None",
            "3": "I refuse to answer your question"
        },
        "answersIdx": [
            1
        ],
        "content": "Consider just $\\mathbb{R}^3$, your usual 3D Euclidean space. How many lines and planes can we have in that Euclidean space which pass through the origin?",
        "next": "A_default_3"
    },
    "A_default_3": {
        "type": "plain",
        "content": "Already we have infinitely many lines (spaces in \\mathbb{R}^3 spanned by one vector), and infinitely many planes (ditto, but spanned by two vectors)! What's mindblowing is that **all of them** are spaces in their own rights! 🤯",
        "next": "A_default_4"
    },
    "A_default_4": {
        "type": "plain",
        "content": "Most of the time, these spaces have nothing in common except the origin!<br> <br> Consider for example  $\\mathrm{span}\\left(\\left\\{\\left(\\begin{matrix} 1 \\\\ 0 \\\\ 0 \\end{matrix}\\right)\\right\\}\\right)$ and $\\mathrm{span}\\left(\\left\\{\\left(\\begin{matrix} 0 \\\\ 1 \\\\ 0 \\end{matrix}\\right)\\right\\}\\right)$",
        "next": "A_default_5"
    },
    "A_default_5": {
        "type": "dialogue",
        "options": {
            "0": "Go on...",
            "1": "Oh no..."
        },
        "respondToIdx": {
            "0": "checkSameSpan",
            "1": "checkSameSpan"
        },
        "content": "But we're not really interested in these pairings (for now). What's more fascinating is spans that fundamentally describe the same space!"
    },
    "checkSameSpan": {
        "type": "dialogue",
        "options": {
            "0": "Let me think about it...",
            "1": "Just give me the answer..."
        },
        "respondToIdx": {
            "0": "checkSameSpan2",
            "1": "checkSameSpan2"
        },
        "content": "Let's suppose that $V_1 = \\mathrm{span}(\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_i\\}), V_2 = \\mathrm{span}(\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\})$ were both subsets of $V$ (so $V_1, V_2 \\subseteq V$). What should we expect to see when $V_1 \\subseteq V_2$?"
    },
    "checkSameSpan2": {
        "type": "plain",
        "content": "Well, if and only if $V_1 \\subseteq V_2$, every $\\mathbf{u}_k$ is by definition of a span equivalent to some linear combination of $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$",
        "next": "A_default_6"
    },
    "A_default_6": {
        "type": "plain",
        "content": "☝️🤓 So this is where the magical tool comes back to help us!",
        "next": "A_default_7"
    },
    "A_default_7": {
        "type": "tex",
        "content": "$$\\textbf{Alternative Linear Combination} \\\\ $$<br> $$\\mathbf{v} = \\left(\\begin{array}{c|c|c|c} \\mathbf{u}_1 & \\mathbf{u}_2 &  \\dots &\\mathbf{u}_k \\end{array}\\right) \\left(\\begin{array}{c} c_1 \\\\ c_2 \\\\ \\vdots \\\\ c_k\\end{array}\\right) \\\\ $$",
        "next": "A_default_8"
    },
    "A_default_8": {
        "type": "plain",
        "content": "👩🏻‍🎓 Since every $\\mathbf{u}_k$ is some linear combination of $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$, we can write<br> $\\mathbf{u}_k = \\left(\\begin{array}{c|c|c|c} \\mathbf{v}_1 & \\mathbf{v}_2 &  \\dots &\\mathbf{v}_j \\end{array}\\right) \\left(\\begin{array}{c} c_{1,k} \\\\ c_{2,k} \\\\ \\vdots \\\\ c_{j,k}\\end{array}\\right)$<br> <br> Hence by block multiplication, we can also write<br> $$\\left(\\begin{array}{c|c|c|c} \\mathbf{v}_1 & \\mathbf{v}_2 &  \\dots &\\mathbf{v}_j \\end{array}\\right) \\left(\\begin{array}{cccc} c_{1,1} & c_{1,2} & \\dots & c_{1,i} \\\\ c_{2,1} & c_{2,2} & \\dots & c_{2, i} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ c_{j,1} & c_{j,2} & \\dots & c_{j,i}\\end{array}\\right) = \\left(\\begin{array}{c|c|c|c} \\mathbf{u}_1 & \\mathbf{u}_2 &  \\dots &\\mathbf{u}_i \\end{array}\\right)$$",
        "next": "A_default_9"
    },
    "A_default_9": {
        "type": "mcq",
        "options": {
            "0": "Multiple matrix-vector equations",
            "1": "A matrix equation",
            "2": "I don't know, aren't you supposed to tell me?"
        },
        "answersIdx": [
            0,
            1
        ],
        "content": "Now! What does this look like to you?",
        "next": "A_default_10"
    },
    "A_default_10": {
        "type": "plain",
        "content": "☝️🤓 *minecraft villager noises*... there are ackchually multiple ways to view this equation.",
        "next": "A_default_11"
    },
    "A_default_11": {
        "type": "dialogue",
        "options": {
            "0": "**PAUSE**. Why must solution(s) exist for $c_{a,b}$?",
            "1": "Cool!"
        },
        "respondToIdx": {
            "0": "explainPremise",
            "1": "endingQuestions"
        },
        "content": "But it's more interesting to consider the equation as the concatenation of multiple matrix-vector equations, because it means we MUST be able to solve<br> for every $c_{a,b}$ by considering the RREF of<br> $\\left(\\begin{array}{c|c|c|c|c|c|c|c} \\mathbf{v}_1 & \\mathbf{v}_2 &  \\dots &\\mathbf{v}_j & \\mathbf{u}_1 & \\mathbf{u}_2 &  \\dots &\\mathbf{u}_i \\end{array}\\right)$"
    },
    "explainPremise": {
        "type": "plain",
        "content": "Remember that we stipulated $V_1\\subseteq V_2$ where $V_1 = \\mathrm{span}(\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_i\\}), V_2 = \\mathrm{span}(\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\})$. If, let's say, $\\mathbf{u}_1$ weren't a linear combination of the vectors $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$, then clearly there exists a vector in $V_1$ that is not in $V_2$.",
        "next": "endingQuestions"
    },
    "endingQuestions": {
        "type": "plain",
        "content": "Wonderful. Now let's test your understanding again:",
        "next": "A_default_12"
    },
    "A_default_12": {
        "type": "mcq",
        "options": {
            "0": "Yes",
            "1": "No"
        },
        "answersIdx": [
            1
        ],
        "content": "If two sets of vectors have the same cardinality (\"size\"), must their spans describe the same vector spaces?",
        "next": "A_default_13"
    },
    "A_default_13": {
        "type": "plain",
        "content": "No. Remember that not all vector spaces are built the same!",
        "next": "A_default_14"
    },
    "A_default_14": {
        "type": "mcq",
        "options": {
            "0": "Yes",
            "1": "No"
        },
        "answersIdx": [
            0
        ],
        "content": "Suppose $V_1$ and $V_2$ were as before. Then is it possible to have multiple solutions to<br> $\\mathbf{u}_k = \\left(\\begin{array}{c|c|c|c} \\mathbf{v}_1 & \\mathbf{v}_2 &  \\dots &\\mathbf{v}_j \\end{array}\\right) \\left(\\begin{array}{c} c_{1,k} \\\\ c_{2,k} \\\\ \\vdots \\\\ c_{j,k}\\end{array}\\right)$?",
        "next": "A_default_15"
    },
    "A_default_15": {
        "type": "plain",
        "content": "Yes. (Sneak peek into Chapter 3.5 and beyond)",
        "next": "A_default_16"
    },
    "A_default_16": {
        "type": "mcq",
        "options": {
            "0": "Yes",
            "1": "No"
        },
        "answersIdx": [
            1
        ],
        "content": "Suppose further $V_1 \\subset V_2$. Can I find constants for all $\\mathbf{v}_i$ to demonstrate that $\\mathbf{v}_i$ is a linear combination of $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_i\\}$? (Note that I swapped the roles of $\\mathbf{u}$ and $\\mathbf{v}$!)",
        "next": "A_default_17"
    },
    "A_default_17": {
        "type": "plain",
        "content": "Nope! No you can't.",
        "next": "A_default_18"
    },
    "A_default_18": {
        "type": "mcq",
        "options": {
            "0": "For some $1 \\leq k \\leq i$, $\\mathbf{u}_k$ cannot be expressed as the linear combination of vectors in $\\mathbb{R}^n$.",
            "1": "$i \\geq n$",
            "2": "For every vector $\\mathbf{v} \\in \\mathbb{R}^n$, there exist unique $c_1, \\dots, c_i$ such that $\\mathbf{v} = c_1\\mathbf{u}_1 + \\dots + c_i \\mathbf{u}_i$",
            "3": "Every vector in $\\mathbb{R}^n$ can be expressed as a linear combination of $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_i\\}$."
        },
        "answersIdx": [
            1,
            3
        ],
        "content": "Suppose instead $V_1 = \\mathbb{R}^n$. What should I expect to see?",
        "next": "Subspaces_default_1"
    },
    "Subspaces_default_1": {
        "type": "plain",
        "content": "Let's continue tying loose ends.",
        "next": "Subspaces_default_2"
    },
    "Subspaces_default_2": {
        "type": "dialogue",
        "options": {
            "0": "Yeah, what's up with that?",
            "1": "Err... what?"
        },
        "respondToIdx": {
            "0": "refresherSpace",
            "1": "refresherSpace"
        },
        "content": "Remember when I said that not all (vector) spaces are built the same?"
    },
    "refresherSpace": {
        "type": "dialogue",
        "options": {
            "0": "Yep..."
        },
        "respondToIdx": {
            "0": "continueSubspace"
        },
        "content": "Recall in our previous conversations I mentioned that even in Euclidean 3D space, you have infinitely many lines (1D) and planes (2D) passing through the origin, all of which can **span** many different directions."
    },
    "continueSubspace": {
        "type": "plain",
        "content": "But one thing is common about all of them: These are bona fide vector spaces embedded in another vector space! In other words, they are **subspaces**.",
        "next": "Subspaces_default_3"
    },
    "Subspaces_default_3": {
        "type": "plain",
        "content": "To put it formally, let $V$ be a vector space. A set $U$ is a subspace of $V$ iff $U \\subseteq V$ AND $U$ is a vector space.",
        "next": "Subspaces_default_4"
    },
    "Subspaces_default_4": {
        "type": "dialogue",
        "options": {
            "0": "... the what now?"
        },
        "respondToIdx": {
            "0": "solnSpaces"
        },
        "content": "One of the most common subspaces we'll learn about is **solution spaces**!"
    },
    "solnSpaces": {
        "type": "plain",
        "content": "Sorry, got ahead of myself there.<br> Let's phrase it like this. Consider a system $\\mathbf{Ax} = \\mathbf{0}$.",
        "next": "Subspaces_default_5"
    },
    "Subspaces_default_5": {
        "type": "plain",
        "content": "Then its solutions would look something like this:<br> $\\{c_1 \\mathbf{x}_1 + c_2 \\mathbf{x}_2 + \\dots + c_k \\mathbf{x}_k \\mid c_1, \\dots, c_n \\in \\mathbb{R} \\}$ where $\\mathbf{x}_1, \\dots, \\mathbf{x}_k \\in \\mathbb{R}^n$ were indiviudally solutions to $\\mathbf{Ax} = \\mathbf{0}$.<br> <br> (Think about it: for any $\\mathbf{A} \\mathbf{x}_i = \\mathbf{0}$ and $\\mathbf{A} \\mathbf{x}_j = \\mathbf{0}$, then $\\mathbf{A} (a\\mathbf{x}_i + b\\mathbf{x}_j) = \\mathbf{0}$)",
        "next": "Subspaces_default_6"
    },
    "Subspaces_default_6": {
        "type": "dialogue",
        "options": {
            "0": "Wait, that's the span of $\\{\\mathbf{x}_1, \\dots, \\mathbf{x}_n\\}$!"
        },
        "respondToIdx": {
            "0": "solnSpaceIsSpan"
        },
        "content": "Doesn't that look super familiar to you?"
    },
    "Subspaces_default_7": {
        "type": "dialogue",
        "options": {
            "0": "What about inhomogeneous systems?"
        },
        "respondToIdx": {
            "0": "inHomSystems"
        },
        "content": "Exactly! Hence, **for homogeneous systems**, we also call the solution set $\\{c_1 \\mathbf{x}_1 + c_2 \\mathbf{x}_2 + \\dots + c_k \\mathbf{x}_k \\mid c_1, \\dots, c_n \\in \\mathbb{R} \\}$ the solution **space** of $\\mathbf{Ax} = \\mathbf{0}$."
    },
    "inHomSystems": {
        "type": "plain",
        "content": "🥺 Well... they can never contain the zero vector, and so they can't be vector spaces...",
        "next": "Subspaces_default_8"
    },
    "Subspaces_default_8": {
        "type": "plain",
        "content": "That doesn't seem QUITE right though. They do still represent regions of space in their own right, don't they?",
        "next": "Subspaces_default_9"
    },
    "Subspaces_default_9": {
        "type": "plain",
        "content": "Fortunately, we can apply a similar logic as we did for **solution spaces**.",
        "next": "Subspaces_default_10"
    },
    "Subspaces_default_10": {
        "type": "dialogue",
        "options": {
            "0": "What on earth are you cooking?"
        },
        "respondToIdx": {
            "0": "cooking"
        },
        "content": "Now consider a system $\\mathbf{Ax} = \\mathbf{b}$.<br> For ANY $\\mathbf{A} \\mathbf{x}_i = \\mathbf{b}$ and $\\mathbf{A} \\mathbf{x}_j = \\mathbf{b}$, then $\\mathbf{A} (\\mathbf{x}_i - \\mathbf{x}_j) = \\mathbf{0}$."
    },
    "cooking": {
        "type": "plain",
        "content": "Let me cook!",
        "next": "Subspaces_default_11"
    },
    "Subspaces_default_11": {
        "type": "plain",
        "content": "Don't you see that we've already found something <u>like</u> a **solution space** hiding within the solutions to $\\mathbf{Ax} = \\mathbf{b}$?",
        "next": "Subspaces_default_12"
    },
    "Subspaces_default_12": {
        "type": "plain",
        "content": "And it would seem that this **quasi-solution space** doesn't have a dependence on the value of $\\mathbf{b}$.",
        "next": "Subspaces_default_13"
    },
    "Subspaces_default_13": {
        "type": "dialogue",
        "options": {
            "0": "brain.exe has stopped working",
            "1": "You are a genius!",
            "2": "I knew that all along 😎"
        },
        "respondToIdx": {
            "0": "affineSpace",
            "1": "affineSpace",
            "2": "affineSpace"
        },
        "content": "What if... the solution set for $\\mathbf{Ax} = \\mathbf{b}$ is actually the solution space for $\\mathbf{Ax} = \\mathbf{0}$, shifted up by a chosen vector (in this case, $\\mathbf{b}$)?"
    },
    "Subspaces_default_14": {
        "type": "plain",
        "content": "It's true! While they **cannot** be called vector spaces, these spaces nevertheless pop up frequently enough that we give them their own name: **affine spaces**.<br> <br> There are so many more spaces (vector or otherwise) that you will come across as you continue journeying through linear algebra.<br> For example, you have the **zero vector space**, which only contains the **zero** vector, the vector space of polynomials (up to degree n), and even the dual- oh wait, I'm not supposed to tell you about any non-Euclidean spaces yet :P",
        "next": "plain_default_1"
    },
    "plain_default_1": {
        "type": "plain",
        "content": "In any case, this is the just the bare minimum that you should know for now.<br> I encourage you to think more about the geometric meaning of vectors and matrices, and I'm excited to see what you'll be able to cook up as the weeks go by in this course!"
    }
};