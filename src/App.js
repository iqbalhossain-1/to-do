
import './App.css';
import ToDoApp from './ToDoApp';

function App() {
  return (
    <div className="App h-screen bg-gradient-to-r from-green-950 to-red-950 text-white">
      <h1 className='text-4xl font-bold pt-10 mb-10'>To Do list</h1>
      <ToDoApp></ToDoApp>
    </div>
  );
}

export default App;
