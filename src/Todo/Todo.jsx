import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";
import { useState } from "react";
const Todo = () => {
  const [data, setData] = useState([]);
  const handleClick = (title) => {
    const payload = {
      title: title,
      status: false,
      id: uuid()
    };
    setData([...data, payload]);
    // setData((prevData) => [...prevData, payload]);
  };
  const handleToggle = (id) => {
    const updatedTodo = data.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setData(updatedTodo);
  };
  const handleDelete = (id) => {
    const updatedTodo = data.filter((item) => item.id !== id);
    setData(updatedTodo);
  };
  return (
    <>
      <TodoInput handleClick={handleClick} />
      {data.map((item) => {
        return (
          <TodoList
            key={item.id}
            {...item}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        );
      })}
    </>
  );
};
export default Todo;
