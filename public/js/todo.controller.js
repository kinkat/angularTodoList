(function(){
	'use strict'

	angular
	.module('todo')
	.controller("ToDoCtrl", ToDoCtrl)
	
		function ToDoCtrl(todoStorage) {

			var vm = this;
			vm.todos = [];
			vm.toggleAllCheckbox = false;

			vm.addTodo = addTodo;
			vm.editTodo = editTodo;
			vm.saveEditedTodo = saveEditedTodo;
			vm.removeTodo = removeTodo;
			vm.toogleItem = toogleItem;
			vm.toggleAll = toggleAll;
			vm.clearCompleted = clearCompleted;

			todoStorage.getItem().success(function(data) {
				vm.todos = data;
			});
						
			function addTodo() {
				var newItem = {
					title: vm.title
				};

				todoStorage.postItem(newItem).success(function(item) {
						vm.todos.push(item);
				});
				
				vm.title = "";
			};

			function editTodo(todo) {
				vm.editedTodo = todo;
				vm.originalTodo = angular.extend({}, todo);
			};

			function saveEditedTodo(todo) {
				return todoStorage.updateItem(todo).then(function() {	
					vm.editedTodo = "";
  				});
			};

			function removeTodo(id) {
				//function sets item id to remove from view
				var itemToRemove = vm.todos.filter(function(item) {
					return item.id === id;
				});
				//removes data from server
				return todoStorage.removeItem(id).then(function() {
					console.log("Item deleted");
				});
				//render view
				vm.todos.splice(vm.todos.indexOf(itemToRemove[0]), 1);
			};

			function toogleItem(todo) {
  				return todoStorage.updateItem(todo).then(function() {
  				});
  			};

  	  		function toggleAll() {
        		if (vm.toggleAllCheckbox) {
            		vm.toggleAllCheckbox = true;

        		} else {
            		vm.toggleAllCheckbox = false;
        		}
        		angular.forEach(vm.todos, function(item) {
            		item.completed = vm.toggleAllCheckbox;
            		return todoStorage.updateItem(item).then(function() {
  					});
        		});
    		};

			function clearCompleted() {
				var itemsCompleted = vm.todos.filter(function(item) {
					return item.completed;
				});

				vm.todos = vm.todos.filter(function(item){
   				    return !item.completed;
   				});

				itemsCompleted.forEach(function(item){
					return todoStorage.removeItem(item.id).then(function() {
					});
				});


  			};
 			
		};

})();




