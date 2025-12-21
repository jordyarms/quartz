---
tags:
draft: false
title: regex - reference
---



### characters

Escape a character
```regex
\. 
```
Return
```regex
\r
```
Newline
```regex
\n
```
Tab
```regex
\t
```
Digit
```regex
\d
```
Digital Alt
```regex
[0-9]
```
Alphabetic character
```regex
[A-z]
```
Word
```regex
\w
```
Not 
```regex
[^ ]
```


### positional control

From the head
```regex
^pattern
```

From the tail
```regex
pattern$
```

Word Boundaries
```regex
\bpattern\b
```

Inside Word Boundaries
```regex
\Bpattern\B
```



### instance match management

Instances = 0 | 1
```regex
?
```
Instances = 0 <
```regex
*
```
Instances = 1 <
```regex
+
```
Instances = Specific Numerical
```regex
{2}
```
Instances = Specific Ranged
```regex
{3,5}
```
### capture group control

Capture Group Control
```regex
(?:prePattern|^)(patternRetrieved)(?:postPattern|$)
```

### capture inside a html property

Capture inside a html href property
```regex
(?<=href=")(.*?)(?=")
```


### Control Operators

Match Group
```regex
( )
```
Match Or Operation
```regex
|
```


### greedy multiline

Example for wrapped <wp:comment> xml element
```regex
/<wp:comment>(?s:.)*?</wp:comment>/g
```
