describe("FileController", function() {
  beforeEach(module('snFileUploader'));

  var $controller ,scope, httpBackend;

  beforeEach(inject(function(_$controller_, _$rootScope_, _$httpBackend_){
    $controller = _$controller_;
    httpBackend = _$httpBackend_;
  }));

  // validate if file is null
  it('File validate for null value', function() {
    var $scope = {};
    var controller = $controller('FileController', { $scope: $scope });
    $scope.file = '';
    expect($scope.validateFile()).toEqual(false);
  });

  // validate when file is selected
  it('File validate function for video', function() {
    var $scope = {};
    var controller = $controller('FileController', { $scope: $scope });
    $scope.file = {};
    $scope.file.type = 'video/*';
    expect($scope.validateFile()).toEqual(true);
  });

  // validate when select image file
  it('File validation for image ', function() {
    var $scope = {};
    var controller = $controller('FileController', { $scope: $scope });
    $scope.file = {};
    $scope.file.type = 'image/*';
    expect($scope.validateFile()).toEqual(false);
  });

  // test file upload using mockfile
  it('should send file to backend for processing', function () {
    var mockFile = {file:[{"name":"file.bin", "size":1018, "type":"application/binary"}]};
    httpBackend.when('POST', 'https://upload.wistia.com/').respond(200, {data: {file:{name: 'test file'}}});
    var $scope = {};
    var controller = $controller('FileController', { $scope: $scope });
    $scope.submit(mockFile);
    httpBackend.flush();
  });

});
