const dialogueSystem = {
    "Intro_default_1": {
        "type": "plain",
        "content": "Let's consider the following equation.<br> $$\\begin{array}{}x &-&     y & &  &=& 0 \\\\ax &-&    y &+& z &=& 4 \\\\ax &-&    ay &+& a-2 &=& -4 \\\\\\end{array}$$<br> This is a linear system of equation in terms of $x$, $y$, $z$. $a$ here is a constant. The goal here is to solve for $x$,$y$,$z$ and express it in terms of $a$",
        "next": "Intro_default_2"
    },
    "Intro_default_2": {
        "type": "plain",
        "content": "How do we even begin approaching this? Let's start by putting it into an augmented matrix.<br> $$\\left(\\begin{array}{ccc|c}1 & -1 & 0 & 0 \\\\a & -1 & 1 & 4 \\\\a & -a & a-2 & -4 \\\\\\end{array}\\right)$$",
        "next": "Intro_default_3"
    },
    "Intro_default_3": {
        "type": "plain",
        "content": "Recall from 1.4 - we try to reduce the matrix to a simpler form - REF or RREF, because these forms allow us to more easily derive the answer.",
        "next": "Intro_default_4"
    },
    "Intro_default_4": {
        "type": "mcq",
        "options": {
            "0": "$R_2 - aR_1$",
            "1": "$R_3 - aR_1$",
            "2": "$\\frac{1}{a}R_2$",
            "3": "$\\frac{1}{a}R_3$"
        },
        "answersIdx": [
            0,
            1
        ],
        "content": "Which row operations make sense to be carried out here?",
        "next": "Intro_default_5"
    },
    "Intro_default_5": {
        "type": "plain",
        "content": "The first two help us make the row $2$ column $1$ and row $3$ column $1$ turn into $0$. As for why the other two don't work, what if $a=0$? what is division by $0$?<br> <br> <strong>Remember - whatever row operation we do must work for all $a$</strong>",
        "next": "WrongBackSub_default_1"
    },
    "WrongBackSub_default_1": {
        "type": "plain",
        "content": "Applying these operations, we get the matrix:<br> $$\\left(\\begin{array}{ccc|c}1 & -1 & 0 & 0 \\\\0 & a-1 & 1 & 4 \\\\0 & 0 & a-2 & -4 \\\\\\end{array}\\right)$$<br> The above matrix looks like it's in REF! Let's back substitute!",
        "next": "WrongBackSub1"
    },
    "WrongBackSub1": {
        "type": "dialogue",
        "options": {
            "0": "$(a-2)z = -4 \\implies z = \\frac{-4}{a-2}$",
            "1": "hold on..."
        },
        "respondToIdx": {
            "0": "WrongBackSub2",
            "1": "CasesStart"
        },
        "content": "Let's solve for $z$"
    },
    "WrongBackSub2": {
        "type": "dialogue",
        "options": {
            "0": "$y = \\frac{4 - \\frac{-4}{a-2}}{a-1} = \\frac{4}{a-2}$ (simplification ommitted)",
            "1": "something feels wrong..."
        },
        "respondToIdx": {
            "0": "WrongBackSub3",
            "1": "CasesStart"
        },
        "content": "Let's solve for $y$. Substitute $\\frac{-4}{a-2}$ into $(a-1)y + z = 4$"
    },
    "WrongBackSub3": {
        "type": "dialogue",
        "options": {
            "0": "$x = \\frac{4}{a-2}$",
            "1": "something is very wrong..."
        },
        "respondToIdx": {
            "0": "WrongBackSub4",
            "1": "CasesStart"
        },
        "content": "Let's solve for $x$. Substitute $y = \\frac{4}{a-2}$ into $x-y = 0$"
    },
    "WrongBackSub4": {
        "type": "dialogue",
        "options": {
            "0": "oh no..."
        },
        "respondToIdx": {
            "0": "CasesStart"
        },
        "content": "We solved it! Let's verify our answer - if $a=2$, what's the value of $x$, $y$ and $z$?"
    },
    "CasesStart": {
        "type": "plain",
        "content": "You might notice if $a=2$, we're dividing by $0$! Actually it's not just that, there's a deeper problem here. Let's look again the matrix:<br> $$\\left(\\begin{array}{ccc|c}1 & -1 & 0 & 0 \\\\0 & a-1 & 1 & 4 \\\\0 & 0 & a-2 & -4 \\\\\\end{array}\\right)$$",
        "next": "Cases_default_1"
    },
    "Cases_default_1": {
        "type": "plain",
        "content": "Let's take a look at several cases of values for the matrix:<br> $$a=1 \\implies \\left(\\begin{array}{ccc|c}1 & -1 & 0 & 0 \\\\0 & 0 & 1 & 4 \\\\0 & 0 & -1 & -4 \\\\\\end{array}\\right)$$$$a=2 \\implies \\left(\\begin{array}{ccc|c}1 & -1 & 0 & 0 \\\\0 & 1 & 1 & 4 \\\\0 & 0 & 0 & -4 \\\\\\end{array}\\right)$$$$a=3 \\implies \\left(\\begin{array}{ccc|c}1 & -1 & 0 & 0 \\\\0 & 2 & 1 & 4 \\\\0 & 0 & 1 & -4 \\\\\\end{array}\\right)$$$$a=4 \\implies \\left(\\begin{array}{ccc|c}1 & -1 & 0 & 0 \\\\0 & 3 & 1 & 4 \\\\0 & 0 & 2 & -4 \\\\\\end{array}\\right)$$",
        "next": "Cases_default_2"
    },
    "Cases_default_2": {
        "type": "plain",
        "content": "Can you see that the staircase of zeros is different for each of them? When $a=1$, the $a-1$ term turns into $0$. When $a=2$, the $a-2$ term turns into $0$.<br> <br> Recall from the process for reducing to REF or RREF, looking at where the $0$s are is very important for determining the next step. Hence, we shouldn't blindly apply the algorithm, unless we are very sure that the unknown terms aren't $0$.",
        "next": "Cases_default_3"
    },
    "Cases_default_3": {
        "type": "mcq",
        "options": {
            "0": "When $a \\neq 1$",
            "1": "When $a \\neq 2$",
            "2": "When both of the above statements are true"
        },
        "answersIdx": [
            2
        ],
        "content": "So, when are we sure the unknown terms aren't $0$?",
        "next": "Cases_default_4"
    },
    "Cases_default_4": {
        "type": "mcq",
        "options": {
            "0": "We can handle those seperately!"
        },
        "answersIdx": [
            0
        ],
        "content": "If $a \\neq 1$ and $a\\neq 2$, the above back substitution formula would work! But what if $a = 1$ or $a = 2$?",
        "next": "Cases_default_5"
    },
    "Cases_default_5": {
        "type": "plain",
        "content": "Let's look at $a=2$ first.<br> $$a=2 \\implies \\left(\\begin{array}{ccc|c}1 & -1 & 0 & 0 \\\\0 & 1 & 1 & 4 \\\\0 & 0 & 0 & -4 \\\\\\end{array}\\right)$$",
        "next": "Cases_default_6"
    },
    "Cases_default_6": {
        "type": "plain",
        "content": "The last row is saying that $0x + 0y + 0z = -4$, which is not possible! Hence if $a=2$, this system is inconsistent.",
        "next": "Cases_default_7"
    },
    "Cases_default_7": {
        "type": "plain",
        "content": "Now for $a=1$<br> $$a=1 \\implies \\left(\\begin{array}{ccc|c}1 & -1 & 0 & 0 \\\\0 & 0 & 1 & 4 \\\\0 & 0 & -1 & -4 \\\\\\end{array}\\right)$$",
        "next": "Cases_default_8"
    },
    "Cases_default_8": {
        "type": "plain",
        "content": "Taking $R_3 + R_2$, we get<br> $$\\left(\\begin{array}{ccc|c}1 & -1 & 0 & 0 \\\\0 & 0 & 1 & 4 \\\\0 & 0 & -1 & -4 \\\\\\end{array}\\right) \\xrightarrow[]{R_3 + R_2}\\left(\\begin{array}{ccc|c}1 & -1 & 0 & 0 \\\\0 & 0 & 1 & 4 \\\\0 & 0 & 0 & 0 \\\\\\end{array}\\right)$$",
        "next": "Cases_default_9"
    },
    "Cases_default_9": {
        "type": "plain",
        "content": "This is already in RREF! (this is a coincidence by the way, it's usually not this convenient)<br> <br> The pivot columns are $1$ and $3$. We can let the non-pivot column (corresponding to $y$) be the parameter $s$.<br> <br> Our answer will be: $x = s, y=s, z = 4$, for any real number $s$",
        "next": "Cases_default_10"
    },
    "Cases_default_10": {
        "type": "plain",
        "content": "Hence,<br> <br> If $a=2$, we get no solution.<br> If $a=1$, we get infinitely many solutions with one parameter<br> Otherwise, we get a unique solution that can be expressed in terms of $a$<br> <br> Isn't that interesting?",
        "next": "Cases_default_11"
    },
    "Cases_default_11": {
        "type": "plain",
        "content": "Remember the purpose of REF and RREF algorithms are to simplify matrices into a form that we can solve more easily. However, we sometimes cannot proceed because we don't know if some term (e.g. $a-1$, $a-2$) is $0$ or not.<br> <br> In such situations, we should split into cases. If we assume a value of $a$ that makes some term $0$, we proceed to solve that specific case. Otherwise, we can proceed normally, since we have the assurance that every term containing $a$ is non-zero.",
        "next": "Cases_default_12"
    },
    "Cases_default_12": {
        "type": "plain",
        "content": "That being said, the above is just the general principle. There's no hard and fast rule, so practice more and you'll get the hang of it :)",
        "next": "Cases_default_13"
    },
    "Cases_default_13": {
        "type": "plain",
        "content": "That wraps up 1.5, congrats for making it to the end of chapter 1!"
    }
};