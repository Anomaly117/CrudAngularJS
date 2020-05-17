'use strict';

(function () {
    'use strict';

    angular.module('app').controller('userCtrl', ['$scope', 'dataService', function ($scope, dataService) {
        $scope.users = [];
        debugger
        getData();

        function getData() {
            debugger
            dataService.getUsers().then(function (result) {
                $scope.users = result;
            });
        }
    }]).controller('userAddCtrl', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
        debugger
        $scope.createUser = function (user) {
            dataService.addUser(user).then(function () {
                debugger
                toastr.success('Usuario creado correctamente');
                $location.path('/');
            }, function () {
                toastr.error('Error creando Usuario');
            });
        };
    }]).controller('userEditCtrl', ['$scope', '$routeParams', '$location', 'dataService', function ($scope, $routeParams, $location, dataService) {
        $scope.user = {};
        dataService.getUserById($routeParams.id).then(function (result) {
            $scope.user = result;
        }, function () {
            toastr.error('Error actualizando el usuario con Id ' + $routeParams.id);
        });

        $scope.updateUser = function (user) {
            dataService.editUser(user).then(function () {
                toastr.success('Usuario actualizado correctamente');
                $location.path('/');
            }, function () {
                toastr.error('No se pudo actualizar el usuario');
            });
        };
    }]);
})();

