(function(){
	angular
		.module('todo')
		.factory('todoStorage', todoStorage);

	todoStorage.$inject = ['$http'];

	function todoStorage($http) {

		var urlBase = '/api/todos';
		var service = {
			getItem : getItem,
			postItem : postItem,
			removeItem : removeItem,
			updateItem : updateItem

		};

		return service;

		function getItem() {
			return $http.get(urlBase)
				.then(getItemComplete)
				.catch(getItemFailed);


			function getItemComplete(response){
				return response.data;
			}

			function getItemFailed(error){
				console.log("Errorrrrrr");
			}

		};

		function postItem(item) {
			return $http.post(urlBase, item)
				.then(postItemComplete)
				.catch(postItemFailed);


			function postItemComplete(response){
				return response.data;
			}

			function postItemFailed(error){
				console.log("Errorrrrrr");
			}

		};

		function removeItem(id) {
			return $http.delete(urlBase + '/' + id)
				.then(removeItemComplete)
				.catch(removeItemFailed);


			function removeItemComplete(response){
				return response.data;
			}

			function removeItemFailed(error){
				console.log("Errorrrrrr");
			}

		};

		function updateItem(item) {
			return $http.put(urlBase + '/' + item.id, item)
				.then(updateItemComplete)
				.catch(updateItemFailed);


			function updateItemComplete(response){
				return response.data;
			}

			function updateItemFailed(error){
				console.log("Errorrrrrr");
			}

		};
	}

})();







