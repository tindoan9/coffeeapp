import './App.css';
import { CoffeeApp } from './components/CoffeeApp';

function App() {
  return (
    <>
      {/* will conflict here */}
      {/* dfhsjkdfhjksdfhkjhkjf */}
      <CoffeeApp></CoffeeApp>
    </>
  );
}

export default App;
