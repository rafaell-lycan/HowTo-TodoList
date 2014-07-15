;(function (){
   var Todo;
   window.Todo = Todo = {};

   Todo.init = function(html){
    //Fazendo wrapper do jQuery e injetando o DOM inicial
    this.html = $(html);

    //Responsavel pelo carregamento da pagina
    this.loader = new Todo.Loader(
      this.html.find(".loading"),
      this.html.find(".page")
    );

    //Input responsavel por adicionar novas tasks
    this.taskInput = new Todo.TaskInput(
      this.html.find('.task-input')
    );

    // this.taskInput.enter();

    //Inicializa o loader
    this.loader.init();
   };
})();
