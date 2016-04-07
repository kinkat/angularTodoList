angular
    .module('todo')
    .directive('todoFooter', todoFooter);

function todoFooter() {
    var directive = {
        templateUrl: '/layout/todo-footer.html',
        restrict: 'EA'
    };
    return directive;

}