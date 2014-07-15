;(function(Todo){
   Todo.taskManager = function(html){
      this.title = html.title;
      this.status = html.status;
   }

   Todo.taskManager.prototype.isValid = function(){

      if(this.title == ""){
         return false;
      }

      console.log("Titulo:",this.title);
   }

})(Todo);