describe("Todo.TaskInput", function() {
  var taskInput, input, callback, event;

  beforeEach(function() {
    callback = jasmine.createSpy();
    input = $("<input/>").val("some task");
    taskInput = new Todo.TaskInput(input);
  });

  it("triggers enter event", function() {
    event = $.Event("keydown");
    event.which = 13;

    taskInput.html.on("keydown", callback);
    console.log(event);
    input.trigger(event);

    // expect(callback).toHaveBeenCalledWith("some task");
    expect(callback).toHaveBeenCalled();
  });

});