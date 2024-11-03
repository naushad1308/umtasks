import './App.css'
import AddTodo from './components/AddTodo'
import { Provider } from 'react-redux';
import { store } from './store/store';
import TodoList from './components/TodoList';

function App() {

  return (
    <>
      <Provider store={store}>
        <div className="App">
          <h1>Todo List</h1>
          <AddTodo />
          {/* You can add a TodoList component here to display todos */}
        </div>
        <TodoList />
      </Provider>
    </ >
  )
}

export default App
