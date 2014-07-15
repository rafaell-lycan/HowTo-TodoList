;(function(Todo){
   Todo.TaskInput = function(html) {
      this.html = html;

      this.addEventListners();

   };

   Todo.TaskInput.prototype.addEventListners = function() {
      this.html.on("keydown", $.proxy(this, "enter"));
   }

   Todo.TaskInput.prototype.enter = function(event){
      if( (event.keyCode || event.which) != 13){
         return true;
      }

      event.preventDefault();
      event.stopPropagation();
      console.log(event.target.value);
      // return event.target.delegateTarget;
   }


   /**
   var html = document.getElementsByTagName('input')[0];

   //Validate if <enter> button is pressed (keydown event)
   Todo.taskInput = function(e, html){
      if(e.keyCode !== 13){
         return false;
      }
      var manager = new Todo.taskManager({title: html.value, status: "pendente"});

      manager.isValid();
   }

   html.onkeydown = function(e){
      Todo.taskInput(e, this);
   };
   */
})(Todo);