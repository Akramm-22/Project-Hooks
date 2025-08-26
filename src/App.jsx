import Counterr from './Latihan React Hooks/Counterr.jsx';
import FetchUsers from './Latihan React Hooks/FetchUsers.jsx';
import FocusInput from './Latihan React Hooks/FocusInput.jsx';
import FactorialCalculator from './Latihan React Hooks/FactorialCalculator.jsx';
import DaftarItem from './Latihan React Hooks/DaftarItem.jsx';
import TodoListReducer from './Latihan React Hooks/TodoListReducer.jsx';
import { ThemeProvider, ThemeSwitcher } from './Latihan React Hooks/ThemeContext.jsx';
import ScrollPosition from './Latihan React Hooks/ScrollPosition.jsx';
import ParentCustomInput from './Latihan React Hooks/ParentCustomInput.jsx';
import LocalStorageDemo from './Latihan React Hooks/LocalStorageDemo.jsx';
import './App.css';


function App() {
  return (
    <ThemeProvider>
      <ScrollPosition /> 
      <div style={{ padding: 24 }}>
        <Counterr />
        <hr />
        <FetchUsers />
        <hr />
        <FocusInput />
        <hr />
        <FactorialCalculator />
        <hr />
        <DaftarItem />
        <hr />
        <TodoListReducer />
        <hr />
        <ThemeSwitcher />
        <hr />
        <ParentCustomInput />
        <hr />
        {/* <LocalStorageDemo />  */}
      </div>
    </ThemeProvider>
  );
}

export default App
