import { useDispatch, } from 'react-redux'
import { addItem } from '../features/counter/cartSlice'
import data from '../assets/product.json'
const Products = () => {

    const dispatch = useDispatch()



    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {data.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="text-xl font-semibold text-gray-800">{item.name}</div>
                    <div className="text-sm text-gray-500 mt-2">{item.description}</div>
                    <div className="text-lg font-bold text-gray-900 mt-4">${item.price}</div>
                    <div className="text-sm text-gray-700 mt-2">{item.category}</div>
                    <div className="text-sm text-gray-700 mt-1">{item.stock_quantity} in stock</div>
                    <div className="text-sm text-gray-700 mt-1">Brand: {item.brand}</div>
                    <button
                        onClick={() => dispatch(addItem(item))}
                        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                        Add To Cart
                    </button>
                </div>
            ))}
        </div>

    )
}

export default Products
