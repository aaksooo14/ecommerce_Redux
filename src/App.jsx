import Products from "./Component/Products"
import Cart from "./Component/Cart"
const App = () => {



  return (
    <div>
      <h1 className="text-8xl text-white font-bold bg-gray-500 p-5 flex justify-center
      ">Ecommerce Site Using Redux</h1>
      <Cart />
      <Products />


    </div>
  )
}

export default App
