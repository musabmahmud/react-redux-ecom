import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setLoadingProducts(true);

            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data)
            setLoadingProducts(false)
        }
        getProducts();
    }, []);

    return (
        <div className='container mx-auto items-center px-5 py-10 sm:py-24'>
                <div className='px-10 mt-10 flex flex-row items-center h-48 w-full bg-gray-100 rounded text-4xl text-bold text-center justify-center'>
                    SHOP
                </div>
                {
                    loadingProducts ?
                    <div className='flex items-center text-xl justify-center'><FaSpinner className='animate-spin mr-2' />Loading.....</div>
                    : 
                    <div className="mt-10 grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
                        {products.map(product => 
                        <div className="max-w-xs h-auto rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer" key={product.id}>
                            <div>
                                <img src={product.image} alt={product.title} className='block w-full' style={{height: '300px'}}/>
                            </div>
                            <div className="py-3 px-6 bg-white">
                                <h3 className="text-md font-semibold text-gray-600">{product.title}</h3>
                                <p className="mt-2 text-lg font-bold">${product.price}</p>
                                <p className='py-2 text-justify text-gray-500'>{product.description.substring(1, 100)}...</p>
                                <Link to={`${product.id}`} className="flex items-center justify-center my-4 w-full border border-gray-500 hover:bg-gray-700 hover:text-white bg-white py-2 rounded font-bold transition-all">
                                    Buy Now <MdAddShoppingCart className='ml-2'/>
                                </Link>
                            </div>
                        </div>
                        )}
                    </div>
                }
        </div>
    );
};

export default Products;