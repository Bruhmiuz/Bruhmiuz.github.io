stuff = []

"""
HOW TO USE:

run the file in command line

then paste in the latex that you want formatted

then type eof
"""

while True:
	x = input()
	if x == "eof":
		break
	stuff.append(x)

stuff = ['\"' + x + '\"' for x in stuff]
stuff = [x.replace('\\', '(TEMP)') for x in stuff]
stuff = [x.replace('(TEMP)', '\\\\') for x in stuff]

formatted = "    content: " + " +\n             ".join(stuff) + ","
print(formatted)

"""
$$\left( 
    \begin{array}{ccc|c}
        3 & 2 & 1 & 10 \\
        6 & 5 & 4 & 14 \\
        9 & 8 & 9 & 18 \\
    \end{array}
\right)$$
"""
