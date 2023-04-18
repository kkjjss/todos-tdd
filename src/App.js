import "./App.css";
import { DelayedToggle } from "./Components/DelayedToggle";
import TodoApp from "./Components/TodoApp";
import { UserProfile } from "./Components/UserProfile";

function App() {
  return (
    <>
      <UserProfile id={1} />
      <TodoApp />
      <DelayedToggle />
    </>
  );
}

export default App;
