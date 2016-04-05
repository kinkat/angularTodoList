(function(){
	angular
	.module('todo')
	.factory('todoStorage', ['$http', function($http) {
		var urlBase = '/api/todos';
		var todoStorage = {};

		todoStorage.getItem = function(){
			return $http.get(urlBase);
		};

		todoStorage.postItem = function(item){
			return $http.post(urlBase, item)
		};
		
		todoStorage.removeItem = function(id){ 
			return $http.delete(urlBase + '/' + id);
		};

		todoStorage.updateItem = function(item){
			return $http.put(urlBase + '/' + item.id, item);
		}

		return todoStorage;
	}]);

})();



