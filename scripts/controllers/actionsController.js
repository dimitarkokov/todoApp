/**
 * Created by Dimitar on 16/01/16.
 */



angular.module('taskApp',[]).controller('actionsController',function($scope) {
    $scope.tasks = [];
    $scope.selectAll = false;

    $scope.addTask = function() {
        if(event.keyCode == 13 && $scope.taskText){
            $scope.tasks.push({text:$scope.taskText, done:false});
            $scope.taskText = '';
        }
    };

    $scope.taskDone = function() {
        return ($scope.tasks.length != $scope.remaining());
    }

    $scope.toggleselectAll = function() {
        angular.forEach($scope.tasks, function(task) {
            task.done =$scope.selectAll;
        });
    };





});


