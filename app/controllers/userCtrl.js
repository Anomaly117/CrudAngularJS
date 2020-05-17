 (function () {
    'use strict';
     //Aplicación angular
     angular
         //Modulo de la app
         .module('app')

         // -- Controladores -- //
         .controller('userCtrl', ['$scope', 'dataService', function ($scope, dataService) {
             $scope.users = [];

             //Se inicia la funcion de getData para poder ver los usuarios
             getData();

             //Funcion que permite traer todos los datos
             function getData() {
                 dataService.getUsers().then(function (result) {
                     $scope.users = result;
                     console.log($scope.users);

                 });
             }
             //Eliminar ciudano
             $scope.deleteUser = function (id) {
                 dataService.deleteUser(id).then(function () {
                     toastr.success('Usuario Eliminado correctamente');
                     getData();
                 }, function () {
                     toastr.error('Error al eliminar el Usuario ' + id);
                 });
             };
         }])

         //Controlador de para formatear la fecha.
         .controller('DateController', ['$scope', function ($scope) {
             $scope.example = {
                 value: new Date(2013, 9, 22)
             };
         }])

         //Controlador para agregar ciudadano.
         .controller('userAddCtrl', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
             $scope.createUser = function (user) {                 
                 dataService.addUser(user).then(function () {
                     toastr.success('Usuario creado correctamente');
                     $location.path('/');
                 }, function () {
                     toastr.error('Error creando Usuario');
                 });
             };
         }])

         //Controlador para editar ciudadano.
         .controller('userEditCtrl', ['$scope', '$routeParams', '$location', 'dataService', function ($scope, $routeParams, $location, dataService ) {
             $scope.user = {};
             //Get data de el usuario por medio del ID.
             dataService.getUserById($routeParams.id).then(function (result) {
                 $scope.user = result;
             }, function () {
                     toastr.error('Error actualizando el usuario con Id ' + $routeParams.id);
             });
             //Actualizar data del ciudadano.
             $scope.updateUser = function (user) {
                 dataService.editUser(user).then(function () {
                     toastr.success('Usuario actualizado correctamente');
                     $location.path('/');
                 }, function () {
                         toastr.error('No se pudo actualizar el usuario');
                 })
             };
         }]);
})();
