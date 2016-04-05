(function(){
	angular
	.module('todo')
	.factory('todoStorage', ['$http', function($http) {
		var urlBase = '/api/todos';
		var todoStorage = {};

		todoStorage.getItem = function(){
			return $http.get(urlBase);
		};
		
		todoStorage.removeItem = function(id){ console.log(id);
			return $http.delete(urlBase + '/' + id);
		};

		todoStorage.updateItem = function(id){
			return $http.
		}

		return todoStorage;
	}]);

})();



