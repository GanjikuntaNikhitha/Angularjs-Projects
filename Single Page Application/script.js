//MOdule witj myLIst name and with empty array no dependencies where added.
var myApp = angular.module("myList", [])

myApp.controller("myListController", function ($scope) {

    $scope.itemValues = ['Angularjs', 'Reactjs', 'Nodejs'];
    $scope.newItemValue = " "
    $scope.pushItem = function () {
        $scope.itemValues.push($scope.newItemValue);
    };
    $scope.popItem = function (index) {
        $scope.itemValues.splice(index, 1)
    }
})