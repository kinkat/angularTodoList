angular
    .module('todo')
    .directive('todoHeader', todoHeader);

function todoHeader() {
    var directive = {
        link: link,
        templateUrl: '/layout/todo-header.html',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
      /* */
    }
}