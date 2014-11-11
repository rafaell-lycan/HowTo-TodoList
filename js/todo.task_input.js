;(function(Todo){
   Todo.TaskInput = function(html) {
      this.html = html;

      this.addEventListners();
   };

   // Todo.TaskInput.prototype.on = function(event, callback){

   //    console.log(event, callback);
   //    this.html.on("enter", callback);
   // };

   Todo.TaskInput.prototype.addEventListners = function() {
      this.html.on("keydown", $.proxy(this, "onKeyDown"));
   }

   Todo.TaskInput.prototype.onKeyDown = function(event){
      if( (event.keyCode || event.which) !== 13){
         return true;
      }

      event.preventDefault();
      event.stopPropagation();
      // this.html.trigger('enter', event.target.value);
      // console.log(event.target.value);
   }

})(Todo);