import './App.css';
// import { CoffeeApp } from './coffeeApp/CoffeeApp';
import Admin from './Admin/Admin';
import React, { useState } from 'react';
// import { ProductData } from './Admin/AdminPages/Products/ProductData';

// export const TodoListContext = React.createContext([])
function App() {
  // const [listProduct, setListProduct] = useState(ProductData)
  
  return (
    // <TodoListContext.Provider value={{
    //   listProduct,
    //   setListProduct
    // }}>
      <div className='app'>

        {/* <CoffeeApp></CoffeeApp> */}
        <Admin/>
      </div>
    // </TodoListContext.Provider>
  );
}

export default App;
