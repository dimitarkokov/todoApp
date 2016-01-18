/**
 * Created by Dimitar on 16/01/16.
 */



angular.module('taskApp',[]).controller('actionsController',function($scope) {
    $scope.tasks = [];
    $scope.selectAll = false;

    // needed to pass the event in order to resolve a problem with Firefox
    $scope.addTask = function(event) {
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

    $scope.removeTasks = function() {
        var doneTasks = $scope.tasks;
        $scope.tasks = [];
        angular.forEach(doneTasks, function(task) {
            if (!task.done) $scope.tasks.push(task);
        });
    };

    $scope.isTask = function(){
        return $scope.tasks.length > 0;
    }


    $scope.itemText = function() {
        return ($scope.tasks.length - $scope.remaining() > 1) ? "tasks" : "task";
    };

    $scope.remaining = function() {
        var counter = 0;
        angular.forEach($scope.tasks, function(task) {
            counter += task.done ? 0 : 1;
        });
        return counter;
    };



});


