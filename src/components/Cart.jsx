import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, removeCart } from '../redux/action';
const Cart = () => {

    const state = useSelector((state) => state.handleCart);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    const removeProduct = (product) => {
        dispatch(removeCart(product));
    }


    return (
        <div className="container mx-auto pt-10">
            <div className='px-10 mt-20 flex flex-row items-center h-48 w-full bg-gray-100 rounded text-4xl text-bold text-center justify-center'>
                Cart
            </div>
            <div className="sm:flex shadow-md">
                <div className="w-full sm:w-3/4 bg-white px-2 sm:px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl">{state.length} Items</h2>
                    </div>
                    <div className="flex mt-10 mb-5 sm:px-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/4">Product Details</h3>
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/4 text-center">Quantity</h3>
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/4 text-center">Unit Price</h3>
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/4 text-center">Total</h3>
                    </div>
                    {state.map( (product) => 
                        <div className="flex items-center hover:bg-gray-100 sm:py-5 shadow-md sm:px-5">
                        <div className="sm:flex w-1/4">
                            <div className="w-14 sm:w-20">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="flex flex-col justify-between sm:ml-4 flex-grow">
                                <span className="font-bold text-sm">{product.title}</span>
                                <span className="text-blue-500 text-xs">Category :{product.category}</span>
                            </div>
                        </div>
                        <div className="flex justify-center w-1/4">
                            <button onClick={() => removeProduct(product)}><FaMinus /></button>
                            <input className="mx-2 border border-gray-200 text-center w-8" type="text" disabled value={product.quantity} />
                            <button onClick={() => addProduct(product)}><FaPlus /></button>
                        </div>
                        <span className="text-center w-1/4 font-semibold text-sm items-center">${product.price}</span>
                        <span className="text-center w-1/4 font-semibold text-sm">${product.price * product.quantity}</span>
                    </div>
                    )}
                    
                </div>

                <div id="summary" className="w-full sm:w-1/4 px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">Items {state.length} </span>
                        <span className="font-semibold text-sm">590$</span>
                    </div>
                    <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                        <select className="block p-2 text-gray-600 w-full text-sm">
                            <option>Standard shipping - $10.00</option>
                        </select>
                    </div>
                    <div className="py-10">
                        <label className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>$600</span>
                        </div>
                        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cart;