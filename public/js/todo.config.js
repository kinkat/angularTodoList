(function(){
	angular
	.module('todo')
	.config(function($routeProvider){
		$routeProvider
			.when('/:filter?', {
			templateUrl:'/layout/index.html',
			controller:"ToDoCtrl",
			controllerAs: "tod"
			})
			.otherwise({redirectTo:'/'});
	});	
})();