(function () {
  'use strict';

  /**
   *@name fileComponent
   *@type component
   *@description this is component for upload file
   */
  angular.module('snFileUploader')
    .component('fileComponent', {
      // html template
      // change template url 'views/fileUploader.html' for development environment
      template: '<div class="container"> <div class="row"> <div class="col-md-12 text-center"> <div ng-hide="file" class="btn btn-primary" ngf-select="validateFile($event)" ng-model="file" name="file" ngf-pattern="\'video/*\'" ngf-max-size="vm.maxSize" ngf-min-size="vm.minSize" ngf-min-height="100" ngf-resize="{width: 100, height: 100}"> Add File </div>&nbsp;&nbsp; <div ng-if="file" class="btn btn-success" ng-click="submit(file)"> submit </div></div></div><br/> <div class="row"> <div class="col-md-12"> <p class="text-center">{{name}}</p><div class="row" ng-if="vm.uploading"> <div class="col-md-8 col-md-offset-2"> <div class="progress"> <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:0%">{{vm.progress | number : 2}}% Completed </div></div></div></div><div ng-if="!vm.hash" style="display:flex;justify-content:center"> <video ngf-src="file" controls style="width:640px;height:360px;background:#ededed"> </video> </div><div style="display:flex;justify-content:center"> <iframe ng-if="vm.hash" ng-src="{{vm.hash}}" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe> </div></div></div></div>',
      bindings: {
        maxSize: '@?',
        minSize: '@?',
        accessKey: '@?'
      },
      // controller for this component
      controller: 'FileController as vm'
    })
}());
