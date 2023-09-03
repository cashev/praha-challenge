import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useRef } from "react";

const TodoBox = () => {
  const [data, setData] = useState([
    { id: "00001", task: "Wake up", complete: "false" },
    { id: "00002", task: "Eat breakfast", complete: "false" },
    { id: "00003", task: "Go to work", complete: "false" }
  ]);

  const generateId = () => {
    return Math.floor(Math.random() * 90000) + 10000;
  };

  const handleNodeRemoval = (nodeId) => {
    const newData = data.filter((el) => el.id !== nodeId);
    setData(newData);
  };

  const handleSubmit = (task) => {
    const id = generateId().toString();
    const complete = "false";
    const newData = [...data, { id, task, complete }];
    setData(newData);
  };

  const handleToggleComplete = (nodeId) => {
    const newData = data.map((item) => {
      if (item.id === nodeId) {
        item.complete = item.complete === "true" ? "false" : "true";
      }
      return item;
    });
    setData(newData);
  };

  return (
    <div className="well">
      <h1 className="vert-offset-top-0">To do:</h1>
      <TodoList
        data={data}
        removeNode={handleNodeRemoval}
        toggleComplete={handleToggleComplete}
      />
      <TodoForm onTaskSubmit={handleSubmit} />
    </div>
  );
};

const TodoList = ({ data, removeNode, toggleComplete }) => {
  return (
    <ul className="list-group">
      {data.map((listItem) => (
        <TodoItem
          key={listItem.id}
          nodeId={listItem.id}
          task={listItem.task}
          complete={listItem.complete}
          removeNode={removeNode}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

const TodoItem = ({ nodeId, task, complete, removeNode, toggleComplete }) => {
  const classes =
    complete === "true"
      ? "list-group-item clearfix list-group-item-success"
      : "list-group-item clearfix";

  return (
    <li className={classes}>
      {task}
      <div className="pull-right" role="group">
        <button
          type="button"
          className="btn btn-xs btn-success img-circle"
          onClick={() => toggleComplete(nodeId)}
        >
          &#x2713;
        </button>
        <button
          type="button"
          className="btn btn-xs btn-danger img-circle"
          onClick={() => removeNode(nodeId)}
        >
          &#xff38;
        </button>
      </div>
    </li>
  );
};

const TodoForm = ({ onTaskSubmit }) => {
  const taskRef = useRef(null);

  const doSubmit = (e) => {
    e.preventDefault();
    const task = taskRef.current.value.trim();
    if (!task) {
      return;
    }
    onTaskSubmit(task);
    taskRef.current.value = "";
  };

  return (
    <div className="commentForm vert-offset-top-2">
      <hr />
      <div className="clearfix">
        <form className="todoForm form-horizontal" onSubmit={doSubmit}>
          <div className="form-group">
            <label htmlFor="task" className="col-md-2 control-label">
              Task
            </label>
            <div className="col-md-10">
              <input
                type="text"
                id="task"
                ref={taskRef}
                className="form-control"
                placeholder="What do you need to do?"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-2 text-right">
              <input
                type="submit"
                value="Save Item"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoBox;
