#!/usr/bin/env bash

git branch -D gh-pages > /dev/null 2>&1 || true
git checkout master > /dev/null 2>&1
git checkout -b gh-pages > /dev/null

npm run build > /dev/null

cat > .gitignore <<EOL
*
!bundle.js
!index.css
!index.html
EOL

mv build/* .
git add -A > /dev/null
git rm -r src .idea .editorconfig .eslintrc.json .travis.yml gulpfile.js \
	package.json package-lock.json README.md gh-pages-deploy.sh > /dev/null
git commit -m "GitHub Pages deploy" --no-verify  > /dev/null

git push --set-upstream origin gh-pages --force

git checkout master > /dev/null
git branch -D gh-pages > /dev/null 2>&1
