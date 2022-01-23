import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { FaCartPlus, FaOpencart, FaSpinner } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const Product = () => {
    let { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loadingProduct, setLoadingProduct] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) =>{
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProducts = async () => {
            setLoadingProduct(true);
            const response = await fetch((`https://fakestoreapi.com/products/${id}`));
            const data = await response.json();
            setProduct(data)
            setLoadingProduct(false)
        }
        getProducts();
    }, [id]);

    const Loading = () => {
        return (
            <div className='flex items-center text-xl justify-center'><FaSpinner className='animate-spin mr-2'/>Loading.....</div>
        )
    }

    return (
        <>
        <div className="text-gray-700 py-20">
            <div className='px-10 mt-10 flex flex-row items-center h-48 w-full bg-gray-100 rounded text-4xl text-bold text-center justify-center'>
                Product Details
            </div>
            {loadingProduct ? <Loading/> :
            <div className="container mx-auto pt-10 flex md:flex-row flex-col items-center sm:px-20">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:pr-24 md:pr-16">
                    <img className="object-cover object-center rounded" alt={product.title} src={product.image}/>
                </div>
                <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{product.title}
                    </h1>
                    <p className="title-font text-xl mb-4 font-medium text-gray-900">Price : ${product.price}
                    </p>
                    <p className="mb-8 leading-relaxed">{product.description}<br/><br/>{product.description}</p>
                    <div className="flex items-center justify-center">
                        <Link to="" className="flex my-4 px-6 items-center border border-gray-500 bg-white py-2 rounded font-bold transition-all mr-5">Go to Cart <FaOpencart className='ml-1'/></Link>
                        <button onClick={() => addProduct(product)} className="flex my-4 px-6 items-center border border-gray-500 bg-gray-700 text-white hover:text-gray-700 hover:bg-white py-2 rounded font-bold transition-all">Added to Cart <FaCartPlus className='ml-1'/> </button>
                    </div>
                </div>
            </div>
            }
        </div>
        </>
    );
};

export default Product;