;(function(Todo){
   Todo.TaskManager = function(taskInput) {
      this.taskInput = taskInput;

      this.addEventListners();
   };

   Todo.TaskManager.prototype.addEventListners = function() {

      event.preventDefault();
      event.stopPropagation();
      this.taskInput.on('enter', this.onEnter, this);
   };

   Todo.TaskManager.prototype.onEnter = function(title) {

      event.preventDefault();
      event.stopPropagation();
      var task = new Todo.Task({
         title : title,
      });

      console.log(title.target.value);

   }

})(Todo);