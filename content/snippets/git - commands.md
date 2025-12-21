---
tags:
---
### Branch Control
Create a branch named `BRANCHNAME` 
```sh
git branch BRANCHNAME
```

Where am I
```sh
git branch # where am I
```

and switch, *checkout*, the branch.
```sh
git checkout BRANCHNAME
```

Delete a branch
```sh
git branch -d BRANCHNAME
git branch -D BRANCHNAME # delete an unmerged branch (you could lose work)
```



### Synchronization

getting information from 
```sh
git fetch
```

Pull to local from the remote
```sh
git pull origin BRANCHNAME
```
Push from local to the remote
```sh
git push origin BRANCHNAME
git push origin BRANCHNAME --force # nasty? overwrite whatever is on origin
```

### Initialization

Init or Clone
```sh
# Create an empty Git repository or reinitialize an existing one
git init 

# OR

# Clone, *create a copy*, to a local instance of a git repository URL
git clone [URL]
```

Moving existing to new origin
```Shell
git remote set-url origin [URL]
```


### Execute Modification

See what has changed
```sh
git status
```

See the differences
```sh
git diff
```

Staging - Add files to the git working instance repository, take a snapshot of additional files.
```sh
git add PATH/TO/FILE # being selective about additions
git add -u # add all modified files that are already tracked in git
git add . # add all the things!
```

Unstaging - when oups
```sh
git reset # just unlists the staged changes
```

Log working instance state, with a message
```sh
git commit -m "message description"
```