const dialogueSystem = {
    "Scalar_default_1": {
        "type": "plain",
        "content": "Let's start with some simple operations we can apply on matrices.",
        "next": "Scalar_default_2"
    },
    "Scalar_default_2": {
        "type": "plain",
        "content": "Firstly, given two matrices of the same size, we can add them together. This is taking each entry and adding them together.",
        "next": "Scalar_default_3"
    },
    "Scalar_default_3": {
        "type": "tex",
        "content": "$$\\textbf{\\Large Matrix Addition} \\\\ $$<br> $$\\begin{pmatrix}a_{11}&a_{12}&\\cdots&a_{1n}\\\\a_{21}&a_{22}&\\cdots&a_{2n}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\a_{m1}&a_{m2}&\\cdots&a_{mn}\\end{pmatrix}+\\begin{pmatrix}b_{11}&b_{12}&\\cdots&b_{1n}\\\\b_{21}&b_{22}&\\cdots&b_{2n}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\b_{m1}&b_{m2}&\\cdots&b_{mn}\\end{pmatrix}=\\begin{pmatrix}a_{11}+b_{11}&a_{12}+b_{12}&\\cdots&a_{1n}+b_{1n}\\\\a_{21}+b_{21}&a_{22}+b_{22}&\\cdots&a_{2n}+b_{2n}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\a_{m1}+b_{m1}&a_{m2}+b_{m2}&\\cdots&a_{mn}+b_{mn}\\end{pmatrix}$$",
        "next": "Scalar_default_4"
    },
    "Scalar_default_4": {
        "type": "plain",
        "content": "Next, to add something $c$ times of something is the same as multiplying it by $c$. This is how we define scalar multiplication of a matrix as well:",
        "next": "Scalar_default_5"
    },
    "Scalar_default_5": {
        "type": "tex",
        "content": "$$\\textbf{\\Large Scalar Multiplication} \\\\ $$<br> $$c\\begin{pmatrix}a_{11}&a_{12}&\\cdots&a_{1n}\\\\a_{21}&a_{22}&\\cdots&a_{2n}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\a_{m1}&a_{m2}&\\cdots&a_{mn}\\end{pmatrix}=\\begin{pmatrix}ca_{11}&ca_{12}&\\cdots&ca_{1n}\\\\ca_{21}&ca_{22}&\\cdots&ca_{2n}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\ca_{m1}&ca_{m2}&\\cdots&ca_{mn}\\end{pmatrix}$$",
        "next": "VectorEqn_default_1"
    },
    "VectorEqn_default_1": {
        "type": "plain",
        "content": "Recap from 2.1, a (column) vector is a matrix with $1$ column only.",
        "next": "VectorEqn_default_2"
    },
    "VectorEqn_default_2": {
        "type": "mcq",
        "options": {
            "0": "$\\left(\\begin{array}{c} 2x+y \\\\ 3x+4y \\\\\\end{array}\\right)$",
            "1": "Can we even do this?"
        },
        "answersIdx": [
            0
        ],
        "content": "Using the above rules of matrix algebra, what do you think the following expression evaluates to? $x$ and $y$ in this case are some real numbers<br> $$x\\left(\\begin{array}{c} 2 \\\\ 3 \\\\\\end{array}\\right) + y\\left(\\begin{array}{c} 1 \\\\ 4 \\\\\\end{array}\\right)$$",
        "next": "VectorEqn_default_3"
    },
    "VectorEqn_default_3": {
        "type": "mcq",
        "options": {
            "0": "$x = 10$, $y = 1$"
        },
        "answersIdx": [
            0
        ],
        "content": "Now, given the following equation, solve for $x$ and $y$:<br> $$x\\left(\\begin{array}{c} 2 \\\\ 3 \\\\\\end{array}\\right) + y\\left(\\begin{array}{c} 1 \\\\ 4 \\\\\\end{array}\\right) = \\left(\\begin{array}{c} 21 \\\\ 34 \\\\\\end{array}\\right)$$",
        "next": "VectorEqn_default_4"
    },
    "VectorEqn_default_4": {
        "type": "plain",
        "content": "Since we have that:<br> $$x\\left(\\begin{array}{c} 2 \\\\ 3 \\\\\\end{array}\\right) + y\\left(\\begin{array}{c} 1 \\\\ 4 \\\\\\end{array}\\right) = \\left(\\begin{array}{c} 2x+y \\\\ 3x+4y \\\\\\end{array}\\right) = \\left(\\begin{array}{c} 21 \\\\ 34 \\\\\\end{array}\\right)$$<br> This is the same as solving this system of linear equations!$$\\begin{array}{}2x &+&     y &=& 21 \\\\3x &+&    4y &=& 34 \\\\\\end{array}$$",
        "next": "MatrixVector_default_1"
    },
    "MatrixVector_default_1": {
        "type": "plain",
        "content": "So far, we've expressed a system of a linear equations in two ways:<br> <br> Just now, we expressed it as a vector equation - $x$ times vector $1$ plus $y$ times vector $2$<br> <br> In chapter 1, we expressed it as an augmented matrix",
        "next": "MatrixVector_default_2"
    },
    "MatrixVector_default_2": {
        "type": "plain",
        "content": "Let's try to bridge this gap using a new way method: <b>Matrix Multiplication</b>. But first let's start with a simpler case where we multiply a matrix and a vector together.",
        "next": "MatrixVector_default_3"
    },
    "MatrixVector_default_3": {
        "type": "plain",
        "content": "For some matrix $A$ and vector $x$, we can multiply them: $Ax = u$ to get a new vector $u$.",
        "next": "MatrixVector_default_4"
    },
    "MatrixVector_default_4": {
        "type": "tex",
        "content": "$$\\textbf{\\Large Matrix-Vector Multiplication} \\\\ $$<br> $$\\begin{pmatrix}a_{11}&a_{12}&\\cdots&a_{1p}\\\\a_{21}&a_{22}&\\cdots&a_{2p}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\a_{m1}&a_{m2}&\\cdots&a_{mp}\\end{pmatrix}\\begin{pmatrix}x_{1}\\\\x_{2}\\\\ \\vdots\\\\x_{p}\\end{pmatrix}=\\begin{pmatrix}x_1a_{11} + x_1a_{12} + \\dots + x_1a_{1p}\\\\x_2a_{21} + x_2a_{22} + \\dots + x_2a_{2p}\\\\ \\vdots \\\\x_ma_{m1} + x_ma_{m2} + \\dots + x_ma_{mp} \\end{pmatrix}$$",
        "next": "MatrixVector_default_5"
    },
    "MatrixVector_default_5": {
        "type": "mcq",
        "options": {
            "0": "$\\left(\\begin{array}{c} 15 \\\\ 70\\\\",
            "1": "$\\left(\\begin{array}{c} 20 \\\\ 55\\\\"
        },
        "answersIdx": [
            1
        ],
        "content": "Let's try this out. What is the result of the following multipliation?<br> $$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right)\\left(\\begin{array}{c} 5 \\\\ 10\\\\\\end{array}\\right) = \\textbf{??}$$<br> \\end{array}\\right)$\\end{array}\\right)$",
        "next": "MatrixVector_default_6"
    },
    "MatrixVector_default_6": {
        "type": "plain",
        "content": "$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\ \\end{array}\\right)$ consists of two column vectors glued together.<br> When we multiply it by $\\left(\\begin{array}{c} 5 \\\\ 10\\\\\\end{array}\\right)$, we are saying that we want $5$ times $\\left(\\begin{array}{c} 2 \\\\ 3\\\\\\end{array}\\right)$ plus $10$ times $\\left(\\begin{array}{c} 1 \\\\ 4\\\\\\end{array}\\right)$<br> $$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right)\\left(\\begin{array}{c} 5 \\\\ 10\\\\\\end{array}\\right) = 5\\left(\\begin{array}{c} 2 \\\\ 3\\\\\\end{array}\\right) + 10\\left(\\begin{array}{c} 1 \\\\ 4\\\\\\end{array}\\right) = \\left(\\begin{array}{c} 20 \\\\ 55\\\\\\end{array}\\right)$$",
        "next": "Matrix_default_1"
    },
    "Matrix_default_1": {
        "type": "plain",
        "content": "We've seen how when we multiply a matrix $A$ by vector $x$, we can treat the matrix $A$ as a several vectors glued together. But what if we apply this \"gluing\" logic to the vectors $x$?",
        "next": "Matrix_default_2"
    },
    "Matrix_default_2": {
        "type": "dialogue",
        "options": {
            "0": "A $2 \\times 2$ matrix",
            "1": "Two vectors glued together",
            "2": "A vector",
            "3": "I don't know..."
        },
        "respondToIdx": {
            "0": "afterMatrixMulGuess",
            "1": "afterMatrixMulGuess",
            "2": "afterMatrixMulGuess",
            "3": "afterMatrixMulGuess"
        },
        "content": "What if we multiply two matrices together? What kind of object do you expect from this mutliplication?<br> $$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right)\\left(\\begin{array}{c c} 5 & 10 \\\\ 10 & 1\\\\\\end{array}\\right) = \\textbf{??}$$"
    },
    "afterMatrixMulGuess": {
        "type": "plain",
        "content": "We can treat the matrix $\\left(\\begin{array}{c c} 5 & 10 \\\\ 10 & 1\\\\\\end{array}\\right)$ as two vectors glued together, and perform the multiplication seperately!<br> $$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right)\\left(\\begin{array}{c} 5 \\\\ 10\\\\\\end{array}\\right) = \\left(\\begin{array}{c}  20 \\\\ 55\\\\\\end{array}\\right) $$$$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right)\\left(\\begin{array}{c} 10 \\\\ 1\\\\\\end{array}\\right) = \\left(\\begin{array}{c}  21 \\\\ 34\\\\\\end{array}\\right)$$",
        "next": "Matrix_default_3"
    },
    "Matrix_default_3": {
        "type": "mcq",
        "options": {
            "0": "Glue them together!"
        },
        "answersIdx": [],
        "content": "Now, what should do with these two vectors?",
        "next": "Matrix_default_4"
    },
    "Matrix_default_4": {
        "type": "plain",
        "content": "That's right! The result of this is:<br> $$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right)\\left(\\begin{array}{c c} 5 & 10 \\\\ 10 & 1\\\\\\end{array}\\right) = \\left(\\begin{array}{c c} 20 & 21 \\\\ 55 & 34\\\\\\end{array}\\right)$$",
        "next": "Matrix_default_5"
    },
    "Matrix_default_5": {
        "type": "plain",
        "content": "There are many ways to understand matrix multiplcation. Below we will describe one of them, given two matrices $A$ and $B$, we can think of multiplying $A$ and $B$ like this<br> <br> 1. Split $B$ into its column vectors $b_1, b_2, \\dots, b_m$<br> 2. Perform Matrix-Vector multiplication for each of the vectors $Ab_i$. Let the result of be $c_i$, i.e. $Ab_i = c_i$<br> 3. \"Glue\" The vectors $c_1, c_2, \\dots, c_m$ together to form the matrix $C$. $C$ is the result of multiplying $A$ and $B$. i.e. $AB = C$.",
        "next": "Matrix_default_6"
    },
    "Matrix_default_6": {
        "type": "mcq",
        "options": {
            "0": "2 rows",
            "1": "3 rows",
            "2": "2 columns",
            "3": "3 columns"
        },
        "answersIdx": [
            1,
            2
        ],
        "content": "Let's try more examples!<br> $$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4 \\\\ 7 & 8\\end{array}\\right)\\left(\\begin{array}{c c} 5 & 10 \\\\ 10 & 1\\end{array}\\right) = \\textbf{??}$$<br> How many rows and columns should the resulting matrix have?",
        "next": "Matrix_default_7"
    },
    "Matrix_default_7": {
        "type": "mcq",
        "options": {
            "0": "2 rows",
            "1": "3 rows",
            "2": "2 columns",
            "3": "3 columns",
            "4": "It's not possible"
        },
        "answersIdx": [
            4
        ],
        "content": "What about this?<br> $$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right)\\left(\\begin{array}{c c} 5 & 10 \\\\ 10 & 1\\\\ 7 & 8\\end{array}\\right) = \\textbf{??}$$<br> How many rows and columns should the resulting matrix have?",
        "next": "Matrix_default_8"
    },
    "Matrix_default_8": {
        "type": "plain",
        "content": "Let's try doing<br> $$\\left(\\begin{array}{c c} 2 & 1 \\\\ 3 & 4\\\\\\end{array}\\right)\\left(\\begin{array}{c} 5  \\\\ 10\\\\ 7\\end{array}\\right) = \\textbf{??}$$<br> We want $5$ times of $\\left(\\begin{array}{c} 2 \\\\ 3\\\\\\end{array}\\right)$, $10$ times of $\\left(\\begin{array}{c} 1 \\\\ 4\\\\\\end{array}\\right)$, and $7$ times of... there's no vector there!<br> <br> This multiplication doesn't make sense because the dimensions of the matrices don't match",
        "next": "Matrix_default_9"
    },
    "Matrix_default_9": {
        "type": "mcq",
        "options": {
            "0": "The no. of columns in $A$ equals the no. of columns in $B$",
            "1": "The no. of rows in $A$ equals the no. of rows in $B$",
            "2": "The no. of columns in $A$ equals the no. of rows in $B$",
            "3": "The no. of rows in $A$ equals the no. of columns in $B$"
        },
        "answersIdx": [
            2
        ],
        "content": "Think back to the process, if we want to multiply matrices $A$ and $B$ together, what condition(s) must be satisfied?",
        "next": "Matrix_default_10"
    },
    "Matrix_default_10": {
        "type": "plain",
        "content": "Given matrix $A$ is $m$ by $p$ and matrix $B$ is $p$ by $mn$, $AB$ will give us a $m$ by $n$ matrix.",
        "next": "Matrix_default_11"
    },
    "Matrix_default_11": {
        "type": "tex",
        "content": "$\\textbf{Matrix Multiplication}$<br> $$\\mathbf{AB}=(a_{ij})_{m\\times p}(b_{ij})_{p\\times n}=(\\sum_{k=1}^pa_{ik}b_{kj})_{m\\times n}$$<br> $$\\begin{pmatrix}a_{11}&a_{12}&\\cdots&a_{1p}\\\\a_{21}&a_{22}&\\cdots&a_{2p}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\a_{m1}&a_{m2}&\\cdots&a_{mp}\\end{pmatrix}\\begin{pmatrix}b_{11}&b_{12}&\\cdots&b_{1n}\\\\b_{21}&b_{22}&\\cdots&b_{2n}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\b_{p1}&b_{p2}&\\cdots&b_{pm}\\end{pmatrix}=\\begin{pmatrix}a_{11}b_{11}+a_{12}b_{21}+\\cdots+a_{1p}b_{p1}&a_{11}b_{12}+a_{12}b_{22}+\\cdots+a_{1p}b_{p2}&\\cdots&a_{11}b_{1n}+a_{12}b_{2n}+\\cdots+a_{1p}b_{pn}\\\\a_{21}b_{11}+a_{22}b_{21}+\\cdots+a_{2p}b_{p1}&a_{21}b_{12}+a_{22}b_{22}+\\cdots+a_{2p}b_{p2}&\\cdots&a_{21}b_{1n}+a_{22}b_{2n}+\\cdots+a_{2p}b_{pn}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\a_{m1}b_{11}+a_{m2}b_{21}+\\cdots+a_{mp}b_{p1}&a_{m1}b_{12}+a_{m2}b_{22}+\\cdots+a_{mp}b_{p2}&\\cdots&a_{m1}b_{1n}+a_{m2}b_{2n}+\\cdots+a_{mp}b_{pn}\\end{pmatrix}$$",
        "next": "Matrix_default_12"
    },
    "Matrix_default_12": {
        "type": "plain",
        "content": "Above is the formal definition of matrix multiplication.<br> <br> The $(i, j)$-entry of the product $AB$ is the sum of the product of the entries in the $i$-th row of $A$ with the $j$-th column of $B$.<br> <br> We can verify that this gives us the same result as the \"split B into vectors, multiply them by A, and glue them together\" process that we've discussed above."
    }
};