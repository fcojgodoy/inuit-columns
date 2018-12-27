### On issue branch or develop branch

Add changes to CHANGELOG.md

Update package version with `yarn version`

`git push`

### On master branch

`git merge develop`

`git push && git push tags`

### Update NPM repository

`npm login`

`npm publish`