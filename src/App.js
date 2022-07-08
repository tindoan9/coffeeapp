import './App.css';
import { CoffeeApp } from './components/CoffeeApp';

function App() {
  return (
    <>
      {/* will conflict here */}
      <CoffeeApp></CoffeeApp>
    </>
  );
}

export default App;
