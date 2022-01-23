import React from 'react';
import { Link } from 'react-router-dom';

const breadcrumb = () => {
    return (
        <ol className="py-4 pl-4 rounded flex bg-gray-500 text-gray-50">
            <li className="px-2"><Link to="home" className="text-indigo">Home</Link></li>
            <li className="px-2 text-indigo">{window.location.pathname}</li> 
        </ol>
    );
};

export default breadcrumb;