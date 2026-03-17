## Intro: Dividing by a Matrix?!

### plain
Let's review your matrix algebra skills!

### mcq
Let $c \in \mathbb{R}, \mathbf{A} \in \mathbb{R}^{m \times p}, \mathbf{B} \in \mathbb{R}^{p \times n}.$
Under the assumption that all of the above are nonzero,
which of the following expressions are valid?

* $c\mathbf{A}$
* $\frac{1}{c}\mathbf{A}$
- $c\frac{1}{\mathbf{A}}$
* $\mathbf{AB}$
- $\mathbf{BA}$
- $\frac{1}{\mathbf{BA}}$

### dialogue
Hmm. Have we heard of the term matrix division before?
What does it mean to divide the scalar $1$ by a matrix?
I can't seem to visualize it...
- Maybe use $\mathbf{I}$ instead of $1$?
    - questioning

### dialogue questioning
Maybe you have a point...
Since multiplying a matrix with $\mathbf{I}$ is the same as multiplying with $1$.
But then, the matrix might not be square!
- What if we assume it's square?
    - questioningHard

### dialogue questioningHard
Fair. Let's say we have square matrices $\mathbf{A}, \mathbf{B} \in \mathbb{R}^{n \times n}$, and $\mathbf{AB=C}$.
What does $\mathbf{\frac{C}{A}}$ give us?

- $\mathbf{B},$ duh.
    - reveal
- Urm. That makes no sense.
    - reveal
- Each entry in $\mathbf{C}$ divided by the corresponding entry in $\mathbf{A}$
    - clarify


### plain clarify
Remember what we learnt last chapter?
Matrix multiplication $\mathbf{AB}$ does not simply multiply each entry in $\mathbf{A}$ with $\mathbf{B}$.
So why should division be any different?

### plain reveal
We let:
$$
\mathbf{A} = 
\left(\begin{array}{cc}
1 & -1 \\ -1 & 0
\end{array}\right), \;\;\;\;
\mathbf{C} = 
\left(\begin{array}{cc}
1 & -2 \\ 0 & 1
\end{array}\right)
$$
Now, ima try solving for $\mathbf{\frac{C}{A}}$.

### plain
I found both:
$$
\mathbf{A}
\left(\begin{array}{cc}
0 & -1 \\ -1 & 1
\end{array}\right)
= \mathbf{C},$$
$$
\left(\begin{array}{cc}
-1 & 1 \\ -1 & 2
\end{array}\right)
\mathbf{A=C}
$$
Since the 'expression' $\mathbf{\frac{C}{A}}$ can be interpreted either way, it really shouldn't be used!

## Matrix Inverse
### dialogue
If $\mathbf{AB=C}$ and we want to express $\mathbf{B}$ in terms of $\mathbf{A}$ and $\mathbf{C}$, we'll have to find another way.
- $\mathbf{B}=\mathbf{A}^{-1}\mathbf{C}$? I remember matrix power was mentioned earlier...
    - recallPower

### plain recallPower
Yup! In chapter 2.2, the power of a square matrix was defined as:
i) $\mathbf{A}^0=\mathbf{I}$
ii) $\mathbf{A}^k=\mathbf{AA}^{k-1}$, for $k \geq 1$

The condition $k \geq 1$ seems problematic, as it does not extend the definition for negative powers.
Let's just pretend it does not exist for now 🙄
Perhaps we will find out why later!

### dialogue
Suppose now we have square matrices $\mathbf{A}$ of order $n$. 
We denote its inverse as $\mathbf{A}^{-1}$.
Instinctively, what should the product $\mathbf{AA}^{-1}$ be equal to?
- $\mathbf{AA}^{-1}=\mathbf{A}^0=\mathbf{I_n}$
    - firstId
    
### plain firstId
Yes! It only makes sense that a square matrix and its inverse should form the identity matrix when multiplied together!
Also, if we swap the order of $\mathbf{A}$ and $\mathbf{A}^{-1}$, we should still get:
$$\mathbf{A}^{-1}\mathbf{A}=\mathbf{A}^0=\mathbf{I_n}$$

### mcq
Now let's try to find the inverse of a simple square matrix:
$$
\mathbf{A} = 
\left(\begin{array}{cc}
2 & 0 \\ 0 & 2
\end{array}\right), \;\;\;\; \mathbf{A}^{-1} = \mathbf{?}
$$
- $\frac{1}{2}$
* $\left(\begin{array}{cc}\frac{1}{2} & 0 \\ 0 & \frac{1}{2}\end{array}\right)$

### mcq
Wow, that was pretty obvious, wasn't it?
How about this: 
$$
\mathbf{A} = 
\left(\begin{array}{cc}
0 & 0 \\ 0 & 0
\end{array}\right), \;\;\;\; \mathbf{A}^{-1} = \mathbf{?}
$$
* That's impossible! You cannot divide by zero.
- $\left(\begin{array}{cc}\infty & 0 \\ 0 & \infty\end{array}\right)$

### mcq
Hmm... it seems like not all matrices have an inverse 🤔
But to be fair, that was kinda obvious.
This is the last one, I promise: 
$$
\mathbf{A} = 
\left(\begin{array}{cc}
1 & 1 \\ 0 & 0
\end{array}\right), \;\;\;\; \mathbf{A}^{-1} = \mathbf{?}
$$
This time, just find out if it has an inverse.
- It does...
* NOT!

### plain
Suppose that we don't know how to find $\mathbf{A}^{-1}$ yet.
So we take:
$$
\mathbf{A}^{-1} = 
\left(\begin{array}{cc}
a & b \\ c & d
\end{array}\right), \;\;\;\; a,b,c,d \in \mathbb{R}
$$

### plain
Then,
$$
\begin{align}
\mathbf{AA}^{-1} 
&= 
\left(\begin{array}{cc}
1 & 1 \\ 0 & 0
\end{array}\right)
\left(\begin{array}{cc}
a & b \\ c & d
\end{array}\right)
\\ &=
\left(\begin{array}{cc}
a+c & b+d \\ 0 & 0
\end{array}\right)
\\ &\neq 
\left(\begin{array}{cc}
1 & 0 \\ 0 & 1
\end{array}\right)
= \mathbf{I}
\end{align}
$$

### mcq
Notice that the criteria for a square matrix to have an inverse is not as simple as just being all zeroes. 
Now, if such inverse exists, is it unique?
* Yes
- No

### plain
Let's try to prove it! Suppose the square matrix $\mathbf{A}$ has two inverses $\mathbf{B}$ and $\mathbf{C}$.
Then:
$$
\begin{align}
\mathbf{B} &= \mathbf{BI}
\\ &=
\mathbf{B\left(AC\right)} 
\\ &= 
\mathbf{\left(BA\right)C}
\\ &=
\mathbf{IC}
\\ &=
\mathbf{C}
\end{align}
$$
As a result of its definition, it must be unique.

### tex
insert definition here

## Properties of Inverse
### plain
Time for some exercises, whether you like it or not 🙃

### mcq
(1/4) What is $\left(\mathbf{A}^{-1}\right)^{-1}$?
- $\mathbf{A}^{-2}$
- $\mathbf{I}$
* $\mathbf{A}$

### plain
Recall basic exponentiation: $$\left(\mathbf{A}^{-1}\right)^{-1}=\mathbf{A}^{-1(-1)}=\mathbf{A}$$

### mcq
(2/4) What is $\left(a\mathbf{A}\right)^{-1}$, for $a \neq 0$ and some invertible $\mathbf{A}$?
- $a\mathbf{A}^{-1}$
* $\frac1a\mathbf{A}^{-1}$

### plain
To verify, we multiply it and its inverse:
$$
\begin{align}
(a\mathbf{A})\left(\frac1a\mathbf{A}^{-1}\right) 
&= 
a\left(\frac1a\right)\left(\mathbf{AA}^{-1}\right)
\\ &= 
\mathbf{I}
\end{align}
$$

### mcq
(3/4) For some invertible $\mathbf{A}$:
$$\left(\mathbf{A}^\top\right)^{-1}=\left(\mathbf{A}^{-1}\right)^\top$$
* True
- False

### plain
This one's tricky!
$$
\begin{align}
\mathbf{I}&=\mathbf{I^\top}
\\
\mathbf{A}^\top \left(\mathbf{A}^\top\right)^{-1}&=\left(\mathbf{A}^{-1}\mathbf{A}\right)^\top
\\
\mathbf{A}^\top \left(\mathbf{A}^\top\right)^{-1}&=\mathbf{A}^\top\left(\mathbf{A}^{-1}\right)^\top
\\
\left(\mathbf{A}^\top\right)^{-1}&=\left(\mathbf{A}^{-1}\right)^\top
\end{align}
$$

### mcq
(4/4) 
For invertible matrices $\mathbf{A}, \mathbf{B}, \mathbf{C}$, what is $\left(\mathbf{ABC}\right)^{-1}$?
- $\mathbf{CBA}$
* $\mathbf{C}^{-1}\mathbf{B}^{-1}\mathbf{A}^{-1}$
- $\mathbf{A}^{-1}\mathbf{B}^{-1}\mathbf{C}^{-1}$

### plain
Let's verify:
$$
\begin{align}
(\mathbf{ABC})\left(\mathbf{C}^{-1}\mathbf{B}^{-1}\mathbf{A}^{-1}\right) 
&=
\mathbf{AB}\left(\mathbf{CC}^{-1}\right)\mathbf{B}^{-1}\mathbf{A}^{-1}
\\ &=
\mathbf{AB}\left(\mathbf{I}\right)\mathbf{B}^{-1}\mathbf{A}^{-1}
\\ &=
\mathbf{A}\left(\mathbf{\mathbf{BB}^{-1}}\right)\mathbf{A}^{-1}
\\ &=
\mathbf{A}\left(\mathbf{\mathbf{I}}\right)\mathbf{A}^{-1}
\\ &=
\mathbf{A}\mathbf{A}^{-1}
\\ &=
\mathbf{I}
\end{align}
$$

### plain
That summarizes the algebraic properties of the inverse!
I've compiled all you need to know below.

### tex
idk

## Invertible Matrices
### plain
From now on, we'll use the terms:
• <b>invertible matrix</b> if the square matrix has an inverse
• <b>singular matrix</b> if the square matrix does not have in inverse

### plain
Invertible matrices have some basic properties that might be taken for granted. Let's see!

### mcq
First, let's start off with something simple:
$$ab = ac,$$where $a,b,c\in\mathbb{R}$.
What can be concluded from the above equation?
- $b=c$
* $dab=dac$ for some $d \in \mathbb{R}$

### dialogue
We can always multiply extra variables into both sides and it will still hold.
However, we can't just cancel $a$. Why is this so?
- If $a=0$, then $b$ and $c$ may not be equal.
    - dassRight
    
### mcq dassRight
Yup!! If $a \neq 0$, we can also see it as multiplying $\frac1a$ to both sides of the equation!
Now how about matrices?
$$\mathbf{AB} = \mathbf{AC},$$where $\mathbf{A} \in \mathbb{R}^{n \times n}$ and $\mathbf{B}, \mathbf{C} \in \mathbb{R}^{n \times k}$.
What can be concluded from the above equation?
- $\mathbf{B}=\mathbf{C}$
* $\mathbf{DAB}=\mathbf{DAC}$ for some $\mathbf{D} \in \mathbb{R}^{m \times n}$

### plain
Well, for a fact, $\mathbf{A}$ may be $\mathbf{0_{n \times n}}$, but it doesn't just stop there.

### plain
To cancel out $\mathbf{A}$, we can try premultiplying a matrix to both sides.
However, this matrix only exists if $\mathbf{A}$ is invertible, because it is none other than $\mathbf{A}^{-1}$!
Therefore, the condition for $\mathbf{B}=\mathbf{C}$ is that $\mathbf{A}$ is invertible.

### mcq
Revisiting the linear system $\mathbf{Ax=b}$, what can we conclude if $\mathbf{x} = \mathbf{A}^{-1}{\mathbf{b}}$?

* There are as many variables as equations
* At least one solution exists for all $\mathbf{b}$
* For any given $\mathbf{b}$, the solution will always be different

### plain
Mhm!
As long as $\mathbf{A}$ is invertible, the system will always produce a unique solution for all $\mathbf{b}$.
The converse is true as well.

## The Mantra (Equivalent Statements)
### dialogue
We have talked so much about invertible matrices and their inverse, but how do we determine if a matrix is invertible?
- Well, if $\mathbf{Ax=b}$ produces a unique solution for all $\mathbf{b}$.
    - hint1
    
### plain hint1
Aaaand to check that it produces a unique solution?
- Reduce it to R/REF
    - hint2
    
### plain
You GOT IT.
As you may know, some $\mathbf{b}$ may produce a unique solution, while others may produce none or infinite solutions.
To cover all $\mathbf{b}$, we just take each entry on the right side of the reduced augmented matrix as nonzero:
$$
(\mathbf{A}\; | \;\mathbf{b})
\rightarrow
\left(\begin{array}{cccccc|c}
\ast&\cdots&\ast&\ast&\cdots&\ast&\ast \\
0&\cdots&0&\ast&\cdots&\ast&\ast \\
0&\cdots&0&0&\cdots&0&\ast \\
\end{array}\right)
$$

### plain
Notice that if the reduced $\mathbf{A}$ has at least one zero row, there will always exist some $\mathbf{b}$ that makes the system <b>inconsistent</b>!
Also, we have to check for nonpivot columns in the reduced $\mathbf{A}$, as these can give rise to <b>infinite solutions</b>.

### dialogue
So much being said, the condition for invertibility just boils down to one thing:
$$
(\mathbf{A}\; | \;\mathbf{b})
\rightarrow
\left(\begin{array}{cccc|c}
1&0&\cdots&0&\ast \\
0&\ddots&\ddots&\vdots&\ast \\
\vdots&\ddots&\ddots&0&\ast \\
0&\cdots&0&1&\ast \\
\end{array}\right)
$$
- The RREF of $\mathbf{A}$ is $\mathbf{I}$!
    - corright

### plain corright
Das right! As there must not be any zero rows or nonpivot columns in the RREF of $\mathbf{A}$, it is actually already implied that $\mathbf{A}$ is square! 🤓 (the proof is left to the reader)


### plain
Now, is it time to learn some vocabulary!

### dialogue theMantra
How else can we say a square matrix $\mathbf{A}$ is invertible, WITHOUT actually saying $\mathbf{A}$ is invertible? 🤔🤔🤔
- $\mathbf{A}^\top$ is invertible
    - tp
- There exists $\mathbf{B}$ such that $\mathbf{BA=I}$
    - semi
- There exists $\mathbf{B}$ such that $\mathbf{AB=I}$
    - semi
- The RREF of $\mathbf{A}$ is $\mathbf{I}$
    - yesCaptainObvious
- The homogeneous system $\mathbf{Ax=0}$ only has the trivial solution
    - homog
- For any $\mathbf{b}$, the system $\mathbf{Ax=b}$ is consistent
    - anyB
- That's all I have for now
    - moveOn

### plain tp
Remember, earlier:
$$
\begin{align}
\mathbf{I} &= \mathbf{I}^\top
\\ &= \left(\mathbf{AA}^{-1}\right)^\top
\\ &= \left(\mathbf{A}^{-1}\right)^\top \mathbf{A}^\top
\\ &= \left(\mathbf{A}^\top\right)^{-1} \mathbf{A}^\top
\end{align}
$$
Indeed, if $\mathbf{A}$ is invertible, it follows that $\mathbf{A}^\top$ is also invertible.

### plain semi
For invertible matrices, just remember: $\mathbf{A}^{-1}\mathbf{A}=\mathbf{I}=\mathbf{AA}^{-1}$.
So we can say that $\mathbf{A}^{-1}$ is both a left and right inverse.

### plain yesCaptainObvious
Welllll, we just went through that, so I won't need to elaborate.

### plain homog
1. A homogeneous system $\mathbf{Ax=0}$ always contains the trivial solution.
2. But if the trivial solution is its <b>only</b> solution, we can conclude that it is unique!
3. Having a unique solution means that the reduced form of $\mathbf{A}$ does not contain nonpivot columns.
4. As it is given that $\mathbf{A}$ is square, we conclude the RREF form of $\mathbf{A}$ is $\mathbf{I}$, therefore $\mathbf{A}$ is invertible.
5. This follows the fact that the unique solution can be expressed as $\mathbf{x}=\mathbf{A}^{-1}\mathbf{0}=\mathbf{0}$.

### plain anyB
1. If the system $\mathbf{Ax=b}$ is always consistent regardless of  $\mathbf{b}$, the reduced form of  $\mathbf{A}$ does not contain zero rows.
2. As it is given that $\mathbf{A}$ is square, we conclude the RREF form of $\mathbf{A}$ is $\mathbf{I}$, therefore $\mathbf{A}$ is invertible.
3. This follows the fact that the unique solution can be expressed as $\mathbf{x}=\mathbf{A}^{-1}\mathbf{b}$.

### plain moveOn
The <em>vocabulary</em> that we just talked about, is known in MA1522 as the Equivalent Statements for Invertibility! I'll call this the <em>Invertible Mantra</em>. 

### tex
insert mantra here

### plain
In its current state, it's only partially complete, which means there's still a long way ahead... 😱
We will also be discovering and exploring more Mantras in the future, such as:
• the <em>Singular Mantra</em>
• the <em>Rank-Equals-Number-Of-Rows Mantra</em>
• the <em>Rank-Equals-Number-Of-Columns Mantra</em>
• the <em>Rank-Deficient Mantra</em>

...so stay tuned!

### plain
That's a bunch of things to remember, I know...
But by the end of the course, all of them will become common sense.
Anyways, that's all for now! Byee!
