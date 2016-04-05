(function(){
	angular
	.module('todo')
	.controller("ToDoCtrl", ToDoCtrl)
	
		function ToDoCtrl(todoStorage){

			var self = this;
			self.todos = [];

			todoStorage.getItem().success(function(data){
				self.todos = data;
			});

			
			self.toggleAllCheckbox = false;
			

			self.addTodo=function(){
				self.todos.push({"title":self.title});
				self.title="";
			};

			self.clearCompleted = function(){
   				self.todos = self.todos.filter(function(item){
    			return !item.completed;
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
        		});
    		};

			self.removeTodo=function(id){
				//function sets item id to remove from view
				var itemToRemove = self.todos.filter(function(item){
					return item.id === id;
					console.log(id);
				});
				//removes data from server
				todoStorage.removeItem(id).success(function(){
					console.log("jaja");
				})
				//render view
				self.todos.splice(self.todos.indexOf(itemToRemove[0]), 1);
			};
		};

})();




