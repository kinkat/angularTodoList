(function(){
	angular
	.module('todo')
	.filter('showFiltrated', showFiltrated);

			function showFiltrated(){
			return function(input) {
				var filtratedArray = [];

			angular.forEach(input, function(item){
				if (item.completed) {
					filtratedArray.push(item)
				}
			});
				return filtratedArray;
			};

	};

})();