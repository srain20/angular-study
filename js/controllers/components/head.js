app.controller('HeadController',
  ['$scope',
    '$resource',
    '$location',
    '$q',
    '$timeout',
    function($scope,$resource,$location,$q,$timeout){
        $scope.date = new Date();
    }
]);