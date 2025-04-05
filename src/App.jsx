import Header from "./layout/header";
import Footer from "./layout/footer";
import { Outlet } from "react-router-dom";

// const TodoApp = () => {
//   const [todoList, setTodoList] = useState([
//     // {
//     //   id: 1,
//     //   name: "Learning React",
//     // },
//     // {
//     //   id: 2,
//     //   name: "Watching Youtube",
//     // },
//   ]);

//   const addNewTodo = (name) => {
//     const newTodo = {
//       id: randomIntFromInterval(1, 1000000),
//       name: name,
//     };
//     setTodoList([...todoList, newTodo]);
//   };

//   const randomIntFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };
//   const deleteTodo = (id) => {
//     const newTodo = todoList.filter((item) => item.id !== id);
//     setTodoList(newTodo);
//   };
// };
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
