import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { MdTableView } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setLoadingProducts(true);

            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data)
            setFilterProducts(data)
            setLoadingProducts(false)
        }
        getProducts();
    }, []);

    const updatedProducts = (opt) =>{
        const updatedList = products.filter((x) => x.category === opt);
        setFilterProducts(updatedList)
    }

    const Loading = () => {
        return (
            <div className='flex items-center text-xl justify-center'><FaSpinner className='animate-spin mr-2' />Loading.....</div>
        )
    }

    const ShowProduct = () => {
        return (
            <div className=''>
                <div className="grid grid-flow-row sm:grid-flow-col items-center space-y-3 sm:space-y-0 sm:space-x-10 text-center sm:justify-center">
                    <button className='px-6 py-2 font-bold  rounded outline outline-2 outline-offset-0 outline-gray-400 hover:bg-slate-900 hover:text-white transition shadow-lg duration-100' onClick={() => setFilterProducts(products)}>All</button>
                    <button className='px-6 py-2 font-bold  rounded outline outline-2 outline-offset-0 outline-gray-400 hover:bg-slate-900 hover:text-white transition shadow-lg duration-100'onClick={() => updatedProducts("men's clothing")}>Men's</button>
                    <button className='px-6 py-2 font-bold  rounded outline outline-2 outline-offset-0 outline-gray-400 hover:bg-slate-900 hover:text-white transition shadow-lg duration-100'onClick={() => updatedProducts("women's clothing")}>Women's</button>
                    <button className='px-6 py-2 font-bold  rounded outline outline-2 outline-offset-0 outline-gray-400 hover:bg-slate-900 hover:text-white transition shadow-lg duration-100' onClick={() => updatedProducts("jewelery")}>Jewelery</button>
                    <button className='px-6 py-2 font-bold  rounded outline outline-2 outline-offset-0 outline-gray-400 hover:bg-slate-900 hover:text-white transition shadow-lg duration-100' onClick={() => updatedProducts("electronics")}>Electronics</button>
                </div>
                <div>
                    <div className="px-10 mt-10 grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
                        {filterProducts.map(product => 
                        <div className="max-w-xs h-auto rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer" key={product.id}>
                            <div>
                                <img src={product.image} alt={product.title} className='block w-full' style={{height: '300px'}}/>
                            </div>
                            <div className="py-3 px-6 bg-white">
                                <h3 className="text-md font-semibold text-gray-600">{product.title}</h3>
                                <p className="mt-2 text-lg font-bold">${product.price}</p>
                                <p className='py-2 text-justify text-gray-500'>{product.description.substring(1, 100)}...</p>
                                <Link to={`products/${product.id}`} className="flex items-center justify-center my-4 w-full border border-gray-500 hover:bg-gray-700 hover:text-white bg-white py-2 rounded font-bold transition-all">
                                    View Details <MdTableView className='ml-2'/>
                                </Link>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className='px-5 py-10 sm:px-20 sm:py-24'>
            <div className='text-center border-b-2  border-gray-300'>
                <h3 className="text-5xl text-bold pb-5 capitalize">Latest Products</h3>
            </div>
            <div className='pt-20'>
                {loadingProducts ?
                    <Loading /> : <ShowProduct />
                }
            </div>
        </div>
    );
};

export default Products;