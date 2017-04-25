var app = angular.module('app', []);
app.controller('loginController', ['$scope', 'loginService', function ($scope, loginService) {
    $scope.userSchema = {
        name: 'Saurabh',
        userName: 'sonu',
        password: 'kumar'
    };

    $scope.login = function() {
        loginService.login($scope.userSchema).success(function(data){
            $scope.userSchema = {};
        });
    }

    function init() {
        loginService.getData().success(function(data){
            $scope.data = data;
        });
    };

    $scope.removeData = function(item) {
        var id = item._id;
        loginService.deletData(id).success(function(data){
            console.log('delete');
        });
    };   

    init();
}]);