import "./styles.css";
import React from "react";

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingItems: ["Item1", "Item2"],
      competedItems: ["Item3"]
    };
    this.markItemAsCompleted = this.markItemAsCompleted.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.createTODOItem = this.createTODOItem.bind(this);
  }

  markItemAsCompleted(item) {
    console.log("markItemAsCompleted Called");

    let newToDOList = [];
    this.state.pendingItems.forEach((element) => {
      if (element !== item) {
        newToDOList.push(element);
      }
    });
    this.state.competedItems.push(item);
    this.setState({
      pendingItems: newToDOList,
      competedItems: this.state.competedItems
    });
  }

  deleteItem(item) {
    console.log("deleteItem Called");

    let newCompletedList = [];
    this.state.competedItems.forEach((element) => {
      if (element !== item) {
        newCompletedList.push(element);
      }
    });

    this.setState({
      pendingItems: this.state.pendingItems,
      competedItems: newCompletedList
    });
  }

  createTODOItem(event) {
    console.log("createTODOItem called");
    console.log(event);
    this.state.pendingItems.push(event.target.elements.todoItem.value);
    this.setState({
      pendingItems: this.state.pendingItems,
      competedItems: this.state.competedItems
    });
    console.log(event.target.elements.todoItem.value);

    event.preventDefault();
  }

  render() {
    let todoList;
    if (this.state.pendingItems.length !== 0) {
      todoList = (
        <>
          <div>ToDo List</div>
          {this.state.pendingItems.map((word, idx) => {
            return (
              <>
                <div>
                  <p>{word}</p>
                  <button
                    value={word}
                    key={word}
                    onClick={(event) => {
                      this.markItemAsCompleted(event.target.value);
                    }}
                  >
                    Done
                  </button>
                </div>
              </>
            );
          })}
        </>
      );
    }

    let competedItemsList = (
      <>
        <div>Completed Items:</div>
        {this.state.competedItems.map((word, idx) => {
          return (
            <>
              <div>
                <p>{word}</p>
                <button
                  value={word}
                  key={word}
                  onClick={(event) => {
                    this.deleteItem(event.target.value);
                  }}
                >
                  Delete
                </button>
              </div>
            </>
          );
        })}
      </>
    );

    let toDOForm = (
      <>
        <div>Create a new ToDO item</div>
        <form onSubmit={this.createTODOItem}>
          <label>
            ToDo list
            <input type="textarea" name="todoItem" />
          </label>
          <button type="submit">Create</button>
        </form>
      </>
    );

    console.log(this.state.event);
    return (
      <>
        {todoList}
        {competedItemsList}
        {toDOForm}
      </>
    );
  }
}

export default ToDoApp;
