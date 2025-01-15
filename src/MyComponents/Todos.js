import React from 'react';
import { TodoItem } from "../MyComponents/TodoItem";

export const Todos = (props) => {
  // Inline style for the container
  const myStyle = {
    minHeight: "50vh",
    margin: "20px auto",
  };

  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0 ? (
        "No Todos to display"
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.sno} // Unique key is important for React rendering
              onDelete={props.onDelete}
            />
          );
        })
      )}
    </div>
  );
};



