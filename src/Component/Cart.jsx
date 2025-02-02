import { useSelector } from "react-redux"

const Cart = () => {
    const items = useSelector(state => state.cart.items)
    const total = items.reduce((a, b) => a + b.price, 0)
    console.log(total)

    return (
        <div className="bg-blue-200 h-[100px] flex flex-col justify-center items-center p-4">
            <h1 className="text-3xl font-semibold text-gray-800">Cart Page</h1>
            <h2 className="text-xl font-medium text-gray-700">Total Items: <span className="font-bold text-blue-600">{items.length}</span></h2>
            <h2 className="text-xl font-medium text-gray-700">Total Price: <span className="font-bold text-green-600">{total}/-</span></h2>
        </div>

    )
}

export default Cart
