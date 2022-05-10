const TodoList = ({ title, id, status, handleToggle, handleDelete }) => {
  return (
    <>
      <div>
        {title} -
        <button onClick={() => handleToggle(id)}>
          {status ? "true" : "false"}
        </button>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </>
  );
};
export default TodoList;
