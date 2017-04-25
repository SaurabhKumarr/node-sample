app.factory('loginService',['$http', function ($http) {

    var loginService = {};

    loginService.login = function(obj) {

        return $http.post('/api/userinfo', obj);       
    };

    loginService.getData = function() {

        return $http.get('/api/getinfo');
    };

    loginService.deletData = function(id) {

        return $http.delete('/api/deleteinfo/' + id);
    };

    return loginService;
}]);