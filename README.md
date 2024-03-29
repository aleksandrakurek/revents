# Revents App Readme.md

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [React.js](https://reactjs.org/)

## Installation

* `git clone https://github.com/aleksandrakurek/revents.git` this repository
* `cd revents`
* `npm install`
* `yarn install`


## Running / Development
`npm start`

* Visit your page at [https://localhost:3000](http://localhost:3000)

##Update firebase scripts
`firebase deploy --only functions`

##Build App
`npm run build`

##Build & Deploy to firebase

`npm run deploy`

##Visit:
https://revents-215119.firebaseapp.com


## Notes

Before merge to master:

* Update app version (according to this approach [https://semver.org/](https://semver.org/))
* Update README Changelog
* Create git tag with correct version number `git tag release-v.1.1.0` and push to
  origin `git push origin release-v.1.1.0`

## Changelog

### 1.0.1
18.10.2021
* New main colors have been added
* Test components have been removed
* Yarn and npm packages have been updated 
* README has been updated
