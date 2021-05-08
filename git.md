`git init`

`tree`

`git status`  staged or unstaged

`git add .`  stage

`git commit -m "this is message"`

`git log`

`git clone http\\:` 

`cd ..` back to parent directory

`cd /d D:`  go to D: drive

`git branch new-branch`

`git checkout new-branch`

### upstream

`git push --set-upstream origin new-branch` 

Configuring a remote for a fork
You must configure a remote that points to the upstream repository in Git to sync changes you make in a fork with the original repository. This also allows you to sync changes made in the original repository with the fork.
Open Git Bash.
List the current configured remote repository for your fork.

`git remote -v`

Specify a new remote upstream repository that will be synced with the fork.

 `git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git`

Verify the new upstream repository you've specified for your fork.
`git remote -v`


### hard reset 
```
git remote add upstream /url/to/original/repo
git fetch upstream
git checkout master
git reset --hard upstream/master  
git push origin master --force
```

### rebase
```
git remote add upstream /url/to/original/repo
git fetch upstream
git checkout master
git rebase upstream/master 
git push origin master
```
