describe('Angular element and expression test', function() {
  var element
    , $scope;

  beforeEach(module("myApp"));
  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope;
    element = angular.element("<div>{{2 + 2}}</div>");
    element = $compile(element)($rootScope);
    $scope.$digest();
  }));

  it('should equal 4', function() {
    expect(element.html()).toBe("4");
  });
});