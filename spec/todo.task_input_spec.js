describe("Todo.TaskInput", function() {
  var taskInput, input, callback, event;

  beforeEach(function() {
    callback = jasmine.createSpy();
    input = $("<input/>").val("some task");
    taskInput = new Todo.TaskInput(input);
  });

  //Verifica se o enter foi pressionado
  it("triggers enter event", function() {
    event = $.Event("keydown"); //Definindo novo evento
    event.which = 13; // Set valor 13 na tecla (Enter Key)

    taskInput.html.on("enter", callback); // Set event listenet no Spy
    // console.log(event);
    input.trigger(event);

    expect(callback).wasCalled();
  });

  //Verifica se alguma outra tecla foi pressionada
  it("skip enter event - press another key", function() {
    event = $.Event("keydown"); //Definindo novo evento
    event.which = 27; // Set valor 27 na tecla (Esc Key)
    taskInput.html.on("enter", callback); // Set event listenet no Spy
    input.trigger(event);

    expect(callback).wasNotCalled();
  });

  it("emits input value", function() {

  });

});