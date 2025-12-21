---
tags:
draft: false
title: terminal - commands
---




Make a directory `DIRECTORYNAME`
```zsh
mkdir DIRECTORYNAME
```

Make a file name `FILENAME.txt`
```zsh
touch FILENAME.txt
```

Remove `FILENAME.txt`
```zsh
rm FILENAME.txt
```

Remove `DIRECTORYNAME`
```zsh
rm -r DIRECTORYNAME
```


find out where you are aka print working directory
```zsh
pwd
```

list directory contents
```zsh
ls # basic
ls -la # including hidden files
```


change directory
```zsh
cd .. # Change directory to parent of current directory

cd DIRECTORY_PATH # Change directory to `DIRECTORY_PATH`
```


Open current Folder (MacOS)
```zsh
open .
```

Open file in default app (MacOS)
```zsh
open FILE
```



Exit an executed process: 

`ctrl` + `c` |  `q`


Input to kill active terminal processes
<kbd>CTRL</kbd> + <kbd>C</kbd>

In for advanced cases where you need to kill processes

Identify which process to kill
```sh
top # Reference the process id(PID) of process to kill
```

kill
```zsh
kill PROCESS_ID
```
