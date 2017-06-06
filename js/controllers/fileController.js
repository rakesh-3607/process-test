(function () {
  'use strict';

  /**
   *@name FileController
   *@description File controller use for handle file selection, file validation, file upload
   */
  angular.module('snFileUploader')
    .controller('FileController', ['$http','$sce','$scope', FileController]);

    /**
     *@name File controller function
     */
    function FileController ($http, $sce, $scope) {
      var vm = this;
      vm.hash = '';

      /**
       *@name validate file
       *@description To validate selected file
       */
      $scope.validateFile = function (event) {
        console.log($scope.file);
        if ( !$scope.file ) {
          alert('Please select valid file.');
          return false;
        } else {
          if ( $scope.file.type.indexOf('video') > -1 ) {
            $scope.name = $scope.file.name;
            return true;
          } else {
            alert('Please select valid video file.');
            return false;
          }
        }
      };

      /**
       *@name Submit function
       *@description To upload media on submit
       */
      $scope.submit = function (file) {
        vm.uploading = true;
        vm.progress = 0;
        // create form data to send in request body
        var fd = new FormData();
        fd.append('file', file);
        fd.append('access_token', vm.accessKey);
        // xhr request for file upload
        $http.post('https://upload.wistia.com/', fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined},
            uploadEventHandlers: { progress: function(e) {
              vm.progress = e.loaded * 100 / e.total;
              $('.progress-bar').css('width',(e.loaded * 100 / e.total)+'%');
            }}
        }).then(function (data) {
          // success response of uploaded media
          vm.hash = $sce.trustAsResourceUrl('//fast.wistia.net/embed/iframe/' + data.data.hashed_id);
          vm.uploading = false
          $scope.file = null;
          $scope.name = data.data.name;
        },function (error) {
          // Error response of uploaded media
          alert(error.data.error);
          vm.uploading = false;
          $scope.file = null;
          $scope.name = '';
        });
      };
    }
}());
