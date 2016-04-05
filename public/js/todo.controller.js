(function(){
	angular
	.module('todo')
	.controller("ToDoCtrl", ToDoCtrl)
	
		function ToDoCtrl(todoStorage){

			var self = this;
			self.todos = [];
			self.toggleAllCheckbox = false;

			todoStorage.getItem().success(function(data){
				self.todos = data;
			});
						

			self.addTodo = function(){
				var newItem = {
					title: self.title
				};

				todoStorage.postItem(newItem).success(function(item)
					{
						self.todos.push(item);
					});
				
				self.title="";
			};

			self.clearCompleted = function(){
   				self.todos = self.todos.filter(function(item){
    			return !item.completed;
   				});
  			};

  			self.toogleItem = function(todo) {
  				todoStorage.updateItem(todo).success(function()
  				{
  				});
  			};

  	  		self.toggleAll = function() {
        		if (self.toggleAllCheckbox) {
            		self.toggleAllCheckbox = true;

        		} else {
            		self.toggleAllCheckbox = false;
        		}
        		angular.forEach(self.todos, function(item) {
            		item.completed = self.toggleAllCheckbox;
            		todoStorage.updateItem(item).success(function()
  					{
  					});
        		});
    		};

			self.removeTodo=function(id){
				//function sets item id to remove from view
				var itemToRemove = self.todos.filter(function(item){
					return item.id === id;
				});
				//removes data from server
				todoStorage.removeItem(id).success(function(){
					console.log("Item deleted");
				});
				//render view
				self.todos.splice(self.todos.indexOf(itemToRemove[0]), 1);
			};
		};

})();




