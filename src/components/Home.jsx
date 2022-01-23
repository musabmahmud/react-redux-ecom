import React from 'react';
// import backgroundImage from './public/assets/bg.jpg';
import Products from './Products';
const Home = () => {
    const backgroundImg = {
        backgroundImage: `url('assets/bg3.jpg')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh'
    }
    return (
        <>
            <div className='w-full flex flex-row items-center sm:bg-cover' style={backgroundImg}>
                <div className='sm:px-20 px-10 text-center sm:text-left '>
                    <h2 className='capitalize text-5xl sm:text-8xl font-bold text-yellow-200'>New Season arrival</h2>
                    <p className='capitalize mt-5 text-xl sm:text-6xl text-white'>Check out all trends</p>
                </div>
            </div>
            <Products/>
        </>
    );
};

export default Home;