angular.app('vectic')
.provider('vectic', function vecticProvider() {
  
  var _host = '';
  var _path = '/api/vectic/';

  function Generator() {
    var _this = this;

    Object.defineProperties(this, {
      path: {
        get: function() { return _path || ''; },
      },
      host: {
        get: function() { return _host || ''; },
      },
    });
  }

  // Configuation functions

  this.setPath = function(path) {
    _path = path;
  }
  this.setHost = function(host) {
    _host = host;
  }

  this.$get = [function vecticGenerator() {
    return new Generator();
  }];
})
.directive('vectic', ['vectic', function(vectic) {
  // TODO: In Progress...
  return {
    // template: '<div class="svgContainer"></div>',
    template: '<object ng-attr-data="{{filepath}}"></object>',
    restrict: 'E',
    scope: {
      id: '=?',
    },
    link: function($scope, $element, $attr) {
      $scope.filepath = vectic.host + vectic.path + $scope.id;
    },
  }
}]);