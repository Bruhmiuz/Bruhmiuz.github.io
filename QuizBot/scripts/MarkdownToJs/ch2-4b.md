## Elementary Matrices

### dialogue
If you were paying attention, you would have seen the word 'elementary' appear before. 
When was it?

- Elementary Row Operations!
    - intro1
- Elementary School Algebruh
    - intro2

### plain intro1
That's right! Seems like you paid attention in class!

### plain intro2
What!? This isn't elementary school! 
Anyways, I meant elementary row operations.

### plain
Recall that there are 3 different elementary row operations (EROs):

1. $R_i \leftrightarrow R_j, i \neq j$
2. $aR_i, \text{where } a \neq 0$
3. $R_i + cR_j, \text{where } c \in \mathbb{R} \text{ and } i \neq j$

### plain 
What if I told you that for some matrix $\mathbf{A}$, there exist square matrices $\mathbf{E}$, such that premultiplying $\mathbf{A}$ with $\mathbf{E}$ performs an ERO on $\mathbf{A}$? In other words:

$$\mathbf{A} \xrightarrow{\text{some ERO}} \mathbf{EA}$$

### dialogue
For the above example, how would you find $\mathbf{E}$?

- Simplify the problem? 
    - genius
- err i still noob ;-;
    - genius
    
### plain genius
Well, wellll... $\mathbf{I}$ can pull off a sneaky here 😎

$$\mathbf{IA} \xrightarrow{\text{some ERO}} \mathbf{EIA}$$

The size of $\mathbf{I}$ must fit into the equation, which means its size corresponds to the row size of $\mathbf{A}$.

### plain
Now, removing $\mathbf{A}$ from both sides, we have:

$$\mathbf{I} \xrightarrow{\text{some ERO}} \mathbf{EI} = \mathbf{E}$$

We just have to find $\mathbf{I}$ of the right size, then perform the respective ERO on it! 
Isn't that simple? (this is a rhetorical question)

### tex 
$$\textbf{\Large Elementary Matrices}$$
A square matrix of order $n$, $\mathbf{E}$, is called an elementary matrix if it can be obtained from the identity matrix $\mathbf{I_n}$ by performing a single elementary row operation  
$$\mathbf{I_n} \xrightarrow{r} \mathbf{E},$$  
where $r$ is an elementary row operation.  

The elementary row operation performed to obtain $\mathbf{E}$ is said to be the row operation corresponding to the elementary matrix.  

$$\textbf{Elementary Matrix and Elementary Row Operation}$$
Let $\mathbf{A}$ be an $n \times m$ matrix and $\mathbf{E}$ be the elementary matrix corresponding to the ERO $r$.  
Then the product $\mathbf{E}\mathbf{A}$ is the result of performing the ERO $r$ on $\mathbf{A}$,  
$$\mathbf{A} \xrightarrow{r} \mathbf{E}\mathbf{A}.$$  

Suppose now $\mathbf{B}$ is row equivalent to $\mathbf{A}$,  
$$\mathbf{A} \xrightarrow{r_1} \xrightarrow{r_2} \cdots \xrightarrow{r_k} \mathbf{B}.$$  

Let $\mathbf{E}_l$ be the elementary matrix corresponding to the ERO $r_l$, for $l=1,2,\ldots,k$. Then,  
$$\mathbf{B} = \mathbf{E}_k \cdots \mathbf{E}_2 \mathbf{E}_1 \mathbf{A}.$$  

Two $n \times m$ matrices $\mathbf{A}$ and $\mathbf{B}$ are row equivalent if and only if there exist elementary matrices $\mathbf{E}_1,\mathbf{E}_2,\ldots,\mathbf{E}_k$ such that  
$$\mathbf{B} = \mathbf{E}_k \cdots \mathbf{E}_2 \mathbf{E}_1 \mathbf{A}.$$  

$$\textbf{Inverse of Elementary Matrices}$$ 
Every elementary matrix $\mathbf{E}$ is invertible (row equivalent to $\mathbf{I_n}$). The inverse $\mathbf{E}^{-1}$ is the ERO corresponding to the reverse of the original ERO.  

(i)  
$$\mathbf{I_n} \xrightarrow{R_i + cR_j} \mathbf{E} \xrightarrow{R_i - cR_j} \mathbf{I_n} 
\;\;\;\;\Rightarrow\;\;\;\; 
\mathbf{E} : R_i + cR_j, \quad 
\mathbf{E}^{-1} : R_i - cR_j.$$

(ii)  
$$\mathbf{I_n} \xrightarrow{R_i \leftrightarrow R_j} \mathbf{E} \xrightarrow{R_i \leftrightarrow R_j} \mathbf{I_n} 
\;\;\;\;\Rightarrow\;\;\;\; 
\mathbf{E} : R_i \leftrightarrow R_j, \quad 
\mathbf{E}^{-1} : R_i \leftrightarrow R_j.$$

(iii)  
$$\mathbf{I_n} \xrightarrow{cR_i} \mathbf{E} \xrightarrow{\frac{1}{c}R_i} \mathbf{I_n} 
\;\;\;\;\Rightarrow\;\;\;\; 
\mathbf{E} : cR_i, \quad 
\mathbf{E}^{-1} : \frac{1}{c}R_i.$$

### single-mcq
Sorry, that's a BUNCH of letters and definitions 🗿
Here's a riddle to clear your mind:
If $\mathbf{I}$ is a blank canvas, and EROs $r_1, r_2, \ldots, r_k$ are strokes of a paint brush, what is the final artwork $\mathbf{E}_k \ldots \mathbf{E}_2 \mathbf{E}_1$? (pick the most detailed option)

- A Picasso matrix 🤩🤩🤩
* A matrix row equivalent to $\mathbf{I}$ 
- A matrix not row equivalent to $\mathbf{I}$
- A square matrix
- A triangular matrix

### dialogue
No matter what, it is always row equivalent to $\mathbf{I}$, since it originated from $\mathbf{I}$.
Therefore, it is an invertible matrix.

- Hey, you skipped steps!! 😡
    - explainYourself
- you speak as if i knew it already.
    - explainYourself
    
### plain explainYourself
Oh ya um... Gimme a chance to explain, okay?

## Finding the inverse of a matrix

### dialogue
First, a square matrix $\mathbf{A}$ is invertible if there exists a square matrix $\mathbf{A}^{-1}$ such that $\mathbf{AA}^{-1} = \mathbf{I}$. 
Given $\mathbf{A}$, how can we find $\mathbf{A}^{-1}$?

- Solve $\mathbf{AX}=\mathbf{B}$. Here $\mathbf{B} = \mathbf{I}$ and $\mathbf{X} = \mathbf{A}^{-1}$.
    - findingInverse
    
### plain findingInverse
Let's say we have:
$$\mathbf{A} = \left(\begin{array}{cc}
1 & -1 \\ -1 & 1
\end{array}\right)$$

### single-mcq
Then,

$$ \left(\begin{array}{cc|cc}
1 & -1 & 1 & 0 \\ -1 & 1 & 0 & 1
\end{array}\right) \xrightarrow{rref} \left(\begin{array}{cc|cc}
1 & -1 & 1 & 0 \\0 & 0 & 1 & 1
\end{array}\right)
$$

What is $\mathbf{A}^{-1}$?

- $\left(\begin{array}{cc}
1 & 0 \\ 1 & 1
\end{array}\right)$
* There is no $\mathbf{A}^{-1}$

### plain
Remember, pivot columns on the right only means one thing: the system is <b>inconsistent</b>! There is no solution.
Therefore, $\mathbf{A}^{-1}$ does not exist in this case.

### plain 
This time it's legit! I promise!
$$\mathbf{A} = \left(\begin{array}{cc}
1 & 1 \\ -1 & 0
\end{array}\right)$$

### single-mcq
Then,

$$ \left(\begin{array}{cc|cc}
1 & 1 & 1 & 0 \\ -1 & 0 & 0 & 1
\end{array}\right) \xrightarrow{rref} \left(\begin{array}{cc|cc}
1 & 0 & 0 & -1 \\0 & 1 & 1 & 1
\end{array}\right)
$$

What is $\mathbf{A}^{-1}$?
* $\left(\begin{array}{cc}
0 & -1 \\ 1 & 1
\end{array}\right)$
- There is no $\mathbf{A}^{-1}$

### dialogue
Let's verify:
$$
\begin{align}
\mathbf{AA}^{-1} &= \left(\begin{array}{cc}
1 & 1 \\ -1 & 0
\end{array}\right) \left(\begin{array}{cc}
0 & -1 \\ 1 & 1
\end{array}\right) \\ &= \left(\begin{array}{cc}
0(1)+1(1) & -1(1)+1(1) \\ 0(-1)+1(0) & -1(-1)+1(0)
\end{array}\right) \\ &= \left(\begin{array}{cc}
1 & 0 \\ 0 & 1
\end{array}\right)
\end{align}
$$

We have shown that $\mathbf{AA}^{-1} = \mathbf{I}$. Therefore, $\mathbf{A}^{-1}\mathbf{A} = \mathbf{I}$. 

- Excuse me, you skipped some steps again.
    - leftProof

### plain leftProof
Waht?!? Again?? Anyways... 
There are many ways to prove the above. But since we've just discussed <b>elementary matrices</b>, let's use that approach!

### plain
Remember, whenever we find the RREF, we perform a sequence of EROs.
Then, $\mathbf{I}$ actually acts as a blank canvas to <b>track the EROs used</b>:
$$ 
\begin{align}
\left(\begin{array}{c|c}
\mathbf{A} & \mathbf{I} 
\end{array}\right) 
\xrightarrow{rref} \; 
& \left(\begin{array}{c|c}
\mathbf{I} & \mathbf{E}_k \ldots \mathbf{E}_2 \mathbf{E}_1
\end{array}\right)
\\ = \;
& \left(\begin{array}{c|c}
\mathbf{I} & \mathbf{A}^{-1} 
\end{array}\right) 
\end{align}
$$

### plain
Therefore:
$$
\begin{align}
\mathbf{A} \xrightarrow{rref} \; &\mathbf{E}_k \ldots \mathbf{E}_2 \mathbf{E}_1\mathbf{A}
\\ = \; & \mathbf{A}^{-1}\mathbf{A}
\\ = \; & \mathbf{I}
\end{align}
$$
Voila! Now, we have proved that $\mathbf{A}^{-1}\mathbf{A} = \mathbf{I}$!
Also, we have shown that if $\mathbf{A}^{-1}$ exists, then $\mathbf{A}$ is row equivalent to $\mathbf{I}$. Same is true for the other direction.

### tex
$$\textbf{\Large Algorithm for Finding Inverse}$$
Let $\mathbf{A}$ be a square matrix of order $n$.
Step 1: Form an $n \times 2n$ augmented matrix $\left(\mathbf{A} \; | \; \mathbf{I_n} \right)$.
Step 2: Reduce the augmented matrix to RREF, $\left(\mathbf{A} \; | \; \mathbf{I_n} \right) \xrightarrow{rref} \left(\mathbf{R} \; | \; \mathbf{B} \right)$.
Step 3: If $\mathbf{R} \neq \mathbf{I_n}$, then $\mathbf{A}$ is not invertible. Otherwise, $\mathbf{A}$ is invertible with inverse $\mathbf{A}^{-1}=\mathbf{B}$.

## First Factorization Technique: LU Factorization

### mcq
Let's try another puzzle!
Suppose we only did EROs till some row-echelon form (REF) is reached:
$$ 
\begin{align}
\left(\begin{array}{c|c}
\mathbf{A} & \mathbf{I} 
\end{array}\right) 
\xrightarrow{ref} \; 
& \left(\begin{array}{c|c}
\mathbf{U} & \mathbf{E}_k \ldots \mathbf{E}_2 \mathbf{E}_1
\end{array}\right) 
\\ = \;
& \left(\begin{array}{c|c}
\mathbf{U} & \mathbf{P}
\end{array}\right)
\end{align}
$$

What can we infer about $\mathbf{U}$ and $\mathbf{P}$?

* If $\mathbf{A}$ is square, $\mathbf{U}$ is upper triangular
- $\mathbf{U}$ is upper triangular
- $\mathbf{U}$ is square
- $\mathbf{A} = \mathbf{P}^{-1}\mathbf{U}$

### mcq
By now, we should be familiar with the <b>staircase pattern</b> in the REF $\mathbf{U}$. For it to qualify as upper triangular, $\mathbf{U}$ and consequently $\mathbf{A}$ must be square.

Furthermore, $\mathbf{A} = \mathbf{P}^{-1}\mathbf{U}$, since $\mathbf{P}$ represents the sequence of EROs from $\mathbf{A}$ to $\mathbf{U}$ and $\mathbf{P}^{-1}$ undoes all of them. 

Given $\mathbf{P} = \mathbf{E}_k \ldots \mathbf{E}_2 \mathbf{E}_1$, how can we represent $\mathbf{P}^{-1}$?

- $\mathbf{E}_1 \mathbf{E}_2 \ldots \mathbf{E}_k$
* $\mathbf{E}_1^{-1} \mathbf{E}_2^{-1} \ldots \mathbf{E}_k^{-1}$
- $\mathbf{E}_k^{-1} \ldots \mathbf{E}_2^{-1} \mathbf{E}_1^{-1}$

### plain
To check our answer, we expand $\mathbf{PP}^{-1} = \mathbf{I}$: (the other way works, too)
$$
\begin{align}
\mathbf{PP}^{-1}
&= 
\mathbf{E}_k \ldots \mathbf{E}_2 \left(\mathbf{E}_1 \mathbf{E}_1^{-1}\right) \mathbf{E}_2^{-1} \ldots \mathbf{E}_k^{-1}
\\ &=
\mathbf{E}_k \ldots \mathbf{E}_2 (\mathbf{I}) \mathbf{E}_2^{-1} \ldots \mathbf{E}_k^{-1} 
\\ &=
\mathbf{E}_k \ldots \left(\mathbf{E}_2 \mathbf{E}_2^{-1}\right) \ldots \mathbf{E}_k^{-1} 
\\ & \hphantom{n}\vdots
\\ &= \mathbf{I}
\end{align}
$$

### plain
Remember the REF algorithm (Gaussian Elimination) from section 1.4?
If we follow it strictly, and somehow reduce a matrix $\mathbf{A}$ to REF without using the ERO $R_i \leftrightarrow R_j$, the resulting matrix $\mathbf{P}^{-1}$ would have the following properties:
• It is lower triangular.
• Its diagonal entries are all $1$.

We call this matrix <b>unit lower triangular</b>. And since it is lower triangular, why not call it $\mathbf{L}$ instead?

### plain
Together, $\mathbf{L}$ and $\mathbf{U}$ form the <b>LU factorization</b> of $\mathbf{A}$, for some $\mathbf{A}$ that fulfils the above criteria. We say  $\mathbf{A}$ is <b>LU factorizable</b>.

### dialogue
Now, how do we find the LU factorization for some given matrix $\mathbf{A}$?

- MATLAB exists
    - noCalcAllow
- Reduce $\mathbf{A}$ to REF to find $\mathbf{U}$, then calculate $\mathbf{E}_1^{-1} \mathbf{E}_2^{-1} \ldots \mathbf{E}_k^{-1}$ to find $\mathbf{L}$
    - simplifiedMethod
    
### plain noCalcAllow
Aaaand what if you didn't have MATLAB? (or a calculator) 😱

### plain simplifiedMethod
That's one way, but performing so many matrix multiplications is waaay too tedious! There is actually a shortcut to finding $\mathbf{L}$, but let's approach it the usual way first.

### plain
Let's bring an LU factorizable matrix $\mathbf{A}$ to REF first:
$$
\mathbf{A} =
\left(\begin{array}{ccc}
3 & 2 & 1 \\
3 & 5 & 3 \\
3 & 5 & 6
\end{array}\right)
\xrightarrow{R_2-R_1}\xrightarrow{R_3-R_1}\xrightarrow{R_3-R_2}
\left(\begin{array}{ccc}
3 & 2 & 1 \\
0 & 3 & 2 \\
0 & 0 & 3
\end{array}\right)
= \mathbf{U}
$$

### plain
The elementary matrices are as follows: 
$$\mathbf{E}_1: R_2-R_1, \; \mathbf{E}_2: R_3-R_1, \; \mathbf{E}_3: R_3-R_2$$
The inverse elementary matrices are as follows:
$$\mathbf{E}_1^{-1}: R_2+R_1, \; \mathbf{E}_2^{-1}: R_3+R_1, \; \mathbf{E}_3^{-1}: R_3+R_2$$

### dialogue
$$
\begin{align}
\mathbf{L}
&=
\mathbf{E}_1^{-1}\mathbf{E}_2^{-1}\mathbf{E}_3^{-1} 
\\ &= 
\left(\begin{array}{ccc}
1 & 0 & 0 \\
1 & 1 & 0 \\
0 & 0 & 1
\end{array}\right)
\left(\begin{array}{ccc}
1 & 0 & 0 \\
0 & 1 & 0 \\
1 & 0 & 1
\end{array}\right)
\left(\begin{array}{ccc}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 1 & 1
\end{array}\right)
\\ &=
\left(\begin{array}{ccc}
1 & 0 & 0 \\
1 & 1 & 0 \\
1 & 1 & 1
\end{array}\right)
\end{align}
$$

Notice something?

- We can sum up entries below the diagonal!
    - luYes
- Each entry below the diagonal does not interfere with the rest.
    - luYes

### plain luYes
Mhm, and it only works if we carried out the EROs in the order specified in section 1.4! Don't believe me? Try shuffling the above matrices!

### plain
By observing the pattern, we can come up with the shortcut:
1. First, we initialize a matrix $\mathbf{L} = \mathbf{I_m}$, where $m$ is the row size of $\mathbf{A}$.
2. Carry out the EROs to reduce $\mathbf{A}$ to REF, which is strictly of type $R_i+cR_j$. For each ERO, set the respective entry $(j, i)$ in $\mathbf{L}$, $l_{ji} \leftarrow -c$.
3. Once we have found $\mathbf{U}$, we would also have computed $\mathbf{L}$.

### tex
$$\textbf{\Large LU Factorization}$$
A square matrix $\mathbf{L}$ is a unit lower triangular matrix if $\mathbf{L}$ is a lower triangular matrix with 1 in the diagonal entries.

An LU factorization of a $m \times n$ matrix $\mathbf{A}$ is the decomposition:

$$\mathbf{A} = \mathbf{LU},$$

where 
$\mathbf{L}$ is a unit lower triangular matrix, and 
$\mathbf{U}$ is a row-echelon form of $\mathbf{A}$.

If such LU factorization exists for $\mathbf{A}$, we say that $\mathbf{A}$ is LU factorizable.

$$\textbf{Algorithm for LU Factorization}$$

Suppose $\mathbf{A} \xrightarrow{r_1,r_2,\ldots,r_k} \mathbf{U}$, where each row operation $r_l$ is of the form $R_i+cR_j$ for some $i,j$ and real number $c$, and $\mathbf{U}$ is an row-echelon form of $\mathbf{A}$. Let $\mathbf{E}_l$ be the elementary matrix corresponding to $r_l$, for $l = 1,2,\ldots,k$. 
Then,

$$
\mathbf{E}_k \ldots \mathbf{E}_2 \mathbf{E}_1 \mathbf{A} = \mathbf{U} \implies \mathbf{A} = \mathbf{E}_1^{-1} \mathbf{E}_2^{-1} \ldots \mathbf{E}_k^{-1} \mathbf{U} = \mathbf{LU} 
$$

where $\mathbf{L} =\mathbf{E}_1^{-1} \mathbf{E}_2^{-1} \ldots \mathbf{E}_k^{-1}$.

We say that:

$$
\mathbf{A} = \mathbf{LU} =
\begin{pmatrix}
1 & 0 & \cdots & 0 \\
\ast & 1 & \cdots & 0 \\
\vdots &\vdots & \ddots & \vdots \\
\ast & \ast & \cdots & 1
\end{pmatrix}
\left(\begin{array}{ccccccc}
\ast & \cdots & \ast & \ast & \cdots & \ast \\
0 & \cdots & 0 & \ast & \cdots & \ast \\
\vdots & & \vdots & \vdots & & \vdots\\
0 & \cdots & 0 & 0 & \cdots & 0
\end{array}\right)
$$

is an LU factorization of $\mathbf{A}$.

## LU Factorization: Cleave and Dismantle!
### dialogue
Now that we've learnt to find the LU factorization, why do we apply it?
(hint: why do we cut ingredients before cooking them?)
- It's computes (cooks) faster that way
    - cursedTechnique
    
### single-mcq cursedTechnique
You just <em>cooked</em> with that response!
From a computational standpoint, Gaussian Elimination takes $O(n^3)$ time and the remaining steps in Gauss-Jordan Elimination takes $O(n^2)$ time.
With the methods we've learnt, how much time does it take to solve the system $\mathbf{Ax=b}$?
- $O(n)$
- $O(n^2)$
* $O(n^3)$

### mcq
When solving a system for the first time, we cannot avoid $O(n^3)$ time. However, we can do precomputation to solve similar systems in the future. 
Who knows, what if we suddenly have a different $\mathbf{b}_i$ and want to solve for the corresponding $\mathbf{x}_i$ in $O(n^2)$ time?

* Factorization Technique: LU Factorization! 
* Reverse Technique: Find $\mathbf{A}^{-1}$!

### plain
YASS!! Keep on cooking 🔥🔥🔥
But... why does it work though.

### dialogue
Let's see how we can use LU factorization to speed things up.
Instead of $\mathbf{A}$, we have $\mathbf{LUx=b}$.
What should we do now?

- Recover $\mathbf{A}$ from $\mathbf{LU}$
    - nope
- Solve $\mathbf{L}(\mathbf{Ux})=\mathbf{b}$
    - yas
    
### plain nope
That goes against our intentions!

### plain yas
We first use substitution $\mathbf{Ux=y}$, then solve for $\mathbf{y}$ in $\mathbf{Ly=b}$. 
This is very similar to the $O(n^2)$ step in Gauss-Jordan Elimination, only with the rows in reverse order. As a result, this takes $O(n^2)$ time.

### plain
Then, we solve for $\mathbf{x}$ in $\mathbf{Ux=y}$. This is exactly the same as the $O(n^2)$ step in Gauss-Jordan Elimination.

The entire process takes only $O(n^2+n^2)=O(n^2)$ time!

### plain
Wow, that has been a looooong discussion. I don't want to elaborate any further, so you can leave the rest to the Tele chat. See ya... 😴😴😴