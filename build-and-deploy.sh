#!/bin/sh

GITHUB_TOKEN=$1 &&
GITHUB_REPOSITORY=$2 &&
GITHUB_ACTOR=$3 &&


echo '===> Start running scripts for jekyll build.' &&

cd ./dist &&
remote_repo="https://x-access-token:${GITHUB_TOKEN}@github.com/chabok-io.github.io.git" &&
remote_branch="gh-pages" && 

echo remote_branch $remote_branch &&
echo remote_repo $remote_repo &&

git init && 
git config user.name --global "${GITHUB_ACTOR}" &&
git config --global user.email "${GITHUB_ACTOR}@users.noreply.github.com" &&
git add . && 

echo -n 'Files to Commit:' && ls -l | wc -l && 
echo -n 'Before Commit' &&
git commit -m "action build" &&

echo -n 'Before push' &&
git push --force $remote_repo master:$remote_branch &&

echo -n 'After push' &&
rm -fr .git && 

cd .. &&
echo '👍 GREAT SUCCESS!'
