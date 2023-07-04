import NewTodo from "./component/NewTodo";
import Todos from "./component/Todo";
import TodoContextProvider from "./store/todos-context";

function App() {
  return (
    <div>
      <TodoContextProvider>
        <NewTodo />
        <Todos />
      </TodoContextProvider>
    </div>
  );
}

export default App;
