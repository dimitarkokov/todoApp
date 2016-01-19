
//  Actions Controller

angular.module('taskApp',[]).controller('ActionsCtrl',function($scope) {
    $scope.tasks = [];
    $scope.selectAll = false;

    // needed to pass the event in order to resolve a problem with Firefox
    // inserts the task and if the user has inserted text pushes the result into the $scope.tasks array
    $scope.addTask = function(event) {
        if($scope.taskText){
            $scope.tasks.push({text:$scope.taskText, done:false});
            $scope.taskText = '';
        }
    };

    // checks how many tasks are done and ready to be deleted
    $scope.taskDone = function() {
        return ($scope.tasks.length != $scope.remaining());
    }

    // checks how many remaining tasks are left to be done
    $scope.remaining = function() {
        var counter = 0;
        angular.forEach($scope.tasks, function(task) {
            counter += task.done ? 0 : 1;
        });
        return counter;
    };

    // selects and un-selects all tasks in order to mark them as done or not
    $scope.toggleselectAll = function() {
        angular.forEach($scope.tasks, function(task) {
            task.done =$scope.selectAll;
        });
    };

    // checks through forEach loop all the done tasks and deletes them
    $scope.removeTasks = function() {
        var doneTasks = $scope.tasks;
        $scope.tasks = [];
        angular.forEach(doneTasks, function(task) {
            if (!task.done) $scope.tasks.push(task);
        });
    };

    // if there is a task inserted the menu and the tasks area are displayed to the user
    $scope.isTask = function(){
        return $scope.tasks.length > 0;
    }

    // checks to display "tasks" if there is more than 1 task or "task" if there is only one task
    $scope.itemText = function() {
        return ($scope.tasks.length - $scope.remaining() > 1) ? "tasks" : "task";
    };
});