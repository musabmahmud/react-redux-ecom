import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const [menuOpen, setMenuOpen] = useState(false);
    return (
    <div className="flex flex-wrap absolute w-full h-auto">
        <div className="w-full">
          <nav className="relative py-3 bg-gray-100 rounded shadow-sm">
            <div className="container mx-auto flex md:flex-row flex-col items-center px-5">
              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <Link to="/"
                  className="font-bold leading-relaxed inline-block text-2xl py-2 whitespace-nowrap uppercase"
                >
                  Ecommerce Redux
                </Link>
                <button
                  className="cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <FaBars/>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <Link className="px-3 py-2 flex items-center uppercase"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="px-3 py-2 flex items-center uppercase"
                      to="shop"
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="px-3 py-2 flex items-center uppercase"
                      to="about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="px-3 py-2 flex items-center uppercase"
                      to="#p"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="px-3 my-3 lg:mx-3 lg:my-0 flex items-center uppercase bg-gray-500 text-white py-2 rounded font-bold"
                      to="#p"
                    >
                      <FiLogIn className='mr-2'/>Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="px-3 my-3 lg:mx-3 lg:my-0 flex items-center uppercase bg-gray-500 py-2 rounded text-white font-bold"
                      to="cart"
                    >Cart ({state.length})
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )};

export default Navbar;