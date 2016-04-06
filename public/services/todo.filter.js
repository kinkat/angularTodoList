(function(){
	angular
	.module('todo')
	.filter('showFiltrated', showFiltrated);
	
	showFiltrated.$inject = ['$routeParams'];

	function showFiltrated($routeParams) {
		return function(input) {
			var obj = {};
			var filterParam = $routeParams.filter;
			var filtratedArray = [];
			
			input.forEach(function(todo) {
				if ('active' === $routeParams.filter) {
					if(!todo.completed) {
						filtratedArray.push(todo);
					} 
				}
				if ('completed' === $routeParams.filter) {
					if(todo.completed) {
						filtratedArray.push(todo);
					} 
				}
				if (!$routeParams.filter){
					
					filtratedArray.push(todo);
				}
				
			});
		return filtratedArray;
		};

	};

})();



	