angular
    .module('todo')
    .directive('todoFooter', todoFooter);

function todoFooter() {
    var directive = {
        link: link,
        templateUrl: '/layout/todo-footer.html',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
      /* */
    }
}