# SN File upload
This repo contains code for SN file upload. It is developed using `AngularJS Component`.

## Getting Started
### Dependencies
* Install nodejs using nvm
* Install gulp ```npm install -g gulp-cli```
* Install karma ```npm install -g karma-cli```

### Starting Locally
 ```
cd file-uploader
npm install
gulp (Env available development/production [default: development])
 ```

### Building code
* `gulp build`

### Test code
* `karma start`

## Use this plugin
* Add dependencies in your module `angular.module('MyApp',['snFileUploader'])`

* Add script dependency `<script src="dist/js/sn-file-uploader.js"></script>`

* Add Component in html like this `<file-component min-size="0KB" max-size="20MB" access-key="key"></file-component>` where min-size and max-size of video, key is authentication key of `http://wistia.com`
