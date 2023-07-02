#!/bin/bash

compareWith=${1:-master}
reponame=`basename $(git remote get-url origin) .git`
branchname=`git branch --show-current`
if [[ "$branchname" == "master" ]]
then
  open http://github.com/comadrejas/${reponame}
else
  open http://github.com/comadrejas/${reponame}/compare/$compareWith..${branchname}#files_bucket
fi